import { useWallet } from 'domains'
import { useCallback, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { createContextWithProvider } from 'app/utils/createContext'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNFTCollections, useNetwork, useVault } from 'domains/data'

import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { OpenPositionProps } from 'lib/protocol/typechain/nftcall-surge'

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
  const [NFTCollectionAddress, setNFTCollectionAddress] = useImmer(collections[0].address.NFT)
  const collection = useMemo(
    () => collections.find((i) => i.address.NFT === NFTCollectionAddress),
    [NFTCollectionAddress, collections]
  )

  const sendTransaction = useSendTransaction()
  const { account } = useWallet()

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
          collectionAddress: collection.address.NFT,
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
      collection.address.NFT,
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
          collectionAddress: collection.address.NFT,
          approveService: erc20Service,
          ...props,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      }).finally(() => {
        updateNFTCollections()
      }),
    [
      account,
      collection.address.NFT,
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
  }
}

export default createContextWithProvider(() => {
  const { collections } = useNFTCollections()
  const collection = useNFTCollection()

  return {
    collections,
    collection,
    usePageEffect,
  }
})
