import { useWallet } from 'domains'
import { debounce } from 'lodash'
import { useCallback, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { createContextWithProvider } from 'app/utils/createContext'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNFTCollections, useNetwork } from 'domains/data'

import { weiToValue } from 'lib/math'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { OpenPositionProps, OptionType, Strike } from 'lib/protocol/typechain/nftcall-surge'

const usePageEffect = () => {}

type GetPremiumProps = {
  props: Strike & { optionType: OptionType }
  getPromise: (promise: Promise<BN>) => void
}
const useNFTCollection = () => {
  const { collections, updateNFTCollections } = useNFTCollections()
  const [NFTCollectionAddress, setNFTCollectionAddress] = useImmer(collections[0].address.NFT)
  const collection = useMemo(
    () => collections.find((i) => i.address.NFT === NFTCollectionAddress),
    [NFTCollectionAddress, collections]
  )

  const {
    address: { OptionPricer: pricerAddress, SurgeUI, Vault: vaultAddress },
    contracts: { surgeUIService, vaultService },
  } = useNetwork()

  const getPremium = useMemo(
    () =>
      debounce(({ props: { optionType, ...strike }, getPromise }: GetPremiumProps) => {
        return getPromise(
          surgeUIService
            .getPremium({
              collection: collection.address.NFT,
              optionType,
              strike,
              SurgeUI,
              pricerAddress,
            })
            .then((data) => weiToValue(data, 0))
        )
      }, 300),
    [SurgeUI, collection.address.NFT, pricerAddress, surgeUIService]
  )
  const sendTransaction = useSendTransaction()
  const { account } = useWallet()

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
    collection,
    getPremium,
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
