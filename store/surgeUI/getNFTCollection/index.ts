import { createStoreRequest } from 'store/helpers/request'

import type { GetNFTCollectionSliceState } from './adapter'
import { getNFTCollectionRequest } from './adapter'

const key = 'surgeUI.getNFTCollection'
const { reducer, select, useRequestController } =
  createStoreRequest<GetNFTCollectionSliceState>(key)(getNFTCollectionRequest)
export default reducer
export const getNFTCollectionReducer = reducer
export const getNFTCollectionSelect = select
export const useGetNFTCollectionController = useRequestController
