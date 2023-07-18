import { request as RQ } from 'graphql-request'

import document from './active/index.graphql'

export type GraphqlTraderBaseData = {
  totalTradingVolume: string
  totalPremiumCollected: string
  totalTrades: number
}

export type ResponseType = { traders: GraphqlTraderBaseData[]; user: GraphqlTraderBaseData[] }

export type RequestType = {
  id?: string
}

export const graphqlRequest = (url: string, variables: RequestType) => {
  variables.id = variables.id || '1'
  return RQ<ResponseType>(url, document, variables)
}
