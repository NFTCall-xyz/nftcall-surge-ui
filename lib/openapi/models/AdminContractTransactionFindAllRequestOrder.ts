/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdminContractTransactionFindAllRequestOrder = {
  /**
   * 需要排序的字段名称
   */
  field: AdminContractTransactionFindAllRequestOrder.field
  /**
   * 排序方向 (升序或降序)
   */
  direction: AdminContractTransactionFindAllRequestOrder.direction
}

export namespace AdminContractTransactionFindAllRequestOrder {
  /**
   * 需要排序的字段名称
   */
  export enum field {
    CHAIN_ID = 'chainId',
    BLOCK_NUMBER = 'blockNumber',
    WALLET_ADDRESS = 'walletAddress',
    BALANCE = 'balance',
    FEE = 'fee',
    HASH = 'hash',
    URL = 'url',
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
