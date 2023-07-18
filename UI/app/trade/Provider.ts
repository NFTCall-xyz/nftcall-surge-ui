import { useWallet } from 'domains'
import type { LogDescription } from 'ethers/lib/utils'
import { useCallback, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { usePost } from 'app/hooks/request'
import { useDialog } from 'app/hooks/useDialog'
import { createContextWithProvider } from 'app/utils/createContext'
import { getWeiToValueBN, safeGet } from 'app/utils/get'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNFTCollections, useNetwork, useVault } from 'domains/data'

import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { GetPositionPNLWeightedDeltaProps, OpenPositionProps } from 'lib/protocol/typechain/nftcall-surge'

import type { OptionPosition } from './Positions/Table/request/getPositions'

const usePageEffect = () => {}

const useNFTCollection = () => {
  const {
    vault: {
      lpToken: { wETHBalance },
      wETHAllowance,
    },
    updateVaults,
  } = useVault()
  const { collections, updateNFTCollections } = useNFTCollections()
  const [NFTCollectionAddress, setNFTCollectionAddress] = useImmer(collections[0].address.collection)
  const collection = useMemo(
    () => collections.find((i) => i.address.collection === NFTCollectionAddress),
    [NFTCollectionAddress, collections]
  )

  const sendTransaction = useSendTransaction()
  const { account } = useWallet()
  const mobileDialog = useDialog()

  const {
    address: { Vault: vaultAddress, WETH: wETHAddress },
    contracts: { vaultService, erc20Service },
  } = useNetwork()
  const approveOpenPosition = useCallback(
    (props: Pick<OpenPositionProps, 'optionType' | 'strikePrice' | 'expiry' | 'amount' | 'maximumPremium'>) =>
      transaction({
        createTransaction: vaultService.approveOpenPosition({
          Vault: vaultAddress,
          wETHAddress,
          userAddress: account,
          collectionAddress: collection.address.collection,
          approveService: erc20Service,
          ...props,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: true,
      }).finally(() => {
        updateVaults()
      }),
    [
      account,
      collection.address.collection,
      erc20Service,
      sendTransaction,
      updateVaults,
      vaultAddress,
      vaultService,
      wETHAddress,
    ]
  )
  const openOptions = useCallback(
    (props: Pick<OpenPositionProps, 'optionType' | 'strikePrice' | 'expiry' | 'amount' | 'maximumPremium'>) =>
      transaction({
        createTransaction: vaultService.openPosition({
          Vault: vaultAddress,
          wETHAddress,
          userAddress: account,
          collectionAddress: collection.address.collection,
          approveService: erc20Service,
          ...props,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
        .then((receipt) => {
          const logs: LogDescription[] = safeGet(() =>
            receipt.logs
              .map((data: any) =>
                safeGet(() => vaultService.getContractInstance(vaultAddress).interface.parseLog(data))
              )
              .filter((i: any) => i)
          )
          const result = logs.find((i) => i.name === 'OpenPosition')
          if (!result) return
          const positionId = result.args.positionId.toNumber()

          return {
            positionId,
            userAddress: account,
            collectionAddress: collection.address.collection,
            ...props,
          }
        })
        .finally(() => {
          updateNFTCollections()
        }),
    [
      account,
      collection.address.collection,
      erc20Service,
      sendTransaction,
      updateNFTCollections,
      vaultAddress,
      vaultService,
      wETHAddress,
    ]
  )

  return {
    wETHBalance,
    wETHAllowance,
    collection,
    approveOpenPosition,
    openOptions,
    setNFTCollectionAddress,
    mobileDialog,
  }
}

const usePositions = () => {
  const [sourceData, setSourceData] = useImmer<OptionPosition[]>([])
  const [collectionAddress, setCollectionAddress] = useImmer('')
  const {
    address: { Vault },
    contracts: { vaultService },
  } = useNetwork()

  const useGetPositionPNLWeightedDelta = useCallback(
    function useGetPositionPNLWeightedDelta() {
      return usePost((props: Pick<GetPositionPNLWeightedDeltaProps, 'collection' | 'positionId'>) =>
        vaultService
          .getPositionPNLWeightedDelta({
            Vault,
            ...props,
          })
          .then((data) => getWeiToValueBN(data, ['unrealizePNL', 'weightedDelta'], 18))
      )
    },
    [Vault, vaultService]
  )

  return {
    sourceData,
    setSourceData,

    hooks: {
      useGetPositionPNLWeightedDelta,
    },

    filter: {
      collectionAddress,
      setCollectionAddress,
    },
  }
}

export default createContextWithProvider(() => {
  const {
    collections,
    collectionsStats: { floorPrice24Change },
    displayCollections,
  } = useNFTCollections()
  const collection = useNFTCollection()

  const {
    vault: { executionFee },
  } = useVault()

  const positions = usePositions()

  return {
    displayCollections,
    floorPrice24Change,
    collections,
    collection,
    positions,
    executionFee,
    usePageEffect,
  }
})
