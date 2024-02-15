/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { AdminBlockchainPriceDto } from '../models/AdminBlockchainPriceDto'
import type { AdminBlockchainPriceFindAllRequest } from '../models/AdminBlockchainPriceFindAllRequest'
import type { AdminBlockchainPriceFindAllResponse } from '../models/AdminBlockchainPriceFindAllResponse'
import type { CreateBlockchainPriceDto } from '../models/CreateBlockchainPriceDto'
import type { UpdateAdminBlockchainPriceDto } from '../models/UpdateAdminBlockchainPriceDto'

export class BlockchainPriceService {
  /**
   * 创建一个新的 链上价格表(BlockchainPrice)
   * @param requestBody
   * @param xToken token for authentication
   * @returns AdminBlockchainPriceDto 链上价格表(BlockchainPrice) 已创建
   * @throws ApiError
   */
  public static create(
    requestBody: CreateBlockchainPriceDto,
    xToken?: string
  ): CancelablePromise<AdminBlockchainPriceDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/tasks/blockchain-price',
      headers: {
        'X-Token': xToken,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * 获取 链上价格表(BlockchainPrice) 列表
   * @param requestBody
   * @returns AdminBlockchainPriceFindAllResponse 带分页的 链上价格表(BlockchainPrice) 列表
   * @throws ApiError
   */
  public static findAll(
    requestBody: AdminBlockchainPriceFindAllRequest
  ): CancelablePromise<AdminBlockchainPriceFindAllResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/tasks/blockchain-price/findAll',
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * 更新一个 链上价格表(BlockchainPrice)
   * @param id 链上价格表(BlockchainPrice) ID
   * @param requestBody
   * @param xToken token for authentication
   * @returns AdminBlockchainPriceDto 链上价格表(BlockchainPrice) 已更新
   * @throws ApiError
   */
  public static update(
    id: number,
    requestBody: UpdateAdminBlockchainPriceDto,
    xToken?: string
  ): CancelablePromise<AdminBlockchainPriceDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/tasks/blockchain-price/{id}',
      path: {
        id: id,
      },
      headers: {
        'X-Token': xToken,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * 删除一个 链上价格表(BlockchainPrice)
   * @param id 链上价格表(BlockchainPrice) ID
   * @param isSoftDelete 是否软删除
   * @param xToken token for authentication
   * @returns any 链上价格表(BlockchainPrice) 已删除
   * @throws ApiError
   */
  public static remove(id: number, isSoftDelete?: boolean, xToken?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/tasks/blockchain-price/{id}',
      path: {
        id: id,
      },
      headers: {
        'X-Token': xToken,
      },
      query: {
        isSoftDelete: isSoftDelete,
      },
    })
  }
}
