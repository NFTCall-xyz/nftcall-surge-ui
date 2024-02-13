/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdminAnalyticsFindAllRequestOrder = {
  /**
   * 需要排序的字段名称
   */
  field: AdminAnalyticsFindAllRequestOrder.field
  /**
   * 排序方向 (升序或降序)
   */
  direction: AdminAnalyticsFindAllRequestOrder.direction
}

export namespace AdminAnalyticsFindAllRequestOrder {
  /**
   * 需要排序的字段名称
   */
  export enum field {
    CHAIN_ID = 'chainId',
    VAULT_ADDRESS = 'vaultAddress',
    TVL = 'TVL',
    NC_ETHPRICE = 'ncETHPrice',
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
