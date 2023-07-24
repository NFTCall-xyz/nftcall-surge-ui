import { getNumber, getWeiToValueBN } from 'app/utils/get'

import type { GetVaultBaseData } from './getGetVaultBaseData'

export type GetVaultData = {
  lpToken: {
    balance: BN
    allowance: BN
    wETHBalance: BN
    wETHAllowance: BN
    lockedBalance: BN
    maxWithdraw: BN
    maxRedeem: BN
    releaseTime: number
  }

  wETHAllowance: BN
  totalSupply: BN
  totalAssets: BN
  totalLockedAssets: BN
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
        ['balance', 'allowance', 'lockedBalance', 'maxWithdraw', 'maxRedeem', 'wETHBalance', 'wETHAllowance'],
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
  }
}
