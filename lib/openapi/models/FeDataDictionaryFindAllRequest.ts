/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { FeDataDictionaryFindAllRequestFilter } from './FeDataDictionaryFindAllRequestFilter'
import type { FeDataDictionaryFindAllRequestOrder } from './FeDataDictionaryFindAllRequestOrder'
import type { PaginationQueryDto } from './PaginationQueryDto'

export type FeDataDictionaryFindAllRequest = {
  /**
   * 数据字典(DataDictionary)筛选数据
   */
  filter?: FeDataDictionaryFindAllRequestFilter
  /**
   * 排序数据
   */
  orders?: Array<FeDataDictionaryFindAllRequestOrder>
  /**
   * 分页数据
   */
  pagination: PaginationQueryDto
}
