import { getString } from 'app/utils/get'

import type { VaultStructOutput } from 'lib/protocol/typechain/nftcall-surge/typechain/contracts/SurgeUI'

export type GetVaultBaseData = {
  lpToken: {
    balance: string
    lockedBalance: string
    maxWithdraw: string
    releaseTime: string
  }

  totalSupply: string
  totalAssets: string
  totalLockedAssets: string
  unrealizedPNL: string
  unrealizedPremium: string
}

export const getGetVaultBaseData = (value: VaultStructOutput): GetVaultBaseData => {
  return {
    lpToken: getString(value.lpToken, ['balance', 'lockedBalance', 'maxWithdraw', 'releaseTime']),
    ...getString(value, ['totalSupply', 'totalAssets', 'totalLockedAssets', 'unrealizedPNL', 'unrealizedPremium']),
  }
}
