import type { RequestType } from 'lib/graphql/option-position'
import { graphqlRequest } from 'lib/graphql/option-position'
import type { BaseGraphqlRequestType } from 'lib/graphql/type'

import { getPositions } from './getPositions'

type Props = BaseGraphqlRequestType &
  RequestType &
  Partial<{
    isActive: boolean
  }>
export const request = ({ thegraphUrl, isActive, ...props }: Props) => {
  if (!thegraphUrl) return Promise.reject({ message: 'network error' })
  const variables: RequestType = props
  return graphqlRequest(thegraphUrl, isActive, variables)
    .then(({ optionPositions }) => optionPositions)
    .then((data) => getPositions(data))
}
