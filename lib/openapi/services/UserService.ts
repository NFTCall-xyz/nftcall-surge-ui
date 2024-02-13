/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
import type { LoginDto } from '../models/LoginDto'
import type { LoginResponseDto } from '../models/LoginResponseDto'
import type { UserDto } from '../models/UserDto'

export class UserService {
  /**
   * 登录接口
   * @param requestBody
   * @returns LoginResponseDto 登录成功
   * @throws ApiError
   */
  public static login(requestBody: LoginDto): CancelablePromise<LoginResponseDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/user/login',
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * 使用 token 获取用户信息
   * @param xToken token for authentication
   * @returns UserDto 获取用户信息成功
   * @throws ApiError
   */
  public static getUserInfo(xToken?: string): CancelablePromise<UserDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/user/user-info',
      headers: {
        'X-Token': xToken,
      },
    })
  }
}
