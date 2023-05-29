import { request as RQ } from 'graphql-request'

import type { OptionType } from 'lib/protocol/typechain/nftcall-surge'

import document from './index.graphql'

export type OptionPositionBaseData = {
  userAddress: string
  nftAddress: string
  positionId: number
  optionType: OptionType
  strikeId: {
    enabled: boolean
    expiration: number
    spotPrice: string
    strikePrice: string
  }
  amount: string
  updateTimestamp: number
}
export type ResponseType = { optionPositions: OptionPositionBaseData[] }

export type RequestType = {
  first: number
  skip: number
  nftAddress: string
  userAddress: string
  currentTimestamp: number
}

export const graphqlRequest = (url: string, variables: RequestType) => RQ<ResponseType>(url, document, variables)
