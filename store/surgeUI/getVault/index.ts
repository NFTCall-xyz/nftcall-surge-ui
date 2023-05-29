import { createStoreRequest } from 'store/helpers/request'

import type { GetVaultSliceState } from './adapter'
import { getVaultRequest } from './adapter'

const key = 'surgeUI.getVault'
const { reducer, select, useRequestController } = createStoreRequest<GetVaultSliceState>(key)(getVaultRequest)
export default reducer
export const getVaultReducer = reducer
export const getVaultSelect = select
export const useGetVaultController = useRequestController
