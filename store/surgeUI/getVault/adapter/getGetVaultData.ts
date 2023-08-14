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
  reserveRatio: BN
  feeRatio: BN
  profitFeeRatio: BN
  timeWindowForActivation: BN
  maximumLockRatio: BN
  maximumCallStrikePriceRatio: BN
  maximumPutStrikePriceRatio: BN
  minimumCallStrikePriceRatio: BN
  minimumPutStrikePriceRatio: BN
  maximumDuration: number
  minimumDuration: number
  timeScale: number
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
    ...getWeiToValueBN(
      getVaultBaseData,
      [
        'reserveRatio',
        'feeRatio',
        'profitFeeRatio',
        'timeWindowForActivation',
        'maximumLockRatio',
        'maximumCallStrikePriceRatio',
        'maximumPutStrikePriceRatio',
        'minimumCallStrikePriceRatio',
        'minimumPutStrikePriceRatio',
      ],
      6
    ),
    ...getNumber(getVaultBaseData, ['maximumDuration', 'minimumDuration', 'timeScale']),
  }
}
