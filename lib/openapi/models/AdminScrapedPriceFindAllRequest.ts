/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { AdminScrapedPriceFindAllRequestFilter } from './AdminScrapedPriceFindAllRequestFilter'
import type { AdminScrapedPriceFindAllRequestOrder } from './AdminScrapedPriceFindAllRequestOrder'
import type { PaginationQueryDto } from './PaginationQueryDto'

export type AdminScrapedPriceFindAllRequest = {
  /**
   * 抓取价格表(ScrapedPrice)筛选数据
   */
  filter?: AdminScrapedPriceFindAllRequestFilter
  /**
   * 排序数据
   */
  orders?: Array<AdminScrapedPriceFindAllRequestOrder>
  /**
   * 分页数据
   */
  pagination: PaginationQueryDto
}
