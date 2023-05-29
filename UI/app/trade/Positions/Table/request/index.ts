import { getCurrentTimestamp } from 'app/constant'

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
  if (isActive) {
    variables.currentTimestamp = getCurrentTimestamp()
  }
  return graphqlRequest(thegraphUrl, variables)
    .then(({ optionPositions }) => optionPositions)
    .then((data) => getPositions(data))
}
