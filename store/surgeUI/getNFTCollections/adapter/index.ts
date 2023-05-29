import type { GetNFTCollectionsProps, SurgeUIService } from 'lib/protocol/typechain/nftcall-surge'

import { getGetNFTCollectionsBaseData } from './getGetNFTCollectionsBaseData'

export type GetStoreNFTCollectionsProps = {
  surgeUIService: SurgeUIService
} & GetNFTCollectionsProps

export const getNFTCollectionsRequest = ({ surgeUIService, ...props }: GetStoreNFTCollectionsProps) => {
  return surgeUIService
    .getNFTCollections(props)
    .then((values) => getGetNFTCollectionsBaseData(props.collectionAddresses, values))
}

export type GetNFTCollectionsSliceState = Awaited<ReturnType<typeof getNFTCollectionsRequest>>
