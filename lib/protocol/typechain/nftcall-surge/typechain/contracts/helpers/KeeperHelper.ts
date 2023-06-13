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

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../../common'

export type OptionPositionStruct = {
  state: PromiseOrValue<BigNumberish>
  optionType: PromiseOrValue<BigNumberish>
  payer: PromiseOrValue<string>
  strikeId: PromiseOrValue<BigNumberish>
  amount: PromiseOrValue<BigNumberish>
  premium: PromiseOrValue<BigNumberish>
  maximumPremium: PromiseOrValue<BigNumberish>
}

export type OptionPositionStructOutput = [number, number, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
  state: number
  optionType: number
  payer: string
  strikeId: BigNumber
  amount: BigNumber
  premium: BigNumber
  maximumPremium: BigNumber
}

export type StrikeStruct = {
  spotPrice: PromiseOrValue<BigNumberish>
  strikePrice: PromiseOrValue<BigNumberish>
  duration: PromiseOrValue<BigNumberish>
  expiry: PromiseOrValue<BigNumberish>
}

export type StrikeStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber] & {
  spotPrice: BigNumber
  strikePrice: BigNumber
  duration: BigNumber
  expiry: BigNumber
}

export interface KeeperHelperInterface extends utils.Interface {
  functions: {
    'batchActivateOptions(address,uint256[])': FunctionFragment
    'batchCloseOptions(address,uint256[])': FunctionFragment
    'batchForceClosePendingPositions(address,uint256[])': FunctionFragment
    'getActiveOptions(address)': FunctionFragment
    'getExpiredOptions(address)': FunctionFragment
    'getOptionData(address,uint256[])': FunctionFragment
    'getPendingOptions(address)': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'batchActivateOptions'
      | 'batchCloseOptions'
      | 'batchForceClosePendingPositions'
      | 'getActiveOptions'
      | 'getExpiredOptions'
      | 'getOptionData'
      | 'getPendingOptions'
      | 'owner'
      | 'renounceOwnership'
      | 'transferOwnership'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'batchActivateOptions',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string
  encodeFunctionData(
    functionFragment: 'batchCloseOptions',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string
  encodeFunctionData(
    functionFragment: 'batchForceClosePendingPositions',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string
  encodeFunctionData(functionFragment: 'getActiveOptions', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'getExpiredOptions', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'getOptionData',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string
  encodeFunctionData(functionFragment: 'getPendingOptions', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string

  decodeFunctionResult(functionFragment: 'batchActivateOptions', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'batchCloseOptions', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'batchForceClosePendingPositions', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getActiveOptions', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getExpiredOptions', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getOptionData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPendingOptions', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result

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

export interface KeeperHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: KeeperHelperInterface

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
    batchActivateOptions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    batchCloseOptions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    batchForceClosePendingPositions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    getActiveOptions(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { tokenIds: BigNumber[] }>

    getExpiredOptions(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { tokenIds: BigNumber[] }>

    getOptionData(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [OptionPositionStructOutput[], StrikeStructOutput[]] & {
        optionPositions: OptionPositionStructOutput[]
        strikes: StrikeStructOutput[]
      }
    >

    getPendingOptions(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { tokenIds: BigNumber[] }>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  batchActivateOptions(
    collection: PromiseOrValue<string>,
    positionIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  batchCloseOptions(
    collection: PromiseOrValue<string>,
    positionIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  batchForceClosePendingPositions(
    collection: PromiseOrValue<string>,
    positionIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  getActiveOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>

  getExpiredOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>

  getOptionData(
    collection: PromiseOrValue<string>,
    positionIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<
    [OptionPositionStructOutput[], StrikeStructOutput[]] & {
      optionPositions: OptionPositionStructOutput[]
      strikes: StrikeStructOutput[]
    }
  >

  getPendingOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    batchActivateOptions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>

    batchCloseOptions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>

    batchForceClosePendingPositions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>

    getActiveOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>

    getExpiredOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>

    getOptionData(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [OptionPositionStructOutput[], StrikeStructOutput[]] & {
        optionPositions: OptionPositionStructOutput[]
        strikes: StrikeStructOutput[]
      }
    >

    getPendingOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>
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
    batchActivateOptions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    batchCloseOptions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    batchForceClosePendingPositions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    getActiveOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getExpiredOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    getOptionData(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getPendingOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    batchActivateOptions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    batchCloseOptions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    batchForceClosePendingPositions(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    getActiveOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getExpiredOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getOptionData(
      collection: PromiseOrValue<string>,
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getPendingOptions(collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
