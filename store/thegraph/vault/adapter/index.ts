import type { BaseGraphqlRequestType } from 'lib/graphql/type'
import { type RequestType, graphqlRequest } from 'lib/graphql/vault'

import { getVaultBaseData } from './getVaultBaseData'

export type VaultProps = BaseGraphqlRequestType & RequestType

export const vaultRequest = ({ thegraphUrl, ...props }: VaultProps) => {
  if (!thegraphUrl) return Promise.reject({ message: 'network error' })
  const variables: RequestType = props
  return graphqlRequest(thegraphUrl, variables).then(getVaultBaseData)
}

export type VaultSliceState = Awaited<ReturnType<typeof vaultRequest>>
