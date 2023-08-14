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
    maxRedeem: string
    releaseTime: string
  }

  wETHAllowance: string
  totalSupply: string
  totalAssets: string
  totalLockedAssets: string
  executionFee: string
  reserveRatio: string
  feeRatio: string
  profitFeeRatio: string
  timeWindowForActivation: string
  maximumLockRatio: string
  maximumCallStrikePriceRatio: string
  maximumPutStrikePriceRatio: string
  minimumCallStrikePriceRatio: string
  minimumPutStrikePriceRatio: string
  maximumDuration: string
  minimumDuration: string
  timeScale: string
  unrealizedPNL: string
  unrealizedPremium: string
}

export const getGetVaultBaseData = (value: VaultStructOutput): GetVaultBaseData => {
  return {
    lpToken: getString(value.lpToken, [
      'balance',
      'allowance',
      'lockedBalance',
      'maxRedeem',
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
      'reserveRatio',
      'feeRatio',
      'profitFeeRatio',
      'timeWindowForActivation',
      'maximumLockRatio',
      'maximumCallStrikePriceRatio',
      'maximumPutStrikePriceRatio',
      'minimumCallStrikePriceRatio',
      'minimumPutStrikePriceRatio',
      'maximumDuration',
      'minimumDuration',
      'timeScale',
    ]),
  }
}
