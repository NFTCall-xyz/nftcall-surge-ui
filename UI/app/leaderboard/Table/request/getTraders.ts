import { getAddresses, getWeiToValueBN } from 'app/utils/get'

import type { GraphqlTraderBaseData, ResponseType } from 'lib/graphql/trader'
import { toBN } from 'lib/math'

export type Trader = {
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

const getTrader = (rank: number, t: GraphqlTraderBaseData) => {
  const returnValue: Trader = {
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

export const getTraders = ({ traders }: ResponseType) => {
  if (!traders) return []
  const returnValue = traders.map((t, index) => getTrader(index + 1, t))

  return returnValue
}
