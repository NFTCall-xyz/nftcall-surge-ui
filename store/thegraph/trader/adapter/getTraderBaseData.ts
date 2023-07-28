import type { GraphqlTraderBaseData, ResponseType } from 'lib/graphql/trader'

export type TraderBaseData = GraphqlTraderBaseData

export const getTraderBaseData = ({ traders }: ResponseType): TraderBaseData => {
  return traders[0]
}
