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
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'

import type { OnEvent, TypedEvent, TypedEventFilter, TypedListener } from '../../common'

export declare namespace BlackScholes {
  export type BlackScholesInputsStruct = {
    timeToExpirySec: BigNumberish
    volatilityDecimal: BigNumberish
    spotDecimal: BigNumberish
    strikePriceDecimal: BigNumberish
    rateDecimal: BigNumberish
  }

  export type BlackScholesInputsStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    timeToExpirySec: BigNumber
    volatilityDecimal: BigNumber
    spotDecimal: BigNumber
    strikePriceDecimal: BigNumber
    rateDecimal: BigNumber
  }

  export type PricesDeltaStdVegaStruct = {
    callPrice: BigNumberish
    putPrice: BigNumberish
    callDelta: BigNumberish
    putDelta: BigNumberish
    vega: BigNumberish
    stdVega: BigNumberish
  }

  export type PricesDeltaStdVegaStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    callPrice: BigNumber
    putPrice: BigNumber
    callDelta: BigNumber
    putDelta: BigNumber
    vega: BigNumber
    stdVega: BigNumber
  }
}

export interface BlackScholesInterface extends utils.Interface {
  functions: {
    '_stdNormalCDF(int256)': FunctionFragment
    'delta((uint256,uint256,uint256,uint256,int256))': FunctionFragment
    'optionPrices((uint256,uint256,uint256,uint256,int256))': FunctionFragment
    'pricesDeltaStdVega((uint256,uint256,uint256,uint256,int256))': FunctionFragment
    'vega((uint256,uint256,uint256,uint256,int256))': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic: '_stdNormalCDF' | 'delta' | 'optionPrices' | 'pricesDeltaStdVega' | 'vega'
  ): FunctionFragment

  encodeFunctionData(functionFragment: '_stdNormalCDF', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'delta', values: [BlackScholes.BlackScholesInputsStruct]): string
  encodeFunctionData(functionFragment: 'optionPrices', values: [BlackScholes.BlackScholesInputsStruct]): string
  encodeFunctionData(functionFragment: 'pricesDeltaStdVega', values: [BlackScholes.BlackScholesInputsStruct]): string
  encodeFunctionData(functionFragment: 'vega', values: [BlackScholes.BlackScholesInputsStruct]): string

  decodeFunctionResult(functionFragment: '_stdNormalCDF', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'delta', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'optionPrices', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'pricesDeltaStdVega', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'vega', data: BytesLike): Result

  events: {}
}

export interface BlackScholes extends BaseContract {
  contractName: 'BlackScholes'

  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: BlackScholesInterface

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
    _stdNormalCDF(x: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>

    delta(
      bsInput: BlackScholes.BlackScholesInputsStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        callDeltaDecimal: BigNumber
        putDeltaDecimal: BigNumber
      }
    >

    optionPrices(
      bsInput: BlackScholes.BlackScholesInputsStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { call: BigNumber; put: BigNumber }>

    pricesDeltaStdVega(
      bsInput: BlackScholes.BlackScholesInputsStruct,
      overrides?: CallOverrides
    ): Promise<[BlackScholes.PricesDeltaStdVegaStructOutput]>

    vega(
      bsInput: BlackScholes.BlackScholesInputsStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { vegaDecimal: BigNumber }>
  }

  _stdNormalCDF(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  delta(
    bsInput: BlackScholes.BlackScholesInputsStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      callDeltaDecimal: BigNumber
      putDeltaDecimal: BigNumber
    }
  >

  optionPrices(
    bsInput: BlackScholes.BlackScholesInputsStruct,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { call: BigNumber; put: BigNumber }>

  pricesDeltaStdVega(
    bsInput: BlackScholes.BlackScholesInputsStruct,
    overrides?: CallOverrides
  ): Promise<BlackScholes.PricesDeltaStdVegaStructOutput>

  vega(bsInput: BlackScholes.BlackScholesInputsStruct, overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    _stdNormalCDF(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    delta(
      bsInput: BlackScholes.BlackScholesInputsStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        callDeltaDecimal: BigNumber
        putDeltaDecimal: BigNumber
      }
    >

    optionPrices(
      bsInput: BlackScholes.BlackScholesInputsStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { call: BigNumber; put: BigNumber }>

    pricesDeltaStdVega(
      bsInput: BlackScholes.BlackScholesInputsStruct,
      overrides?: CallOverrides
    ): Promise<BlackScholes.PricesDeltaStdVegaStructOutput>

    vega(bsInput: BlackScholes.BlackScholesInputsStruct, overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    _stdNormalCDF(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    delta(bsInput: BlackScholes.BlackScholesInputsStruct, overrides?: CallOverrides): Promise<BigNumber>

    optionPrices(bsInput: BlackScholes.BlackScholesInputsStruct, overrides?: CallOverrides): Promise<BigNumber>

    pricesDeltaStdVega(bsInput: BlackScholes.BlackScholesInputsStruct, overrides?: CallOverrides): Promise<BigNumber>

    vega(bsInput: BlackScholes.BlackScholesInputsStruct, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    _stdNormalCDF(x: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    delta(bsInput: BlackScholes.BlackScholesInputsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>

    optionPrices(
      bsInput: BlackScholes.BlackScholesInputsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    pricesDeltaStdVega(
      bsInput: BlackScholes.BlackScholesInputsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    vega(bsInput: BlackScholes.BlackScholesInputsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
