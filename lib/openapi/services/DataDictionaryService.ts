/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { FeDataDictionaryFindAllRequest } from '../models/FeDataDictionaryFindAllRequest'
import type { FeDataDictionaryFindAllResponse } from '../models/FeDataDictionaryFindAllResponse'

export class DataDictionaryService {
  /**
   * 获取 数据字典(DataDictionary) 列表
   * @param requestBody
   * @returns FeDataDictionaryFindAllResponse 带分页的 数据字典(DataDictionary) 列表
   * @throws ApiError
   */
  public static findAll(
    requestBody: FeDataDictionaryFindAllRequest
  ): CancelablePromise<FeDataDictionaryFindAllResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/data-dictionary/findAll',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
