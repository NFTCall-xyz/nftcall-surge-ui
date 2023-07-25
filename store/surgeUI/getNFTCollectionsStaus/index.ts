import { createStoreRequest } from 'store/helpers/request'

import type { GetNFTCollectionsStausSliceState } from './adapter'
import { getNFTCollectionsRequest } from './adapter'

const key = 'surgeUI.getNFTCollectionsStaus'
const { reducer, select, useRequestController } =
  createStoreRequest<GetNFTCollectionsStausSliceState>(key)(getNFTCollectionsRequest)
export default reducer
export const getNFTCollectionsStausReducer = reducer
export const getNFTCollectionsStausSelect = select
export const useGetNFTCollectionsStausController = useRequestController
