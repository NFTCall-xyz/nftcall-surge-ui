import type { RequestType } from 'lib/graphql/trader'
import { graphqlRequest } from 'lib/graphql/trader'
import type { BaseGraphqlRequestType } from 'lib/graphql/type'

import { getTraders } from './getTraders'

export type Props = BaseGraphqlRequestType & RequestType
export const request = ({ thegraphUrl, ...props }: Props) => {
  if (!thegraphUrl) return Promise.reject({ message: 'network error' })
  const variables: RequestType = props
  return graphqlRequest(thegraphUrl, variables).then((data) => getTraders(data))
}
