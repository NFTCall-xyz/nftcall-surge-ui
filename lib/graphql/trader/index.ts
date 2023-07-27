import { request as RQ } from 'graphql-request'

import document from './index.graphql'
import userAddressDocument from './userAddress.graphql'

export type GraphqlTraderBaseData = {
  id: string
  totalTrades: number
  PNL: string
  totalVolume: string
  depositAmount: string
  totalRevenue: string
  totalPremium: string
  totalExercisedOptionPosition: number
}

export type ResponseType = { traders: GraphqlTraderBaseData[] }

export type RequestType = {
  userAddress?: string
}

export const graphqlRequest = (url: string, variables: RequestType) => {
  if (variables.userAddress) {
    variables.userAddress = variables.userAddress.toLowerCase()
    return RQ<ResponseType>(url, userAddressDocument, variables)
  } else {
    return RQ<ResponseType>(url, document, variables)
  }
}
