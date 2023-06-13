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

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from '../common'

export type NFTCollectionStruct = {
  price: PromiseOrValue<BigNumberish>
  vol: PromiseOrValue<BigNumberish>
  maximumOptionAmount: PromiseOrValue<BigNumberish>
}

export type NFTCollectionStructOutput = [BigNumber, BigNumber, BigNumber] & {
  price: BigNumber
  vol: BigNumber
  maximumOptionAmount: BigNumber
}

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

export type VaultLPTokenStruct = {
  wETHBalance: PromiseOrValue<BigNumberish>
  wETHAllowance: PromiseOrValue<BigNumberish>
  balance: PromiseOrValue<BigNumberish>
  lockedBalance: PromiseOrValue<BigNumberish>
  maxWithdraw: PromiseOrValue<BigNumberish>
  releaseTime: PromiseOrValue<BigNumberish>
}

export type VaultLPTokenStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
  wETHBalance: BigNumber
  wETHAllowance: BigNumber
  balance: BigNumber
  lockedBalance: BigNumber
  maxWithdraw: BigNumber
  releaseTime: BigNumber
}

export type VaultStruct = {
  lpToken: VaultLPTokenStruct
  wETHAllowance: PromiseOrValue<BigNumberish>
  totalSupply: PromiseOrValue<BigNumberish>
  totalAssets: PromiseOrValue<BigNumberish>
  totalActiveOptions: PromiseOrValue<BigNumberish>
  executionFee: PromiseOrValue<BigNumberish>
  totalLockedAssets: PromiseOrValue<BigNumberish>
  unrealizedPNL: PromiseOrValue<BigNumberish>
  unrealizedPremium: PromiseOrValue<BigNumberish>
}

export type VaultStructOutput = [
  VaultLPTokenStructOutput,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  lpToken: VaultLPTokenStructOutput
  wETHAllowance: BigNumber
  totalSupply: BigNumber
  totalAssets: BigNumber
  totalActiveOptions: BigNumber
  executionFee: BigNumber
  totalLockedAssets: BigNumber
  unrealizedPNL: BigNumber
  unrealizedPremium: BigNumber
}

export interface SurgeUIInterface extends utils.Interface {
  functions: {
    'getNFTCollection(address,address,address)': FunctionFragment
    'getNFTCollections(address[],address,address)': FunctionFragment
    'getPosition(address,uint256)': FunctionFragment
    'getVault(address,address,address)': FunctionFragment
    'getVaultWithUser(address,address,address,address)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic: 'getNFTCollection' | 'getNFTCollections' | 'getPosition' | 'getVault' | 'getVaultWithUser'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'getNFTCollection',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'getNFTCollections',
    values: [PromiseOrValue<string>[], PromiseOrValue<string>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'getPosition',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'getVault',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'getVaultWithUser',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>]
  ): string

  decodeFunctionResult(functionFragment: 'getNFTCollection', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getNFTCollections', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPosition', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getVault', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getVaultWithUser', data: BytesLike): Result

  events: {}
}

export interface SurgeUI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: SurgeUIInterface

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
    getNFTCollection(
      collectionAddress: PromiseOrValue<string>,
      oracleAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[NFTCollectionStructOutput]>

    getNFTCollections(
      collectionAddresses: PromiseOrValue<string>[],
      oracleAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[NFTCollectionStructOutput[]]>

    getPosition(
      optionTokenAddress: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[OptionPositionStructOutput]>

    getVault(
      vaultAddress: PromiseOrValue<string>,
      lpTokenAddress: PromiseOrValue<string>,
      wETHAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[VaultStructOutput]>

    getVaultWithUser(
      vaultAddress: PromiseOrValue<string>,
      lpTokenAddress: PromiseOrValue<string>,
      wETHAddress: PromiseOrValue<string>,
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[VaultStructOutput]>
  }

  getNFTCollection(
    collectionAddress: PromiseOrValue<string>,
    oracleAddress: PromiseOrValue<string>,
    vaultAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<NFTCollectionStructOutput>

  getNFTCollections(
    collectionAddresses: PromiseOrValue<string>[],
    oracleAddress: PromiseOrValue<string>,
    vaultAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<NFTCollectionStructOutput[]>

  getPosition(
    optionTokenAddress: PromiseOrValue<string>,
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<OptionPositionStructOutput>

  getVault(
    vaultAddress: PromiseOrValue<string>,
    lpTokenAddress: PromiseOrValue<string>,
    wETHAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<VaultStructOutput>

  getVaultWithUser(
    vaultAddress: PromiseOrValue<string>,
    lpTokenAddress: PromiseOrValue<string>,
    wETHAddress: PromiseOrValue<string>,
    userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<VaultStructOutput>

  callStatic: {
    getNFTCollection(
      collectionAddress: PromiseOrValue<string>,
      oracleAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<NFTCollectionStructOutput>

    getNFTCollections(
      collectionAddresses: PromiseOrValue<string>[],
      oracleAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<NFTCollectionStructOutput[]>

    getPosition(
      optionTokenAddress: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<OptionPositionStructOutput>

    getVault(
      vaultAddress: PromiseOrValue<string>,
      lpTokenAddress: PromiseOrValue<string>,
      wETHAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<VaultStructOutput>

    getVaultWithUser(
      vaultAddress: PromiseOrValue<string>,
      lpTokenAddress: PromiseOrValue<string>,
      wETHAddress: PromiseOrValue<string>,
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<VaultStructOutput>
  }

  filters: {}

  estimateGas: {
    getNFTCollection(
      collectionAddress: PromiseOrValue<string>,
      oracleAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getNFTCollections(
      collectionAddresses: PromiseOrValue<string>[],
      oracleAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getPosition(
      optionTokenAddress: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getVault(
      vaultAddress: PromiseOrValue<string>,
      lpTokenAddress: PromiseOrValue<string>,
      wETHAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getVaultWithUser(
      vaultAddress: PromiseOrValue<string>,
      lpTokenAddress: PromiseOrValue<string>,
      wETHAddress: PromiseOrValue<string>,
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    getNFTCollection(
      collectionAddress: PromiseOrValue<string>,
      oracleAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getNFTCollections(
      collectionAddresses: PromiseOrValue<string>[],
      oracleAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getPosition(
      optionTokenAddress: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getVault(
      vaultAddress: PromiseOrValue<string>,
      lpTokenAddress: PromiseOrValue<string>,
      wETHAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getVaultWithUser(
      vaultAddress: PromiseOrValue<string>,
      lpTokenAddress: PromiseOrValue<string>,
      wETHAddress: PromiseOrValue<string>,
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
