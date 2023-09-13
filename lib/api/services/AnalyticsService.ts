/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { AnalyticsResponseDto } from '../models/AnalyticsResponseDto'

export class AnalyticsService {
  /**
   * 获取 TVL 列表
   * @param chainId 链的ID
   * @param startTime 开始时间
   * @param endTime 结束时间
   * @param interval 间隔单位
   * @returns AnalyticsResponseDto 成功
   * @throws ApiError
   */
  public static analyticsControllerGetTvlList(
    chainId: number = 421613,
    startTime: number = 1693989405400,
    endTime: number = 1694594205401,
    interval: number = 3600000
  ): CancelablePromise<Array<AnalyticsResponseDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/analytics/tvl',
      query: {
        chainId: chainId,
        startTime: startTime,
        endTime: endTime,
        interval: interval,
      },
    })
  }

  /**
   * 获取 ncETHPrice 列表
   * @param chainId 链的ID
   * @param startTime 开始时间
   * @param endTime 结束时间
   * @param interval 间隔单位
   * @returns any 成功
   * @throws ApiError
   */
  public static analyticsControllerGetNcEthPriceList(
    chainId: number = 421613,
    startTime: number = 1693989405400,
    endTime: number = 1694594205401,
    interval: number = 3600000
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/analytics/ncethprice',
      query: {
        chainId: chainId,
        startTime: startTime,
        endTime: endTime,
        interval: interval,
      },
    })
  }
}
