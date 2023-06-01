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
    },
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
    address: { Vault: vaultAddress },
    contracts: { vaultService },
  } = useNetwork()
  const openOptions = useCallback(
    (props: Pick<OpenPositionProps, 'optionType' | 'strikePrice' | 'expiry' | 'amount'>) =>
      transaction({
        createTransaction: vaultService.openPosition({
          Vault: vaultAddress,
          userAddress: account,
          collectionAddress: collection.address.NFT,
          ...props,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      }).finally(() => {
        updateNFTCollections()
      }),
    [account, collection.address.NFT, sendTransaction, updateNFTCollections, vaultAddress, vaultService]
  )

  return {
    wETHBalance,
    collection,
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
