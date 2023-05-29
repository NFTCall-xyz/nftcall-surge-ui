import { createStoreRequest } from 'store/helpers/request'

import type { GetNFTCollectionsSliceState } from './adapter'
import { getNFTCollectionsRequest } from './adapter'

const key = 'surgeUI.getNFTCollections'
const { reducer, select, useRequestController } =
  createStoreRequest<GetNFTCollectionsSliceState>(key)(getNFTCollectionsRequest)
export default reducer
export const getNFTCollectionsReducer = reducer
export const getNFTCollectionsSelect = select
export const useGetNFTCollectionsController = useRequestController
