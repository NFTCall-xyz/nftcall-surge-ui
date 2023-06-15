import { getNumber, getWeiToValueBN } from 'app/utils/get'

import type { GetVaultBaseData } from './getGetVaultBaseData'

export type GetVaultData = {
  lpToken: {
    balance: BN
    wETHBalance: BN
    wETHAllowance: BN
    lockedBalance: BN
    maxWithdraw: BN
    releaseTime: number
  }

  wETHAllowance: BN
  totalSupply: BN
  totalAssets: BN
  totalLockedAssets: BN
  totalActiveOptions: BN
  executionFee: BN
  unrealizedPNL: BN
  unrealizedPremium: BN
}

export const getGetVaultData = (getVaultBaseData: GetVaultBaseData): GetVaultData => {
  if (!getVaultBaseData) return { lpToken: {} } as undefined
  return {
    lpToken: {
      ...getWeiToValueBN(
        getVaultBaseData.lpToken,
        ['balance', 'lockedBalance', 'maxWithdraw', 'wETHBalance', 'wETHAllowance'],
        18
      ),
      ...getNumber(getVaultBaseData.lpToken, ['releaseTime']),
    },
    ...getWeiToValueBN(
      getVaultBaseData,
      [
        'wETHAllowance',
        'totalSupply',
        'totalAssets',
        'totalLockedAssets',
        'unrealizedPNL',
        'unrealizedPremium',
        'executionFee',
      ],
      18
    ),
    ...getWeiToValueBN(getVaultBaseData, ['totalActiveOptions'], 0),
  }
}
