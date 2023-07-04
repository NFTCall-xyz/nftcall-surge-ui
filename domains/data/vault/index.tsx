import { createContextWithProvider } from 'app/utils/createContext'

import { toBN } from 'lib/math'

import type { GetVaultData } from 'store/surgeUI/getVault/adapter/getGetVaultData'

import type { Market } from '../network/adapter/markets'
import { useVaultData } from './application/vault'

const EXERCISE_FEE_RATE = toBN(0.005)

export type Vault = Market & {
  vault: GetVaultData
}

const useVaultService = () => {
  const { vault, updateVaults } = useVaultData()

  return { vault, updateVaults, constants: { EXERCISE_FEE_RATE } }
}
const { Provider: VaultProvider, createUseContext } = createContextWithProvider(useVaultService)
export const createVaultContext = createUseContext

export default VaultProvider
