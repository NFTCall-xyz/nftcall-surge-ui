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

import type { OnEvent, TypedEvent, TypedEventFilter, TypedListener } from '../../common'

export type OptionPositionStruct = {
  state: BigNumberish
  optionType: BigNumberish
  payer: string
  strikeId: BigNumberish
  amount: BigNumberish
  premium: BigNumberish
  maximumPremium: BigNumberish
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

export interface IOptionTokenInterface extends utils.Interface {
  functions: {
    'activePosition(uint256,uint256)': FunctionFragment
    'closePosition(uint256)': FunctionFragment
    'decimals()': FunctionFragment
    'forceClosePendingPosition(uint256)': FunctionFragment
    'lockedValue(uint256)': FunctionFragment
    'openPosition(address,address,uint8,uint256,uint256,uint256)': FunctionFragment
    'optionPosition(uint256)': FunctionFragment
    'optionPositionState(uint256)': FunctionFragment
    'setBaseURI(string)': FunctionFragment
    'totalAmount()': FunctionFragment
    'totalAmount(uint8)': FunctionFragment
    'totalValue(uint8)': FunctionFragment
    'totalValue()': FunctionFragment
    'vault()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'activePosition'
      | 'closePosition'
      | 'decimals'
      | 'forceClosePendingPosition'
      | 'lockedValue'
      | 'openPosition'
      | 'optionPosition'
      | 'optionPositionState'
      | 'setBaseURI'
      | 'totalAmount()'
      | 'totalAmount(uint8)'
      | 'totalValue(uint8)'
      | 'totalValue()'
      | 'vault'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'activePosition', values: [BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: 'closePosition', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
  encodeFunctionData(functionFragment: 'forceClosePendingPosition', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'lockedValue', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'openPosition',
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'optionPosition', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'optionPositionState', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'setBaseURI', values: [string]): string
  encodeFunctionData(functionFragment: 'totalAmount()', values?: undefined): string
  encodeFunctionData(functionFragment: 'totalAmount(uint8)', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'totalValue(uint8)', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'totalValue()', values?: undefined): string
  encodeFunctionData(functionFragment: 'vault', values?: undefined): string

  decodeFunctionResult(functionFragment: 'activePosition', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'closePosition', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'forceClosePendingPosition', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'lockedValue', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'openPosition', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'optionPosition', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'optionPositionState', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setBaseURI', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalAmount()', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalAmount(uint8)', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalValue(uint8)', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalValue()', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'vault', data: BytesLike): Result

  events: {
    'ActivePosition(uint256,uint256)': EventFragment
    'ClosePosition(uint256)': EventFragment
    'ForceClosePosition(uint256)': EventFragment
    'Initialize(address)': EventFragment
    'OpenPosition(address,address,uint256,uint8,uint256,uint256,uint256)': EventFragment
    'UpdateBaseURI(string)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'ActivePosition'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ClosePosition'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ForceClosePosition'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Initialize'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OpenPosition'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'UpdateBaseURI'): EventFragment
}

export interface ActivePositionEventObject {
  positionId: BigNumber
  premium: BigNumber
}
export type ActivePositionEvent = TypedEvent<[BigNumber, BigNumber], ActivePositionEventObject>

export type ActivePositionEventFilter = TypedEventFilter<ActivePositionEvent>

export interface ClosePositionEventObject {
  positionId: BigNumber
}
export type ClosePositionEvent = TypedEvent<[BigNumber], ClosePositionEventObject>

export type ClosePositionEventFilter = TypedEventFilter<ClosePositionEvent>

export interface ForceClosePositionEventObject {
  positionId: BigNumber
}
export type ForceClosePositionEvent = TypedEvent<[BigNumber], ForceClosePositionEventObject>

export type ForceClosePositionEventFilter = TypedEventFilter<ForceClosePositionEvent>

export interface InitializeEventObject {
  vault: string
}
export type InitializeEvent = TypedEvent<[string], InitializeEventObject>

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>

export interface OpenPositionEventObject {
  payer: string
  to: string
  positionId: BigNumber
  optionType: number
  strikeId: BigNumber
  amount: BigNumber
  maximumPremium: BigNumber
}
export type OpenPositionEvent = TypedEvent<
  [string, string, BigNumber, number, BigNumber, BigNumber, BigNumber],
  OpenPositionEventObject
>

export type OpenPositionEventFilter = TypedEventFilter<OpenPositionEvent>

export interface UpdateBaseURIEventObject {
  baseURI: string
}
export type UpdateBaseURIEvent = TypedEvent<[string], UpdateBaseURIEventObject>

export type UpdateBaseURIEventFilter = TypedEventFilter<UpdateBaseURIEvent>

export interface IOptionToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: IOptionTokenInterface

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
    activePosition(
      positionId: BigNumberish,
      premium: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>

    closePosition(positionId: BigNumberish, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

    decimals(overrides?: CallOverrides): Promise<[number]>

    forceClosePendingPosition(
      positionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>

    lockedValue(positionId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>

    openPosition(
      payer: string,
      to: string,
      optionType: BigNumberish,
      strikeId: BigNumberish,
      amount: BigNumberish,
      maximumPremium: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>

    optionPosition(positionId: BigNumberish, overrides?: CallOverrides): Promise<[OptionPositionStructOutput]>

    optionPositionState(positionId: BigNumberish, overrides?: CallOverrides): Promise<[number]>

    setBaseURI(baseURI: string, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

    'totalAmount()'(overrides?: CallOverrides): Promise<[BigNumber]>

    'totalAmount(uint8)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>

    'totalValue(uint8)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>

    'totalValue()'(overrides?: CallOverrides): Promise<[BigNumber]>

    vault(overrides?: CallOverrides): Promise<[string]>
  }

  activePosition(
    positionId: BigNumberish,
    premium: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>

  closePosition(positionId: BigNumberish, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

  decimals(overrides?: CallOverrides): Promise<number>

  forceClosePendingPosition(
    positionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>

  lockedValue(positionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  openPosition(
    payer: string,
    to: string,
    optionType: BigNumberish,
    strikeId: BigNumberish,
    amount: BigNumberish,
    maximumPremium: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>

  optionPosition(positionId: BigNumberish, overrides?: CallOverrides): Promise<OptionPositionStructOutput>

  optionPositionState(positionId: BigNumberish, overrides?: CallOverrides): Promise<number>

  setBaseURI(baseURI: string, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

  'totalAmount()'(overrides?: CallOverrides): Promise<BigNumber>

  'totalAmount(uint8)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  'totalValue(uint8)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  'totalValue()'(overrides?: CallOverrides): Promise<BigNumber>

  vault(overrides?: CallOverrides): Promise<string>

  callStatic: {
    activePosition(positionId: BigNumberish, premium: BigNumberish, overrides?: CallOverrides): Promise<void>

    closePosition(positionId: BigNumberish, overrides?: CallOverrides): Promise<void>

    decimals(overrides?: CallOverrides): Promise<number>

    forceClosePendingPosition(positionId: BigNumberish, overrides?: CallOverrides): Promise<void>

    lockedValue(positionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    openPosition(
      payer: string,
      to: string,
      optionType: BigNumberish,
      strikeId: BigNumberish,
      amount: BigNumberish,
      maximumPremium: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    optionPosition(positionId: BigNumberish, overrides?: CallOverrides): Promise<OptionPositionStructOutput>

    optionPositionState(positionId: BigNumberish, overrides?: CallOverrides): Promise<number>

    setBaseURI(baseURI: string, overrides?: CallOverrides): Promise<void>

    'totalAmount()'(overrides?: CallOverrides): Promise<BigNumber>

    'totalAmount(uint8)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'totalValue(uint8)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'totalValue()'(overrides?: CallOverrides): Promise<BigNumber>

    vault(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    'ActivePosition(uint256,uint256)'(positionId?: BigNumberish | null, premium?: null): ActivePositionEventFilter
    ActivePosition(positionId?: BigNumberish | null, premium?: null): ActivePositionEventFilter

    'ClosePosition(uint256)'(positionId?: BigNumberish | null): ClosePositionEventFilter
    ClosePosition(positionId?: BigNumberish | null): ClosePositionEventFilter

    'ForceClosePosition(uint256)'(positionId?: BigNumberish | null): ForceClosePositionEventFilter
    ForceClosePosition(positionId?: BigNumberish | null): ForceClosePositionEventFilter

    'Initialize(address)'(vault?: string | null): InitializeEventFilter
    Initialize(vault?: string | null): InitializeEventFilter

    'OpenPosition(address,address,uint256,uint8,uint256,uint256,uint256)'(
      payer?: null,
      to?: string | null,
      positionId?: BigNumberish | null,
      optionType?: null,
      strikeId?: null,
      amount?: null,
      maximumPremium?: null
    ): OpenPositionEventFilter
    OpenPosition(
      payer?: null,
      to?: string | null,
      positionId?: BigNumberish | null,
      optionType?: null,
      strikeId?: null,
      amount?: null,
      maximumPremium?: null
    ): OpenPositionEventFilter

    'UpdateBaseURI(string)'(baseURI?: null): UpdateBaseURIEventFilter
    UpdateBaseURI(baseURI?: null): UpdateBaseURIEventFilter
  }

  estimateGas: {
    activePosition(
      positionId: BigNumberish,
      premium: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>

    closePosition(positionId: BigNumberish, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<BigNumber>

    forceClosePendingPosition(positionId: BigNumberish, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    lockedValue(positionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    openPosition(
      payer: string,
      to: string,
      optionType: BigNumberish,
      strikeId: BigNumberish,
      amount: BigNumberish,
      maximumPremium: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>

    optionPosition(positionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    optionPositionState(positionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    setBaseURI(baseURI: string, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    'totalAmount()'(overrides?: CallOverrides): Promise<BigNumber>

    'totalAmount(uint8)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'totalValue(uint8)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'totalValue()'(overrides?: CallOverrides): Promise<BigNumber>

    vault(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    activePosition(
      positionId: BigNumberish,
      premium: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>

    closePosition(positionId: BigNumberish, overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

    forceClosePendingPosition(
      positionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>

    lockedValue(positionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    openPosition(
      payer: string,
      to: string,
      optionType: BigNumberish,
      strikeId: BigNumberish,
      amount: BigNumberish,
      maximumPremium: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>

    optionPosition(positionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    optionPositionState(positionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    setBaseURI(baseURI: string, overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>

    'totalAmount()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'totalAmount(uint8)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'totalValue(uint8)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'totalValue()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
