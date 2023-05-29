/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { EventFragment, FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../common'

export declare namespace NFTCallOracle {
  export type UpdateInputStruct = {
    price: PromiseOrValue<BigNumberish>
    vol: PromiseOrValue<BigNumberish>
    index: PromiseOrValue<BigNumberish>
  }

  export type UpdateInputStructOutput = [number, number, BigNumber] & {
    price: number
    vol: number
    index: BigNumber
  }
}

export interface NFTCallOracleInterface extends utils.Interface {
  functions: {
    'PRICE_DECIMALS()': FunctionFragment
    'PRICE_UNIT()': FunctionFragment
    'VOL_DECIMALS()': FunctionFragment
    'VOL_UNIT()': FunctionFragment
    'addAssets(address[])': FunctionFragment
    'batchSetAssetPrice(uint256[],tuple[][])': FunctionFragment
    'getAddressList()': FunctionFragment
    'getAssetPrice(address)': FunctionFragment
    'getAssetPriceAndVol(address)': FunctionFragment
    'getAssetVol(address)': FunctionFragment
    'getAssets(address[])': FunctionFragment
    'getIndexes(address)': FunctionFragment
    'isEmergencyAdmin(address)': FunctionFragment
    'operator()': FunctionFragment
    'owner()': FunctionFragment
    'paused()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'replaceAsset(address,address)': FunctionFragment
    'setEmergencyAdmin(address,bool)': FunctionFragment
    'setOperator(address)': FunctionFragment
    'setPause(bool)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'PRICE_DECIMALS'
      | 'PRICE_UNIT'
      | 'VOL_DECIMALS'
      | 'VOL_UNIT'
      | 'addAssets'
      | 'batchSetAssetPrice'
      | 'getAddressList'
      | 'getAssetPrice'
      | 'getAssetPriceAndVol'
      | 'getAssetVol'
      | 'getAssets'
      | 'getIndexes'
      | 'isEmergencyAdmin'
      | 'operator'
      | 'owner'
      | 'paused'
      | 'renounceOwnership'
      | 'replaceAsset'
      | 'setEmergencyAdmin'
      | 'setOperator'
      | 'setPause'
      | 'transferOwnership'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'PRICE_DECIMALS', values?: undefined): string
  encodeFunctionData(functionFragment: 'PRICE_UNIT', values?: undefined): string
  encodeFunctionData(functionFragment: 'VOL_DECIMALS', values?: undefined): string
  encodeFunctionData(functionFragment: 'VOL_UNIT', values?: undefined): string
  encodeFunctionData(functionFragment: 'addAssets', values: [PromiseOrValue<string>[]]): string
  encodeFunctionData(
    functionFragment: 'batchSetAssetPrice',
    values: [PromiseOrValue<BigNumberish>[], NFTCallOracle.UpdateInputStruct[][]]
  ): string
  encodeFunctionData(functionFragment: 'getAddressList', values?: undefined): string
  encodeFunctionData(functionFragment: 'getAssetPrice', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'getAssetPriceAndVol', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'getAssetVol', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'getAssets', values: [PromiseOrValue<string>[]]): string
  encodeFunctionData(functionFragment: 'getIndexes', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'isEmergencyAdmin', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'operator', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(functionFragment: 'replaceAsset', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'setEmergencyAdmin',
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string
  encodeFunctionData(functionFragment: 'setOperator', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'setPause', values: [PromiseOrValue<boolean>]): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string

  decodeFunctionResult(functionFragment: 'PRICE_DECIMALS', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'PRICE_UNIT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VOL_DECIMALS', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VOL_UNIT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'addAssets', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'batchSetAssetPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAddressList', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAssetPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAssetPriceAndVol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAssetVol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAssets', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getIndexes', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isEmergencyAdmin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'operator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'replaceAsset', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setEmergencyAdmin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setOperator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setPause', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result

  events: {
    'ChangeOperator(address,address)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'Paused(address)': EventFragment
    'ReplaceAsset(address,address)': EventFragment
    'SetAssetData(uint256[],tuple[][])': EventFragment
    'SetEmergencyAdmin(address,bool)': EventFragment
    'Unpaused(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'ChangeOperator'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ReplaceAsset'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'SetAssetData'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'SetEmergencyAdmin'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment
}

export interface ChangeOperatorEventObject {
  oldOperator: string
  newOperator: string
}
export type ChangeOperatorEvent = TypedEvent<[string, string], ChangeOperatorEventObject>

export type ChangeOperatorEventFilter = TypedEventFilter<ChangeOperatorEvent>

export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>

export interface PausedEventObject {
  account: string
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>

export type PausedEventFilter = TypedEventFilter<PausedEvent>

export interface ReplaceAssetEventObject {
  oldAsset: string
  newAsset: string
}
export type ReplaceAssetEvent = TypedEvent<[string, string], ReplaceAssetEventObject>

export type ReplaceAssetEventFilter = TypedEventFilter<ReplaceAssetEvent>

export interface SetAssetDataEventObject {
  indexes: BigNumber[]
  inputs: NFTCallOracle.UpdateInputStructOutput[][]
}
export type SetAssetDataEvent = TypedEvent<
  [BigNumber[], NFTCallOracle.UpdateInputStructOutput[][]],
  SetAssetDataEventObject
>

export type SetAssetDataEventFilter = TypedEventFilter<SetAssetDataEvent>

export interface SetEmergencyAdminEventObject {
  admin: string
  enabled: boolean
}
export type SetEmergencyAdminEvent = TypedEvent<[string, boolean], SetEmergencyAdminEventObject>

export type SetEmergencyAdminEventFilter = TypedEventFilter<SetEmergencyAdminEvent>

export interface UnpausedEventObject {
  account: string
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>

export interface NFTCallOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: NFTCallOracleInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    PRICE_DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>

    PRICE_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>

    VOL_DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>

    VOL_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>

    addAssets(
      assets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    batchSetAssetPrice(
      indexes: PromiseOrValue<BigNumberish>[],
      inputs: NFTCallOracle.UpdateInputStruct[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    getAddressList(overrides?: CallOverrides): Promise<[string[]]>

    getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & { price: BigNumber }>

    getAssetPriceAndVol(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { price: BigNumber; vol: BigNumber }>

    getAssetVol(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & { vol: BigNumber }>

    getAssets(
      assets: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber][]] & { prices: [BigNumber, BigNumber][] }>

    getIndexes(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { OuterIndex: BigNumber; InnerIndex: BigNumber }>

    isEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>

    operator(overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    paused(overrides?: CallOverrides): Promise<[boolean]>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    replaceAsset(
      oldAsset: PromiseOrValue<string>,
      newAsset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setEmergencyAdmin(
      admin: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setOperator(
      newOperator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  PRICE_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>

  PRICE_UNIT(overrides?: CallOverrides): Promise<BigNumber>

  VOL_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>

  VOL_UNIT(overrides?: CallOverrides): Promise<BigNumber>

  addAssets(
    assets: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  batchSetAssetPrice(
    indexes: PromiseOrValue<BigNumberish>[],
    inputs: NFTCallOracle.UpdateInputStruct[][],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  getAddressList(overrides?: CallOverrides): Promise<string[]>

  getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  getAssetPriceAndVol(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { price: BigNumber; vol: BigNumber }>

  getAssetVol(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  getAssets(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber][]>

  getIndexes(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { OuterIndex: BigNumber; InnerIndex: BigNumber }>

  isEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

  operator(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  paused(overrides?: CallOverrides): Promise<boolean>

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  replaceAsset(
    oldAsset: PromiseOrValue<string>,
    newAsset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setEmergencyAdmin(
    admin: PromiseOrValue<string>,
    enabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setOperator(
    newOperator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setPause(
    val: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    PRICE_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>

    PRICE_UNIT(overrides?: CallOverrides): Promise<BigNumber>

    VOL_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>

    VOL_UNIT(overrides?: CallOverrides): Promise<BigNumber>

    addAssets(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>

    batchSetAssetPrice(
      indexes: PromiseOrValue<BigNumberish>[],
      inputs: NFTCallOracle.UpdateInputStruct[][],
      overrides?: CallOverrides
    ): Promise<void>

    getAddressList(overrides?: CallOverrides): Promise<string[]>

    getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getAssetPriceAndVol(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { price: BigNumber; vol: BigNumber }>

    getAssetVol(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getAssets(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber][]>

    getIndexes(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { OuterIndex: BigNumber; InnerIndex: BigNumber }>

    isEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>

    operator(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    paused(overrides?: CallOverrides): Promise<boolean>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    replaceAsset(
      oldAsset: PromiseOrValue<string>,
      newAsset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    setEmergencyAdmin(
      admin: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>

    setOperator(newOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    setPause(val: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    'ChangeOperator(address,address)'(
      oldOperator?: PromiseOrValue<string> | null,
      newOperator?: PromiseOrValue<string> | null
    ): ChangeOperatorEventFilter
    ChangeOperator(
      oldOperator?: PromiseOrValue<string> | null,
      newOperator?: PromiseOrValue<string> | null
    ): ChangeOperatorEventFilter

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter

    'Paused(address)'(account?: null): PausedEventFilter
    Paused(account?: null): PausedEventFilter

    'ReplaceAsset(address,address)'(
      oldAsset?: PromiseOrValue<string> | null,
      newAsset?: PromiseOrValue<string> | null
    ): ReplaceAssetEventFilter
    ReplaceAsset(
      oldAsset?: PromiseOrValue<string> | null,
      newAsset?: PromiseOrValue<string> | null
    ): ReplaceAssetEventFilter

    'SetAssetData(uint256[],tuple[][])'(indexes?: null, inputs?: null): SetAssetDataEventFilter
    SetAssetData(indexes?: null, inputs?: null): SetAssetDataEventFilter

    'SetEmergencyAdmin(address,bool)'(
      admin?: PromiseOrValue<string> | null,
      enabled?: null
    ): SetEmergencyAdminEventFilter
    SetEmergencyAdmin(admin?: PromiseOrValue<string> | null, enabled?: null): SetEmergencyAdminEventFilter

    'Unpaused(address)'(account?: null): UnpausedEventFilter
    Unpaused(account?: null): UnpausedEventFilter
  }

  estimateGas: {
    PRICE_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>

    PRICE_UNIT(overrides?: CallOverrides): Promise<BigNumber>

    VOL_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>

    VOL_UNIT(overrides?: CallOverrides): Promise<BigNumber>

    addAssets(
      assets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    batchSetAssetPrice(
      indexes: PromiseOrValue<BigNumberish>[],
      inputs: NFTCallOracle.UpdateInputStruct[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    getAddressList(overrides?: CallOverrides): Promise<BigNumber>

    getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getAssetPriceAndVol(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getAssetVol(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getAssets(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>

    getIndexes(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    isEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    operator(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    paused(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    replaceAsset(
      oldAsset: PromiseOrValue<string>,
      newAsset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setEmergencyAdmin(
      admin: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setOperator(
      newOperator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    PRICE_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>

    PRICE_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VOL_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VOL_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    addAssets(
      assets: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    batchSetAssetPrice(
      indexes: PromiseOrValue<BigNumberish>[],
      inputs: NFTCallOracle.UpdateInputStruct[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    getAddressList(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getAssetPrice(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getAssetPriceAndVol(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getAssetVol(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getAssets(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>

    getIndexes(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    isEmergencyAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    replaceAsset(
      oldAsset: PromiseOrValue<string>,
      newAsset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setEmergencyAdmin(
      admin: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setOperator(
      newOperator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
