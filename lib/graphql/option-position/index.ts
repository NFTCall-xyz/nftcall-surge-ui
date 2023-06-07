import { request as RQ } from 'graphql-request'

import type { OptionType } from 'lib/protocol/typechain/nftcall-surge'

import activeDocument from './active/index.graphql'
import activeDocumentNoNFTAddress from './active/noNFTAddress.graphql'
import historyDocument from './history/index.graphql'
import historyDocumentNoNFTAddress from './history/noNFTAddress.graphql'

export enum OptionPositionStatus {
  Pending = 'Pending',
  Active = 'Active',
  Closed = 'Closed',
  Failed = 'Failed',
  Expired = 'Expired',
}
export type OptionPositionBaseData = {
  status: OptionPositionStatus
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
  premium: string
  updateTimestamp: number
}
export type ResponseType = { optionPositions: OptionPositionBaseData[] }

export type RequestType = {
  first: number
  skip: number
  nftAddress?: string
  userAddress: string
  currentTimestamp: number
}

export const graphqlRequest = (url: string, isActive: boolean, variables: RequestType) => {
  if (isActive) {
    if (variables.nftAddress) {
      return RQ<ResponseType>(url, activeDocument, variables)
    } else {
      return RQ<ResponseType>(url, activeDocumentNoNFTAddress, variables)
    }
  } else {
    if (variables.nftAddress) {
      return RQ<ResponseType>(url, historyDocument, variables)
    } else {
      return RQ<ResponseType>(url, historyDocumentNoNFTAddress, variables)
    }
  }
}
