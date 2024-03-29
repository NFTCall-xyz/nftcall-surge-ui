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

export interface ILPTokenInterface extends utils.Interface {
  functions: {
    'collectUntitledAssets(address)': FunctionFragment
    'decreaseTotalAssets(uint256)': FunctionFragment
    'deposit(uint256,address,address)': FunctionFragment
    'increaseTotalAssets(uint256)': FunctionFragment
    'lockedBalanceOf(address)': FunctionFragment
    'maximumVaultBalance()': FunctionFragment
    'releaseTime(address)': FunctionFragment
    'setMaximumVaultBalance(uint256)': FunctionFragment
    'setMinimumAssetToShareRatio(uint256)': FunctionFragment
    'setWholeWithdrawLimit(uint256)': FunctionFragment
    'untitledAssets()': FunctionFragment
    'vault()': FunctionFragment
    'wholeWithdrawLimit()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'collectUntitledAssets'
      | 'decreaseTotalAssets'
      | 'deposit'
      | 'increaseTotalAssets'
      | 'lockedBalanceOf'
      | 'maximumVaultBalance'
      | 'releaseTime'
      | 'setMaximumVaultBalance'
      | 'setMinimumAssetToShareRatio'
      | 'setWholeWithdrawLimit'
      | 'untitledAssets'
      | 'vault'
      | 'wholeWithdrawLimit'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'collectUntitledAssets', values: [string]): string
  encodeFunctionData(functionFragment: 'decreaseTotalAssets', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'deposit', values: [BigNumberish, string, string]): string
  encodeFunctionData(functionFragment: 'increaseTotalAssets', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'lockedBalanceOf', values: [string]): string
  encodeFunctionData(functionFragment: 'maximumVaultBalance', values?: undefined): string
  encodeFunctionData(functionFragment: 'releaseTime', values: [string]): string
  encodeFunctionData(functionFragment: 'setMaximumVaultBalance', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'setMinimumAssetToShareRatio', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'setWholeWithdrawLimit', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'untitledAssets', values?: undefined): string
  encodeFunctionData(functionFragment: 'vault', values?: undefined): string
  encodeFunctionData(functionFragment: 'wholeWithdrawLimit', values?: undefined): string

  decodeFunctionResult(functionFragment: 'collectUntitledAssets', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decreaseTotalAssets', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'increaseTotalAssets', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'lockedBalanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'maximumVaultBalance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'releaseTime', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMaximumVaultBalance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMinimumAssetToShareRatio', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setWholeWithdrawLimit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'untitledAssets', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'vault', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'wholeWithdrawLimit', data: BytesLike): Result

  events: {
    'Claim(address,uint256)': EventFragment
    'Collect(address,uint256)': EventFragment
    'Initialize(address,uint256)': EventFragment
    'UpdateMaximumVaultBalance(uint256)': EventFragment
    'UpdateMinimumAssetToShareRatio(uint256)': EventFragment
    'UpdateTotalAssets(uint256)': EventFragment
    'UpdateWholeWithdrawLimit(uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Claim'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Collect'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Initialize'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'UpdateMaximumVaultBalance'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'UpdateMinimumAssetToShareRatio'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'UpdateTotalAssets'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'UpdateWholeWithdrawLimit'): EventFragment
}

export interface ClaimEventObject {
  user: string
  amount: BigNumber
}
export type ClaimEvent = TypedEvent<[string, BigNumber], ClaimEventObject>

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>

export interface CollectEventObject {
  receiver: string
  amount: BigNumber
}
export type CollectEvent = TypedEvent<[string, BigNumber], CollectEventObject>

export type CollectEventFilter = TypedEventFilter<CollectEvent>

export interface InitializeEventObject {
  vault: string
  maxVaultBalance: BigNumber
}
export type InitializeEvent = TypedEvent<[string, BigNumber], InitializeEventObject>

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>

export interface UpdateMaximumVaultBalanceEventObject {
  maxVaultBalance: BigNumber
}
export type UpdateMaximumVaultBalanceEvent = TypedEvent<[BigNumber], UpdateMaximumVaultBalanceEventObject>

export type UpdateMaximumVaultBalanceEventFilter = TypedEventFilter<UpdateMaximumVaultBalanceEvent>

export interface UpdateMinimumAssetToShareRatioEventObject {
  ratio: BigNumber
}
export type UpdateMinimumAssetToShareRatioEvent = TypedEvent<[BigNumber], UpdateMinimumAssetToShareRatioEventObject>

export type UpdateMinimumAssetToShareRatioEventFilter = TypedEventFilter<UpdateMinimumAssetToShareRatioEvent>

export interface UpdateTotalAssetsEventObject {
  amount: BigNumber
}
export type UpdateTotalAssetsEvent = TypedEvent<[BigNumber], UpdateTotalAssetsEventObject>

export type UpdateTotalAssetsEventFilter = TypedEventFilter<UpdateTotalAssetsEvent>

export interface UpdateWholeWithdrawLimitEventObject {
  limit: BigNumber
}
export type UpdateWholeWithdrawLimitEvent = TypedEvent<[BigNumber], UpdateWholeWithdrawLimitEventObject>

export type UpdateWholeWithdrawLimitEventFilter = TypedEventFilter<UpdateWholeWithdrawLimitEvent>

