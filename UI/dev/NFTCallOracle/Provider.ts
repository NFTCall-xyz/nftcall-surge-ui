import { useMemo } from 'react'
import { useImmer } from 'use-immer'

import { useDialog } from 'app/hooks/useDialog'
import { createContextWithProvider } from 'app/utils/createContext'

import { useNFTCollections } from 'domains/data'

const usePageEffect = () => {
  return {}
}

export default createContextWithProvider(() => {
  const { collections, updateNFTCollections } = useNFTCollections()
  const [NFTCollectionAddress, setNFTCollectionAddress] = useImmer(collections[0].address.collection)
  const collection = useMemo(
    () => collections.find((i) => i.address.collection === NFTCollectionAddress),
    [NFTCollectionAddress, collections]
  )

  const setAssetPriceDialog = useDialog({
    onOpen: (NFTCollectionAddress) => setNFTCollectionAddress(NFTCollectionAddress),
  })

  return {
    usePageEffect,
    collections,
    collection,
    setNFTCollectionAddress,
    updateNFTCollections,

    setAssetPriceDialog,
  }
})
