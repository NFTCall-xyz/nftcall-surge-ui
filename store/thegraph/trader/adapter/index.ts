import type { RequestType } from 'lib/graphql/trader'
import { graphqlRequest } from 'lib/graphql/trader'
import type { BaseGraphqlRequestType } from 'lib/graphql/type'

import { getTraderBaseData } from './getTraderBaseData'

export type TraderProps = BaseGraphqlRequestType & RequestType

export const traderRequest = ({ thegraphUrl, ...props }: TraderProps) => {
  if (!thegraphUrl) return Promise.reject({ message: 'network error' })
  const variables: RequestType = props
  return graphqlRequest(thegraphUrl, variables).then(getTraderBaseData)
}

export type TraderSliceState = Awaited<ReturnType<typeof traderRequest>>
