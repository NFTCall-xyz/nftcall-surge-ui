import { getWeiToValueBN } from 'app/utils/get'

import type { GetNFTCollectionStausBaseData, GetNFTCollectionsStausBaseData } from './getGetNFTCollectionsStausBaseData'

export type GetNFTCollectionStatusData = {
  collectionAddress: string
  price: BN
  vol: BN
  delta: BN
  unrealizedPNL: BN
  openInterest: BN
  optionTokenTotalValue: BN
  optionTokenTotalLockedValue: BN
  collectionWeight: BN
  callOptionAmount: BN
  putOptionAmount: BN
}
export type GetNFTCollectionsStausData = GetNFTCollectionStatusData[]

const getGetNFTCollectionData = (data: GetNFTCollectionStausBaseData) => {
  return {
    ...data,
    ...getWeiToValueBN(
      data,
      [
        'price',
        'vol',
        'delta',
        'unrealizedPNL',
        'openInterest',
        'optionTokenTotalValue',
        'optionTokenTotalLockedValue',
        'callOptionAmount',
        'putOptionAmount',
      ],
      18
    ),
    ...getWeiToValueBN(data, ['collectionWeight'], 6),
  }
}

export const getGetNFTCollectionsStausData = (
  getNFTCollectionsBaseData: GetNFTCollectionsStausBaseData
): GetNFTCollectionsStausData => {
  if (!getNFTCollectionsBaseData) return []
  return getNFTCollectionsBaseData.map((value) => getGetNFTCollectionData(value))
}