export interface ILPToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ILPTokenInterface

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
    collectUntitledAssets(receiver: string, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

    decreaseTotalAssets(amount: BigNumberish, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

    deposit(
      assets: BigNumberish,
      user: string,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>

    increaseTotalAssets(amount: BigNumberish, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

    lockedBalanceOf(user: string, overrides?: CallOverrides): Promise<[BigNumber]>

    maximumVaultBalance(overrides?: CallOverrides): Promise<[BigNumber]>

    releaseTime(user: string, overrides?: CallOverrides): Promise<[BigNumber]>

    setMaximumVaultBalance(
      maxVaultBalance: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>

    setMinimumAssetToShareRatio(
      ratio: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>

    setWholeWithdrawLimit(limit: BigNumberish, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

    untitledAssets(overrides?: CallOverrides): Promise<[BigNumber]>

    vault(overrides?: CallOverrides): Promise<[string]>

    wholeWithdrawLimit(overrides?: CallOverrides): Promise<[BigNumber]>
  }

  collectUntitledAssets(receiver: string, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

  decreaseTotalAssets(amount: BigNumberish, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

  deposit(
    assets: BigNumberish,
    user: string,
    receiver: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>

  increaseTotalAssets(amount: BigNumberish, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

  lockedBalanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>

  maximumVaultBalance(overrides?: CallOverrides): Promise<BigNumber>

  releaseTime(user: string, overrides?: CallOverrides): Promise<BigNumber>

  setMaximumVaultBalance(
    maxVaultBalance: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>

  setMinimumAssetToShareRatio(
    ratio: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>

  setWholeWithdrawLimit(limit: BigNumberish, overrides?: Overrides & { from?: string }): Promise<ContractTransaction>

  untitledAssets(overrides?: CallOverrides): Promise<BigNumber>

  vault(overrides?: CallOverrides): Promise<string>

  wholeWithdrawLimit(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    collectUntitledAssets(receiver: string, overrides?: CallOverrides): Promise<BigNumber>

    decreaseTotalAssets(amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    deposit(assets: BigNumberish, user: string, receiver: string, overrides?: CallOverrides): Promise<BigNumber>

    increaseTotalAssets(amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    lockedBalanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>

    maximumVaultBalance(overrides?: CallOverrides): Promise<BigNumber>

    releaseTime(user: string, overrides?: CallOverrides): Promise<BigNumber>

    setMaximumVaultBalance(maxVaultBalance: BigNumberish, overrides?: CallOverrides): Promise<void>

    setMinimumAssetToShareRatio(ratio: BigNumberish, overrides?: CallOverrides): Promise<void>

    setWholeWithdrawLimit(limit: BigNumberish, overrides?: CallOverrides): Promise<void>

    untitledAssets(overrides?: CallOverrides): Promise<BigNumber>

    vault(overrides?: CallOverrides): Promise<string>

    wholeWithdrawLimit(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {
    'Claim(address,uint256)'(user?: string | null, amount?: null): ClaimEventFilter
    Claim(user?: string | null, amount?: null): ClaimEventFilter

    'Collect(address,uint256)'(receiver?: string | null, amount?: null): CollectEventFilter
    Collect(receiver?: string | null, amount?: null): CollectEventFilter

    'Initialize(address,uint256)'(vault?: string | null, maxVaultBalance?: null): InitializeEventFilter
    Initialize(vault?: string | null, maxVaultBalance?: null): InitializeEventFilter

    'UpdateMaximumVaultBalance(uint256)'(maxVaultBalance?: null): UpdateMaximumVaultBalanceEventFilter
    UpdateMaximumVaultBalance(maxVaultBalance?: null): UpdateMaximumVaultBalanceEventFilter

    'UpdateMinimumAssetToShareRatio(uint256)'(ratio?: null): UpdateMinimumAssetToShareRatioEventFilter
    UpdateMinimumAssetToShareRatio(ratio?: null): UpdateMinimumAssetToShareRatioEventFilter

    'UpdateTotalAssets(uint256)'(amount?: null): UpdateTotalAssetsEventFilter
    UpdateTotalAssets(amount?: null): UpdateTotalAssetsEventFilter

    'UpdateWholeWithdrawLimit(uint256)'(limit?: null): UpdateWholeWithdrawLimitEventFilter
    UpdateWholeWithdrawLimit(limit?: null): UpdateWholeWithdrawLimitEventFilter
  }

  estimateGas: {
    collectUntitledAssets(receiver: string, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    decreaseTotalAssets(amount: BigNumberish, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    deposit(
      assets: BigNumberish,
      user: string,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>

    increaseTotalAssets(amount: BigNumberish, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    lockedBalanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>

    maximumVaultBalance(overrides?: CallOverrides): Promise<BigNumber>

    releaseTime(user: string, overrides?: CallOverrides): Promise<BigNumber>

    setMaximumVaultBalance(maxVaultBalance: BigNumberish, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    setMinimumAssetToShareRatio(ratio: BigNumberish, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    setWholeWithdrawLimit(limit: BigNumberish, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    untitledAssets(overrides?: CallOverrides): Promise<BigNumber>

    vault(overrides?: CallOverrides): Promise<BigNumber>

    wholeWithdrawLimit(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    collectUntitledAssets(receiver: string, overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>

    decreaseTotalAssets(amount: BigNumberish, overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>

    deposit(
      assets: BigNumberish,
      user: string,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>

    increaseTotalAssets(amount: BigNumberish, overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>

    lockedBalanceOf(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    maximumVaultBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>

    releaseTime(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    setMaximumVaultBalance(
      maxVaultBalance: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>

    setMinimumAssetToShareRatio(
      ratio: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>

    setWholeWithdrawLimit(limit: BigNumberish, overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>

    untitledAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>

    wholeWithdrawLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
