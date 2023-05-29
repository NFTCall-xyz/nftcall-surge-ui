import { useMemo } from 'react'

import { useAppSelector } from 'store/helpers'

import { getNFTCollectionSelect } from './getNFTCollection'
import { getGetNFTCollectionData } from './getNFTCollection/adapter/getGetNFTCollectionData'
import { getNFTCollectionsSelect } from './getNFTCollections'
import { getGetNFTCollectionsData } from './getNFTCollections/adapter/getGetNFTCollectionsData'
import { getVaultSelect } from './getVault'
import { getGetVaultData } from './getVault/adapter/getGetVaultData'

export const useSurgeUIStateData = () => {
  const getNFTCollectionsBaseData = useAppSelector(getNFTCollectionsSelect.selectData)
  const getNFTCollectionBaseData = useAppSelector(getNFTCollectionSelect.selectData)
  const getVaultBaseData = useAppSelector(getVaultSelect.selectData)
  const returnValue = useMemo(() => {
    return {
      getNFTCollections: getGetNFTCollectionsData(getNFTCollectionsBaseData),
      getNFTCollection: getGetNFTCollectionData(getNFTCollectionBaseData),
      getVault: getGetVaultData(getVaultBaseData),
    }
  }, [getNFTCollectionsBaseData, getNFTCollectionBaseData, getVaultBaseData])
  return returnValue
}
