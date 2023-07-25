import { createStoreRequest } from 'store/helpers/request'

import type { VaultSliceState } from './adapter'
import { vaultRequest } from './adapter'

const key = 'thegraph.vault'
const { reducer, select, useRequestController } = createStoreRequest<VaultSliceState>(key)(vaultRequest)
export default reducer
export const vaultReducer = reducer
export const vaultSelect = select
export const useVaultController = useRequestController
