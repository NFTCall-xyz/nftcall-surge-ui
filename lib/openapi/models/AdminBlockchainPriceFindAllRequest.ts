/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { AdminBlockchainPriceFindAllRequestFilter } from './AdminBlockchainPriceFindAllRequestFilter'
import type { AdminBlockchainPriceFindAllRequestOrder } from './AdminBlockchainPriceFindAllRequestOrder'
import type { PaginationQueryDto } from './PaginationQueryDto'

export type AdminBlockchainPriceFindAllRequest = {
  /**
   * 链上价格表(BlockchainPrice)筛选数据
   */
  filter?: AdminBlockchainPriceFindAllRequestFilter
  /**
   * 排序数据
   */
  orders?: Array<AdminBlockchainPriceFindAllRequestOrder>
  /**
   * 分页数据
   */
  pagination: PaginationQueryDto
}
