/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { FunctionFragment, Result } from '@ethersproject/abi'
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

export interface IAssetRiskCacheInterface extends utils.Interface {
  functions: {
    'getAssetDelta(address)': FunctionFragment
    'getAssetRisk(address)': FunctionFragment
    'updateAssetDelta(address,int256)': FunctionFragment
    'updateAssetRisk(address,int256,int256)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic: 'getAssetDelta' | 'getAssetRisk' | 'updateAssetDelta' | 'updateAssetRisk'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'getAssetDelta', values: [string]): string
  encodeFunctionData(functionFragment: 'getAssetRisk', values: [string]): string
  encodeFunctionData(functionFragment: 'updateAssetDelta', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'updateAssetRisk', values: [string, BigNumberish, BigNumberish]): string

  decodeFunctionResult(functionFragment: 'getAssetDelta', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAssetRisk', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateAssetDelta', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateAssetRisk', data: BytesLike): Result

  events: {}
}

export interface IAssetRiskCache extends BaseContract {
  contractName: 'IAssetRiskCache'

  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: IAssetRiskCacheInterface

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
    getAssetDelta(asset: string, overrides?: CallOverrides): Promise<[BigNumber] & { delta: BigNumber }>

    getAssetRisk(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { delta: BigNumber; PNL: BigNumber }>

    updateAssetDelta(
      asset: string,
      delta: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>

    updateAssetRisk(
      asset: string,
      delta: BigNumberish,
      PNL: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>
  }

  getAssetDelta(asset: string, overrides?: CallOverrides): Promise<BigNumber>

  getAssetRisk(
    asset: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { delta: BigNumber; PNL: BigNumber }>

  updateAssetDelta(
    asset: string,
    delta: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>

  updateAssetRisk(
    asset: string,
    delta: BigNumberish,
    PNL: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>

  callStatic: {
    getAssetDelta(asset: string, overrides?: CallOverrides): Promise<BigNumber>

    getAssetRisk(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { delta: BigNumber; PNL: BigNumber }>

    updateAssetDelta(asset: string, delta: BigNumberish, overrides?: CallOverrides): Promise<void>

    updateAssetRisk(asset: string, delta: BigNumberish, PNL: BigNumberish, overrides?: CallOverrides): Promise<void>
  }

  filters: {}

  estimateGas: {
    getAssetDelta(asset: string, overrides?: CallOverrides): Promise<BigNumber>

    getAssetRisk(asset: string, overrides?: CallOverrides): Promise<BigNumber>

    updateAssetDelta(asset: string, delta: BigNumberish, overrides?: Overrides & { from?: string }): Promise<BigNumber>

    updateAssetRisk(
      asset: string,
      delta: BigNumberish,
      PNL: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    getAssetDelta(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getAssetRisk(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    updateAssetDelta(
      asset: string,
      delta: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>

    updateAssetRisk(
      asset: string,
      delta: BigNumberish,
      PNL: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>
  }
}
