import { useMemo } from 'react'

import { useAppSelector } from 'store/helpers'

import { getAnalyticsSelect } from './getAnalytics'
import { getGetAnalyticsData } from './getAnalytics/adapter/getGetAnalyticsData'
import { getNFTCollectionSelect } from './getNFTCollection'
import { getGetNFTCollectionData } from './getNFTCollection/adapter/getGetNFTCollectionData'
import { getNFTCollectionsSelect } from './getNFTCollections'
import { getGetNFTCollectionsData } from './getNFTCollections/adapter/getGetNFTCollectionsData'
import { getNFTCollectionsStausSelect } from './getNFTCollectionsStaus'
import { getGetNFTCollectionsStausData } from './getNFTCollectionsStaus/adapter/getGetNFTCollectionsStausData'
import { getVaultSelect } from './getVault'
import { getGetVaultData } from './getVault/adapter/getGetVaultData'

export const useSurgeUIStateData = () => {
  const getNFTCollectionsBaseData = useAppSelector(getNFTCollectionsSelect.selectData)
  const getNFTCollectionsStausBaseData = useAppSelector(getNFTCollectionsStausSelect.selectData)
  const getNFTCollectionBaseData = useAppSelector(getNFTCollectionSelect.selectData)
  const getVaultBaseData = useAppSelector(getVaultSelect.selectData)
  const getAnalyticsBaseData = useAppSelector(getAnalyticsSelect.selectData)
  const returnValue = useMemo(() => {
    return {
      getNFTCollections: getGetNFTCollectionsData(getNFTCollectionsBaseData),
      getNFTCollectionsStaus: getGetNFTCollectionsStausData(getNFTCollectionsStausBaseData),
      getNFTCollection: getGetNFTCollectionData(getNFTCollectionBaseData),
      getVault: getGetVaultData(getVaultBaseData),
      getAnalytics: getGetAnalyticsData(getAnalyticsBaseData),
    }
  }, [
    getNFTCollectionsBaseData,
    getNFTCollectionsStausBaseData,
    getNFTCollectionBaseData,
    getVaultBaseData,
    getAnalyticsBaseData,
  ])
  return returnValue
}
