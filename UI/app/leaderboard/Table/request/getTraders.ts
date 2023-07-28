import type { ResponseType } from 'lib/graphql/trader'

import { getTrader } from 'store/thegraph/trader/adapter/getTraderData'

export const getTraders = ({ traders }: ResponseType) => {
  if (!traders) return []
  const returnValue = traders.map((t, index) => getTrader(index + 1, t))

  return returnValue
}
