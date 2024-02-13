/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FeDataDictionaryFindAllRequestOrder = {
  /**
   * 需要排序的字段名称
   */
  field: FeDataDictionaryFindAllRequestOrder.field
  /**
   * 排序方向 (升序或降序)
   */
  direction: FeDataDictionaryFindAllRequestOrder.direction
}

export namespace FeDataDictionaryFindAllRequestOrder {
  /**
   * 需要排序的字段名称
   */
  export enum field {
    SORT_WEIGHT = 'sortWeight',
    CREATED_AT = 'createdAt',
  }

  /**
   * 排序方向 (升序或降序)
   */
  export enum direction {
    ASC = 'ASC',
    DESC = 'DESC',
  }
}
