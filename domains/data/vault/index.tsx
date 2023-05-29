import { createContextWithProvider } from 'app/utils/createContext'

import type { GetVaultData } from 'store/surgeUI/getVault/adapter/getGetVaultData'

import type { Market } from '../network/adapter/markets'
import { useVaultData } from './application/vault'

export type Vault = Market & {
  vault: GetVaultData
}

const useVaultService = () => {
  const { vault, updateVaults } = useVaultData()

  return { vault, updateVaults }
}
const { Provider: VaultProvider, createUseContext } = createContextWithProvider(useVaultService)
export const createVaultContext = createUseContext

export default VaultProvider
