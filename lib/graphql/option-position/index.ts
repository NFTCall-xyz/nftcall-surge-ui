import { request as RQ } from 'graphql-request'

import type { OptionType } from 'lib/protocol/typechain/nftcall-surge'

import activeDocument from './active/index.graphql'
import activeDocumentNoNFTAddress from './active/noNFTAddress.graphql'
import historyDocument from './history/index.graphql'
import historyDocumentNoNFTAddress from './history/noNFTAddress.graphql'
import positionIdDocument from './positionId.graphql'

export enum OptionPositionStateProtocol {
  EMPTY,
  PENDING,
  ACTIVE,
  CLOSED,
}
export enum OptionPositionStatus {
  Pending = 'Pending',
  Active = 'Active',
  Expired = 'Expired',
  Exercised = 'Exercised',
  Cancelled = 'Cancelled',
  Failed = 'Failed',
}

export const getOptionPositionStatusByProtocol = (data: OptionPositionStateProtocol) => {
  switch (data) {
    case OptionPositionStateProtocol.EMPTY:
    case OptionPositionStateProtocol.PENDING:
      return OptionPositionStatus.Pending
    case OptionPositionStateProtocol.ACTIVE:
      return OptionPositionStatus.Active
    case OptionPositionStateProtocol.CLOSED:
      return OptionPositionStatus.Failed
  }
}
export type OptionPositionBaseData = {
  status: OptionPositionStatus
  userAddress: string
  collectionAddress: string
  positionId: number
  optionType: OptionType
  expiration: number
  entryPrice: string
  strikePrice: string
  delta: string
  settlementPrice: string
  amount: string
  premium: string
  excessPremium: string
  returnedPremium: string
  keeperFee: string
  revenue: string
  exerciseFee: string
  updateTimestamp: number
}
export type ResponseType = { optionPositions: OptionPositionBaseData[] }

export type RequestType = {
  first: number
  skip: number
  collectionAddress?: string
  userAddress: string
}

export const graphqlRequest = (url: string, isActive: boolean, variables: RequestType) => {
  if (isActive) {
    if (variables.collectionAddress) {
      return RQ<ResponseType>(url, activeDocument, variables)
    } else {
      return RQ<ResponseType>(url, activeDocumentNoNFTAddress, variables)
    }
  } else {
    if (variables.collectionAddress) {
      return RQ<ResponseType>(url, historyDocument, variables)
    } else {
      return RQ<ResponseType>(url, historyDocumentNoNFTAddress, variables)
    }
  }
}

export type RequestByPositionIdType = {
  collectionAddress: string
  positionId: number
}
export const graphqlRequestByPositionId = (url: string, variables: RequestByPositionIdType) => {
  variables.collectionAddress = variables.collectionAddress.toLowerCase()
  return RQ<ResponseType>(url, positionIdDocument, variables)
}
