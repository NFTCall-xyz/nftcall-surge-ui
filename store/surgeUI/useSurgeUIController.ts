import { useCallback } from 'react'

import { useGetAnalyticsController } from './getAnalytics'
import { useGetNFTCollectionController } from './getNFTCollection'
import { useGetNFTCollectionsController } from './getNFTCollections'
import { useGetNFTCollectionsStausController } from './getNFTCollectionsStaus'
import { useGetVaultController } from './getVault'

export const useSurgeUIController = () => {
  const getNFTCollectionsController = useGetNFTCollectionsController()
  const getNFTCollectionsStausController = useGetNFTCollectionsStausController()
  const getNFTCollectionController = useGetNFTCollectionController()
  const getVaultController = useGetVaultController()
  const getAnalyticsController = useGetAnalyticsController()
  const updateData = useCallback(() => {}, [])
  return {
    getNFTCollections: getNFTCollectionsController,
    getNFTCollectionsStaus: getNFTCollectionsStausController,
    getNFTCollection: getNFTCollectionController,
    getVault: getVaultController,
    getAnalytics: getAnalyticsController,
    updateData,
  }
}
