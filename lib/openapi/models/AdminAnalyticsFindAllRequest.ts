/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { AdminAnalyticsFindAllRequestFilter } from './AdminAnalyticsFindAllRequestFilter'
import type { AdminAnalyticsFindAllRequestOrder } from './AdminAnalyticsFindAllRequestOrder'
import type { PaginationQueryDto } from './PaginationQueryDto'

export type AdminAnalyticsFindAllRequest = {
  /**
   * 分析表(Analytics)筛选数据
   */
  filter?: AdminAnalyticsFindAllRequestFilter
  /**
   * 排序数据
   */
  orders?: Array<AdminAnalyticsFindAllRequestOrder>
  /**
   * 分页数据
   */
  pagination: PaginationQueryDto
}
