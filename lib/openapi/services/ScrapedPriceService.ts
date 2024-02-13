/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { AdminScrapedPriceFindAllRequest } from '../models/AdminScrapedPriceFindAllRequest'
import type { AdminScrapedPriceFindAllResponse } from '../models/AdminScrapedPriceFindAllResponse'

export class ScrapedPriceService {
  /**
   * 获取 抓取价格表(ScrapedPrice) 列表
   * @param requestBody
   * @param xToken token for authentication
   * @returns AdminScrapedPriceFindAllResponse 带分页的 抓取价格表(ScrapedPrice) 列表
   * @throws ApiError
   */
  public static findAll(
    requestBody: AdminScrapedPriceFindAllRequest,
    xToken?: string
  ): CancelablePromise<AdminScrapedPriceFindAllResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/tasks/scraped-price/findAll',
      headers: {
        'X-Token': xToken,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
