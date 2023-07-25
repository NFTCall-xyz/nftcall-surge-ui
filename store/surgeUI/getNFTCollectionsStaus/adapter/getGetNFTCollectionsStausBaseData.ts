import { getString } from 'app/utils/get'

import type { NFTCollectionStausStructOutput } from 'lib/protocol/typechain/nftcall-surge/typechain/contracts/SurgeUI'

export type GetNFTCollectionStausBaseData = {
  collectionAddress: string
  price: string
  vol: string
  delta: string
  unrealizedPNL: string
  openInterest: string
  optionTokenTotalValue: string
  optionTokenTotalLockedValue: string
  collectionWeight: string
  callOptionAmount: string
  putOptionAmount: string
}
export type GetNFTCollectionsStausBaseData = GetNFTCollectionStausBaseData[]

const getGetNFTCollectionStausBaseData = (collectionAddress: string, data: NFTCollectionStausStructOutput) => {
  return {
    collectionAddress,
    ...getString(data, [
      'price',
      'vol',
      'delta',
      'unrealizedPNL',
      'openInterest',
      'optionTokenTotalValue',
      'optionTokenTotalLockedValue',
      'collectionWeight',
      'callOptionAmount',
      'putOptionAmount',
    ]),
  }
}

export const getGetNFTCollectionsStausBaseData = (
  collectionAddresses: string[],
  values: NFTCollectionStausStructOutput[]
): GetNFTCollectionsStausBaseData => {
  return values.map((value, i) => getGetNFTCollectionStausBaseData(collectionAddresses[i], value))
}
