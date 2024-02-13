/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdminBlockchainPriceFindAllRequestFilter = {
  /**
   * 波动率
   */
  volatility?: string
  /**
   * 上链状态
   */
  status?: string
  /**
   * 更新原因
   */
  updateReason?: string
  /**
   * 集合名称
   */
  collectionName?: string
  /**
   * 地板价
   */
  floorPrice?: string
  /**
   * 操作时间-开始日期
   */
  operationTimeStart?: string
  /**
   * 操作时间-结束日期
   */
  operationTimeEnd?: string
  /**
   * 实体的唯一标识符
   */
  id?: number
  /**
   * 实体的创建时间-开始日期
   */
  createdAtStart?: string
  /**
   * 实体的创建时间-结束日期
   */
  createdAtEnd?: string
  /**
   * 创建实体的用户
   */
  createdBy?: number
  /**
   * 实体的最后更新时间-开始日期
   */
  updatedAtStart?: string
  /**
   * 实体的最后更新时间-结束日期
   */
  updatedAtEnd?: string
  /**
   * 最后更新实体的用户
   */
  updatedBy?: number
  /**
   * 实体的禁用时间-开始日期
   */
  disabledAtStart?: string
  /**
   * 实体的禁用时间-结束日期
   */
  disabledAtEnd?: string
  /**
   * 禁用实体的用户
   */
  disabledBy?: number
  /**
   * 实体的备注信息
   */
  remark?: string
}
