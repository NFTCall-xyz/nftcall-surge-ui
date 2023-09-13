/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { DataSourceName } from './DataSourceName'

export type FloorPriceResponse = {
  /**
   * 地板价
   */
  apiFloorPrice: number
  /**
   * 波动率
   */
  apiVolatility: number
  /**
   * 数据源
   */
  dataSource: DataSourceName
  /**
   * 数据源抓取的地板价
   */
  floorPrice: number
  /**
   * 日交易量
   */
  volumeOneDay: number
  /**
   * 日交易量比重
   */
  volumeOneDayWeight: number
  /**
   * 数据获取时间
   */
  time: string
}
