/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { AdminAnalyticsFindAllRequest } from '../models/AdminAnalyticsFindAllRequest'
import type { AdminAnalyticsFindAllResponse } from '../models/AdminAnalyticsFindAllResponse'

export class AnalyticsService {
  /**
   * 获取 分析表(Analytics) 列表
   * @param requestBody
   * @returns AdminAnalyticsFindAllResponse 带分页的 分析表(Analytics) 列表
   * @throws ApiError
   */
  public static findAll(requestBody: AdminAnalyticsFindAllRequest): CancelablePromise<AdminAnalyticsFindAllResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/tasks/analytics-contract/findAll',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
