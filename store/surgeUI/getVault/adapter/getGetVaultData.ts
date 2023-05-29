import { getNumber, getWeiToValueBN } from 'app/utils/get'

import type { GetVaultBaseData } from './getGetVaultBaseData'

export type GetVaultData = {
  lpToken: {
    balance: BN
    lockedBalance: BN
    maxWithdraw: BN
    releaseTime: number
  }

  totalSupply: BN
  totalAssets: BN
  totalLockedAssets: BN
  unrealizedPNL: BN
  unrealizedPremium: BN
}

export const getGetVaultData = (getVaultBaseData: GetVaultBaseData): GetVaultData => {
  if (!getVaultBaseData) return { lpToken: {} } as undefined
  return {
    lpToken: {
      ...getWeiToValueBN(getVaultBaseData.lpToken, ['balance', 'lockedBalance', 'maxWithdraw'], 18),
      ...getNumber(getVaultBaseData.lpToken, ['releaseTime']),
    },
    ...getWeiToValueBN(
      getVaultBaseData,
      ['totalSupply', 'totalAssets', 'totalLockedAssets', 'unrealizedPNL', 'unrealizedPremium'],
      18
    ),
  }
}
