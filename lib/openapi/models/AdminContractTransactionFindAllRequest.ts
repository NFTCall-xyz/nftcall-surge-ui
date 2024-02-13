/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { AdminContractTransactionFindAllRequestFilter } from './AdminContractTransactionFindAllRequestFilter'
import type { AdminContractTransactionFindAllRequestOrder } from './AdminContractTransactionFindAllRequestOrder'
import type { PaginationQueryDto } from './PaginationQueryDto'

export type AdminContractTransactionFindAllRequest = {
  /**
   * 合约交易表(ContractTransaction)筛选数据
   */
  filter?: AdminContractTransactionFindAllRequestFilter
  /**
   * 排序数据
   */
  orders?: Array<AdminContractTransactionFindAllRequestOrder>
  /**
   * 分页数据
   */
  pagination: PaginationQueryDto
}
