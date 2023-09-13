/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { CollectionName } from '../models/CollectionName'
import type { CollectionStatsResponse } from '../models/CollectionStatsResponse'
import type { FloorPriceResponse } from '../models/FloorPriceResponse'
import type { OriginalPriceResponse } from '../models/OriginalPriceResponse'

export class CollectionService {
  /**
   * 获取 nft统计信息
   * @param collectionNames NFT Symbol
   * @returns CollectionStatsResponse 成功
   * @throws ApiError
   */
  public static collectionControllerGetStats(
    collectionNames: Array<CollectionName>
  ): CancelablePromise<Array<CollectionStatsResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/collection/stats',
      query: {
        collectionNames: collectionNames,
      },
    })
  }

  /**
   * 获取某个nft的最终价格列表
   * @param collectionName NFT Symbol
   * @param startTime 开始时间
   * @param endTime 结束时间
   * @param interval 间隔单位
   * @returns OriginalPriceResponse 成功
   * @throws ApiError
   */
  public static collectionControllerGetOriginalPrice(
    collectionName: CollectionName,
    startTime: number = 1693989405499,
    endTime: number = 1694594205500,
    interval: number = 3600000
  ): CancelablePromise<Array<OriginalPriceResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/collection/original-price',
      query: {
        collectionName: collectionName,
        startTime: startTime,
        endTime: endTime,
        interval: interval,
      },
    })
  }

  /**
   * 获取某个nft抓取的价格列表
   * @param collectionName NFT Symbol
   * @param dataSource 数据源
   * @param startTime 开始时间
   * @param endTime 结束时间
   * @param interval 间隔单位
   * @returns FloorPriceResponse 成功
   * @throws ApiError
   */
  public static collectionControllerGetFloorPrice(
    collectionName: CollectionName,
    dataSource?: 'openSea' | 'openBlur',
    startTime: number = 1693989405497,
    endTime: number = 1694594205497,
    interval: number = 3600000
  ): CancelablePromise<Array<FloorPriceResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/collection/floor-price',
      query: {
        collectionName: collectionName,
        dataSource: dataSource,
        startTime: startTime,
        endTime: endTime,
        interval: interval,
      },
    })
  }
}
