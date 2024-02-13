/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { AdminBlockchainPriceFindAllRequest } from '../models/AdminBlockchainPriceFindAllRequest'
import type { AdminBlockchainPriceFindAllResponse } from '../models/AdminBlockchainPriceFindAllResponse'

export class BlockchainPriceService {
  /**
   * 获取 链上价格表(BlockchainPrice) 列表
   * @param requestBody
   * @param xToken token for authentication
   * @returns AdminBlockchainPriceFindAllResponse 带分页的 链上价格表(BlockchainPrice) 列表
   * @throws ApiError
   */
  public static findAll(
    requestBody: AdminBlockchainPriceFindAllRequest,
    xToken?: string
  ): CancelablePromise<AdminBlockchainPriceFindAllResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/tasks/blockchain-price/findAll',
      headers: {
        'X-Token': xToken,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
