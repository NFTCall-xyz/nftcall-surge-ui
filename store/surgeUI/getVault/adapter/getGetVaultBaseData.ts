import { getString } from 'app/utils/get'

import type { VaultStructOutput } from 'lib/protocol/typechain/nftcall-surge/typechain/contracts/SurgeUI'

export type GetVaultBaseData = {
  lpToken: {
    balance: string
    allowance: string
    wETHBalance: string
    wETHAllowance: string
    lockedBalance: string
    maxWithdraw: string
    releaseTime: string
  }

  wETHAllowance: string
  totalSupply: string
  totalAssets: string
  totalLockedAssets: string
  executionFee: string
  unrealizedPNL: string
  unrealizedPremium: string
}

export const getGetVaultBaseData = (value: VaultStructOutput): GetVaultBaseData => {
  return {
    lpToken: getString(value.lpToken, [
      'balance',
      'allowance',
      'lockedBalance',
      'maxWithdraw',
      'releaseTime',
      'wETHBalance',
      'wETHAllowance',
    ]),
    ...getString(value, [
      'totalSupply',
      'totalAssets',
      'totalLockedAssets',
      'unrealizedPNL',
      'unrealizedPremium',
      'wETHAllowance',
      'executionFee',
    ]),
  }
}
