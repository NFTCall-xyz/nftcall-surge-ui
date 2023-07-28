import { createStoreRequest } from 'store/helpers/request'

import type { TraderSliceState } from './adapter'
import { traderRequest } from './adapter'

const key = 'thegraph.trader'
const { reducer, select, useRequestController } = createStoreRequest<TraderSliceState>(key)(traderRequest)
export default reducer
export const traderReducer = reducer
export const traderSelect = select
export const useTraderController = useRequestController
