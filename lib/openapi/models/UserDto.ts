/* generated using openapi-typescript-codegen -- do no edit */

/* istanbul ignore file */

/* tslint:disable */

/* eslint-disable */
import type { FeUserRoleDto } from './FeUserRoleDto'

export type UserDto = {
  /**
   * 手机号
   */
  phone?: string
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 头像地址
   */
  avatar?: string
  /**
   * 实体的唯一标识符
   */
  id: number
  /**
   * 实体的创建时间
   */
  createdAt: string
  /**
   * 实体的备注信息
   */
  remark?: string
  /**
   * 用户角色
   */
  roles?: Array<FeUserRoleDto>
  /**
   * 用户权限
   */
  permissions?: Array<string>
}
