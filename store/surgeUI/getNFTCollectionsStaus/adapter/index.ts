import type { GetNFTCollectionsStausProps, SurgeUIService } from 'lib/protocol/typechain/nftcall-surge'

import { getGetNFTCollectionsStausBaseData } from './getGetNFTCollectionsStausBaseData'

export type GetStoreNFTCollectionsStausProps = {
  surgeUIService: SurgeUIService
} & GetNFTCollectionsStausProps

export const getNFTCollectionsRequest = ({ surgeUIService, ...props }: GetStoreNFTCollectionsStausProps) => {
  return surgeUIService
    .getNFTCollectionsStaus(props)
    .then((values) => getGetNFTCollectionsStausBaseData(props.collectionAddresses, values))
}

export type GetNFTCollectionsStausSliceState = Awaited<ReturnType<typeof getNFTCollectionsRequest>>
