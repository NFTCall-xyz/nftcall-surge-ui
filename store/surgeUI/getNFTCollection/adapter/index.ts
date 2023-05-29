import type { GetNFTCollectionProps, SurgeUIService } from 'lib/protocol/typechain/nftcall-surge'

import { getGetNFTCollectionBaseData } from './getGetNFTCollectionBaseData'

export type GetStoreNFTCollectionProps = {
  surgeUIService: SurgeUIService
} & GetNFTCollectionProps

export const getNFTCollectionRequest = ({ surgeUIService, ...props }: GetStoreNFTCollectionProps) => {
  return surgeUIService
    .getNFTCollection(props)
    .then((value) => getGetNFTCollectionBaseData(props.collectionAddress, value))
}

export type GetNFTCollectionSliceState = Awaited<ReturnType<typeof getNFTCollectionRequest>>
