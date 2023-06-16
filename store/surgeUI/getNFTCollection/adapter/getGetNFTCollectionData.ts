import { getAddresses, getWeiToValueBN } from 'app/utils/get'

import type { GetNFTCollectionBaseData } from './getGetNFTCollectionBaseData'

export type GetNFTCollectionData = {
  collectionAddress: string
  price: BN
  vol: BN
  maximumOptionAmount: BN
  openInterest: BN
}

export const getGetNFTCollectionData = (getNFTCollectionBaseData: GetNFTCollectionBaseData): GetNFTCollectionData => {
  if (!getNFTCollectionBaseData) return {} as undefined
  return {
    ...getAddresses(getNFTCollectionBaseData, ['collectionAddress']),
    ...getWeiToValueBN(getNFTCollectionBaseData, ['price', 'maximumOptionAmount', 'openInterest'], 18),
    ...getWeiToValueBN(getNFTCollectionBaseData, ['vol'], 18),
  }
}
