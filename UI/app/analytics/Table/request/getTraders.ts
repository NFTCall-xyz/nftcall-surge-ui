import { getAddresses, getWeiToValueBN } from 'app/utils/get'

import type { GraphqlTraderBaseData, ResponseType } from 'lib/graphql/trader'
import { toBN } from 'lib/math'

export type Trader = {
  rank: number
  winrate: number
  id: string
  totalTrades: number
  totalVolume: BN
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
    ...getWeiToValueBN(t, ['totalRevenue', 'totalPremium'], 18),
    ...getWeiToValueBN(t, ['totalVolume'], 18 * 2),
    winrate: t.totalTrades ? toBN(t.totalExercisedOptionPosition).div(t.totalTrades).toNumber() : 0,
    PNL: toBN(0),
    PNLRate: toBN(0),
  }

  returnValue.PNL = returnValue.totalRevenue.minus(returnValue.totalPremium)
  returnValue.PNLRate = returnValue.PNL.dividedBy(returnValue.totalPremium)

  return returnValue
}

export const getTraders = ({ traders, user }: ResponseType) => {
  if (!traders) return []
  const returnValue = traders.map((t, index) => getTrader(index + 1, t))

  if (user.length) {
    const findUser = returnValue.find((t) => t.id === user[0].id)
    if (!findUser) {
      returnValue.push(getTrader(0, user[0]))
    }
  }

  return returnValue
}
