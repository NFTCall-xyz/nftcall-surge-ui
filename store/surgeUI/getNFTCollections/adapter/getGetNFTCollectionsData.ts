import type { GetNFTCollectionData } from 'store/surgeUI/getNFTCollection/adapter/getGetNFTCollectionData'
import { getGetNFTCollectionData } from 'store/surgeUI/getNFTCollection/adapter/getGetNFTCollectionData'

import type { GetNFTCollectionsBaseData } from './getGetNFTCollectionsBaseData'

export type GetNFTCollectionsData = GetNFTCollectionData[]

export const getGetNFTCollectionsData = (
  getNFTCollectionsBaseData: GetNFTCollectionsBaseData
): GetNFTCollectionsData => {
  if (!getNFTCollectionsBaseData) return []
  return getNFTCollectionsBaseData.map((value) => getGetNFTCollectionData(value))
}
