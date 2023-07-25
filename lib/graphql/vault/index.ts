import { request as RQ } from 'graphql-request'

import document from './index.graphql'

export type GraphqlVaultBaseData = {
  totalTradingVolume: string
  totalPremiumCollected: string
  totalTrades: number
}

export type ResponseType = { vaults: GraphqlVaultBaseData[] }

export type RequestType = {
  id?: string
}

export const graphqlRequest = (url: string, variables: RequestType) => {
  variables.id = variables.id || '1'
  return RQ<ResponseType>(url, document, variables)
}
