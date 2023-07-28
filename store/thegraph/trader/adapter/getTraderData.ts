import { getAddresses, getWeiToValueBN } from 'app/utils/get'

import { toBN } from 'lib/math'

import type { TraderBaseData } from './getTraderBaseData'

export type TraderData = {
  rank: number
  winrate: number
  id: string
  totalTrades: number
  totalVolume: BN
  depositAmount: BN
  totalRevenue: BN
  totalPremium: BN
  totalExercisedOptionPosition: number
  PNL: BN
  PNLRate: BN
}

export const getTrader = (rank: number, t: TraderBaseData) => {
  const returnValue: TraderData = {
    rank,
    ...t,
    ...getAddresses(t, ['id']),
    ...getWeiToValueBN(t, ['totalRevenue', 'totalPremium', 'depositAmount', 'PNL'], 18),
    ...getWeiToValueBN(t, ['totalVolume'], 18 * 2),
    winrate: t.totalTrades ? toBN(t.totalExercisedOptionPosition).div(t.totalTrades).toNumber() : 0,
    PNLRate: toBN(0),
  }

  returnValue.PNLRate = returnValue.PNL.dividedBy(returnValue.totalPremium)

  return returnValue
}

export const getTraderData = (traderBaseData: TraderBaseData) => {
  if (!traderBaseData) return {} as undefined
  return getTrader(0, traderBaseData)
}
