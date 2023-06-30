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

export interface AssetRiskCacheInterface extends utils.Interface {
  functions: {
    'getAssetDelta(address)': FunctionFragment
    'getAssetRisk(address)': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'updateAssetDelta(address,int256)': FunctionFragment
    'updateAssetRisk(address,int256,int256)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'getAssetDelta'
      | 'getAssetRisk'
      | 'owner'
      | 'renounceOwnership'
      | 'transferOwnership'
      | 'updateAssetDelta'
      | 'updateAssetRisk'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'getAssetDelta', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'getAssetRisk', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'updateAssetDelta',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'updateAssetRisk',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string

  decodeFunctionResult(functionFragment: 'getAssetDelta', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAssetRisk', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateAssetDelta', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateAssetRisk', data: BytesLike): Result

  events: {
    'OwnershipTransferred(address,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
}

export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>

export interface AssetRiskCache extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: AssetRiskCacheInterface

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
    getAssetDelta(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & { delta: BigNumber }>

    getAssetRisk(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { delta: BigNumber; PNL: BigNumber }>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    updateAssetDelta(
      asset: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    updateAssetRisk(
      asset: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      PNL: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  getAssetDelta(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  getAssetRisk(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { delta: BigNumber; PNL: BigNumber }>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  updateAssetDelta(
    asset: PromiseOrValue<string>,
    delta: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  updateAssetRisk(
    asset: PromiseOrValue<string>,
    delta: PromiseOrValue<BigNumberish>,
    PNL: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    getAssetDelta(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getAssetRisk(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { delta: BigNumber; PNL: BigNumber }>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    updateAssetDelta(
      asset: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    updateAssetRisk(
      asset: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      PNL: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
  }

  estimateGas: {
    getAssetDelta(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getAssetRisk(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    updateAssetDelta(
      asset: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    updateAssetRisk(
      asset: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      PNL: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    getAssetDelta(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getAssetRisk(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    updateAssetDelta(
      asset: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    updateAssetRisk(
      asset: PromiseOrValue<string>,
      delta: PromiseOrValue<BigNumberish>,
      PNL: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
