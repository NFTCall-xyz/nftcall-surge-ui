import { getString } from 'app/utils/get'

import type { NFTCollectionStructOutput } from 'lib/protocol/typechain/nftcall-surge/typechain/contracts/SurgeUI'

export type GetNFTCollectionBaseData = {
  collectionAddress: string
  price: string
  vol: string
  maximumOptionAmount: string
}

export const getGetNFTCollectionBaseData = (
  collectionAddress: string,
  value: NFTCollectionStructOutput
): GetNFTCollectionBaseData => {
  return {
    collectionAddress,
    ...getString(value, ['price', 'vol', 'maximumOptionAmount']),
  }
}
