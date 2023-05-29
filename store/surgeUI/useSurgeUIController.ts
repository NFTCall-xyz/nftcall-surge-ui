import { useCallback } from 'react'

import { useGetNFTCollectionController } from './getNFTCollection'
import { useGetNFTCollectionsController } from './getNFTCollections'
import { useGetVaultController } from './getVault'

export const useSurgeUIController = () => {
  const getNFTCollectionsController = useGetNFTCollectionsController()
  const getNFTCollectionController = useGetNFTCollectionController()
  const getVaultController = useGetVaultController()
  const updateData = useCallback(() => {}, [])
  return {
    getNFTCollections: getNFTCollectionsController,
    getNFTCollection: getNFTCollectionController,
    getVault: getVaultController,
    updateData,
  }
}
