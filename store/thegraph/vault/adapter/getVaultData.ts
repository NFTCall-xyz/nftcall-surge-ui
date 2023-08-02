import { getWeiToValueBN } from 'app/utils/get'

import type { VaultBaseData } from './getVaultBaseData'

export type VaultData = {
  totalTradingVolume: BN
  totalPremiumCollected: BN
  totalTrades: number
  totalTraders: number
}

export const getVaultData = (vaultBaseData: VaultBaseData): VaultData => {
  if (!vaultBaseData) return {} as undefined
  return {
    ...vaultBaseData,
    ...getWeiToValueBN(vaultBaseData, ['totalPremiumCollected'], 18),
    ...getWeiToValueBN(vaultBaseData, ['totalTradingVolume'], 18 * 2),
  }
}
