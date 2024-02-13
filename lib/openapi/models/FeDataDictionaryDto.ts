/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FeDataDictionaryDto = {
  /**
   * 类别
   */
  category: string
  /**
   * 字典项名称
   */
  name: string
  /**
   * 字典项值
   */
  value?: string
  /**
   * 排序权重
   */
  sortWeight?: number
  /**
   * 最后一次设为默认值的时间
   */
  defaultAt?: string
  /**
   * 层级
   */
  level: number
  /**
   * 父级字典项 ID
   */
  parent?: number
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
}
