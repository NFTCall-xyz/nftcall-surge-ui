import { createStoreRequest } from 'store/helpers/request'

import type { GetAnalyticsSliceState } from './adapter'
import { getAnalyticsRequest } from './adapter'

const key = 'surgeUI.getAnalytics'
const { reducer, select, useRequestController } = createStoreRequest<GetAnalyticsSliceState>(key)(getAnalyticsRequest)
export default reducer
export const getAnalyticsReducer = reducer
export const getAnalyticsSelect = select
export const useGetAnalyticsController = useRequestController
