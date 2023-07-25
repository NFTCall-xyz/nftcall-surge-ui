import { createContextWithProvider } from 'app/utils/createContext'

import { toBN } from 'lib/math'

import type { GetVaultData } from 'store/surgeUI/getVault/adapter/getGetVaultData'

import type { Market } from '../network/adapter/markets'
import { useAnalyticsData } from './application/analytics'
import { useTraderData } from './application/trader'
import { useVaultData } from './application/vault'

const NOMINAL_FEE_RATE = toBN(0.005) // 0.5% of the nominal amount
const PROFIT_FEE_RATE = toBN(0.125) // 12.5% of the option value

export type Vault = Market & {
  vault: GetVaultData
}

const useVaultService = () => {
  const { vault, updateVaults } = useVaultData()
  const { analytics, updateAnalytics } = useAnalyticsData()
  const { trader, updateTrader } = useTraderData()

  return {
    vault,
    updateVaults,
    analytics,
    updateAnalytics,
    trader,
    updateTrader,
    constants: { NOMINAL_FEE_RATE, PROFIT_FEE_RATE },
  }
}
const { Provider: VaultProvider, createUseContext } = createContextWithProvider(useVaultService)
export const createVaultContext = createUseContext

export default VaultProvider
