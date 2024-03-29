/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers'

import type { OnEvent, TypedEvent, TypedEventFilter, TypedListener } from '../../common'

export interface IOracleInterface extends utils.Interface {
  functions: {
    'getAssetPrice(address)': FunctionFragment
    'getAssetPriceAndVol(address)': FunctionFragment
    'getAssets(address[])': FunctionFragment
  }

  getFunction(nameOrSignatureOrTopic: 'getAssetPrice' | 'getAssetPriceAndVol' | 'getAssets'): FunctionFragment

  encodeFunctionData(functionFragment: 'getAssetPrice', values: [string]): string
  encodeFunctionData(functionFragment: 'getAssetPriceAndVol', values: [string]): string
  encodeFunctionData(functionFragment: 'getAssets', values: [string[]]): string

  decodeFunctionResult(functionFragment: 'getAssetPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAssetPriceAndVol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAssets', data: BytesLike): Result

  events: {}
}

export interface IOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: IOracleInterface

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
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>

    getAssetPriceAndVol(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { price: BigNumber; vol: BigNumber }>

    getAssets(
      assets: string[],
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber][]] & { prices: [BigNumber, BigNumber][] }>
  }

  getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>

  getAssetPriceAndVol(
    asset: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { price: BigNumber; vol: BigNumber }>

  getAssets(assets: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber][]>

  callStatic: {
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>

    getAssetPriceAndVol(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { price: BigNumber; vol: BigNumber }>

    getAssets(assets: string[], overrides?: CallOverrides): Promise<[BigNumber, BigNumber][]>
  }

  filters: {}

  estimateGas: {
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>

    getAssetPriceAndVol(asset: string, overrides?: CallOverrides): Promise<BigNumber>

    getAssets(assets: string[], overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getAssetPriceAndVol(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getAssets(assets: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
