import type { NFTCollectionStructOutput } from 'lib/protocol/typechain/nftcall-surge/typechain/contracts/SurgeUI'

import type { GetNFTCollectionBaseData } from 'store/surgeUI/getNFTCollection/adapter/getGetNFTCollectionBaseData'
import { getGetNFTCollectionBaseData } from 'store/surgeUI/getNFTCollection/adapter/getGetNFTCollectionBaseData'

export type GetNFTCollectionsBaseData = GetNFTCollectionBaseData[]

export const getGetNFTCollectionsBaseData = (
  collectionAddresses: string[],
  values: NFTCollectionStructOutput[]
): GetNFTCollectionsBaseData => {
  return values.map((value, i) => getGetNFTCollectionBaseData(collectionAddresses[i], value))
}
