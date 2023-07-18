import { request as RQ } from 'graphql-request'

import document from './index.graphql'

export type GraphqlTraderBaseData = {
  id: string
  totalTrades: number
  totalVolume: string
  totalRevenue: string
  totalPremium: string
  totalExercisedOptionPosition: number
}

export type ResponseType = { traders: GraphqlTraderBaseData[]; user: GraphqlTraderBaseData[] }

export type RequestType = {
  userAddress?: string
}

export const graphqlRequest = (url: string, variables: RequestType) => {
  variables.userAddress = variables.userAddress || ''
  return RQ<ResponseType>(url, document, variables)
}
