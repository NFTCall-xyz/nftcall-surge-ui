/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { TokenDto } from './TokenDto'
import type { UserDto } from './UserDto'

export type LoginResponseDto = {
  /**
   * 用户信息
   */
  user: UserDto
  /**
   * 令牌信息
   */
  tokens: TokenDto
}
