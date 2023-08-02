import type { RequestByPositionIdType, RequestType } from 'lib/graphql/option-position'
import { graphqlRequest, graphqlRequestByPositionId } from 'lib/graphql/option-position'
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

type PositionIdProps = BaseGraphqlRequestType & RequestByPositionIdType
export const requestPositionId = ({ thegraphUrl, ...variables }: PositionIdProps) => {
  if (!thegraphUrl) return Promise.reject({ message: 'network error' })
  return graphqlRequestByPositionId(thegraphUrl, variables)
    .then(({ optionPositions }) => optionPositions)
    .then((data) => getPositions(data)[0])
}
