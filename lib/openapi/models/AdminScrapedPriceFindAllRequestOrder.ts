/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdminScrapedPriceFindAllRequestOrder = {
  /**
   * 需要排序的字段名称
   */
  field: AdminScrapedPriceFindAllRequestOrder.field
  /**
   * 排序方向 (升序或降序)
   */
  direction: AdminScrapedPriceFindAllRequestOrder.direction
}

export namespace AdminScrapedPriceFindAllRequestOrder {
  /**
   * 需要排序的字段名称
   */
  export enum field {
    VOLUME_ONE_DAY = 'volumeOneDay',
    FLOOR_PRICE = 'floorPrice',
    OPERATION_TIME = 'operationTime',
    ID = 'id',
    CREATED_AT = 'createdAt',
    CREATED_BY = 'createdBy',
    UPDATED_AT = 'updatedAt',
    UPDATED_BY = 'updatedBy',
    DISABLED_AT = 'disabledAt',
    DISABLED_BY = 'disabledBy',
    REMARK = 'remark',
  }

  /**
   * 排序方向 (升序或降序)
   */
  export enum direction {
    ASC = 'ASC',
    DESC = 'DESC',
  }
}
