/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { AdminContractTransactionFindAllRequest } from '../models/AdminContractTransactionFindAllRequest'
import type { AdminContractTransactionFindAllResponse } from '../models/AdminContractTransactionFindAllResponse'

export class ContractTransactionService {
  /**
   * 获取 合约交易表(ContractTransaction) 列表
   * @param requestBody
   * @param xToken token for authentication
   * @returns AdminContractTransactionFindAllResponse 带分页的 合约交易表(ContractTransaction) 列表
   * @throws ApiError
   */
  public static findAll(
    requestBody: AdminContractTransactionFindAllRequest,
    xToken?: string
  ): CancelablePromise<AdminContractTransactionFindAllResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/tasks/oracle-contract/findAll',
      headers: {
        'X-Token': xToken,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
