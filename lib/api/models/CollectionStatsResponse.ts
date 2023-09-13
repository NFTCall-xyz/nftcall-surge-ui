/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CollectionName } from './CollectionName'

export type CollectionStatsResponse = {
  /**
   * NFT Symbol
   */
  collectionName: CollectionName
  /**
   * 地板价
   */
  floorPrice: number
  /**
   * 波动率
   */
  volatility: number
  /**
   * 24h变化
   */
  changed24h: number
}
