/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
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
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type StrikeStruct = {
  spotPrice: PromiseOrValue<BigNumberish>;
  strikePrice: PromiseOrValue<BigNumberish>;
  duration: PromiseOrValue<BigNumberish>;
  expiry: PromiseOrValue<BigNumberish>;
};

export type StrikeStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  spotPrice: BigNumber;
  strikePrice: BigNumber;
  duration: BigNumber;
  expiry: BigNumber;
};

export declare namespace IVault {
  export type CollectionConfigurationStruct = {
    paused: PromiseOrValue<boolean>;
    activated: PromiseOrValue<boolean>;
    id: PromiseOrValue<BigNumberish>;
    weight: PromiseOrValue<BigNumberish>;
    optionToken: PromiseOrValue<string>;
  };

  export type CollectionConfigurationStructOutput = [
    boolean,
    boolean,
    number,
    number,
    string
  ] & {
    paused: boolean;
    activated: boolean;
    id: number;
    weight: number;
    optionToken: string;
  };
}

export interface VaultInterface extends utils.Interface {
  functions: {
    "MAXIMUM_CALL_STRIKE_PRICE_RATIO()": FunctionFragment;
    "MAXIMUM_DURATION()": FunctionFragment;
    "MAXIMUM_LOCK_RATIO()": FunctionFragment;
    "MAXIMUM_PUT_STRIKE_PRICE_RATIO()": FunctionFragment;
    "MINIMUM_CALL_STRIKE_PRICE_RATIO()": FunctionFragment;
    "MINIMUM_DURATION()": FunctionFragment;
    "MINIMUM_PUT_STRIKE_PRICE_RATIO()": FunctionFragment;
    "PREMIUM_UPSCALE_RATIO()": FunctionFragment;
    "activePosition(address,uint256)": FunctionFragment;
    "addMarket(address,uint32,address)": FunctionFragment;
    "claimLPToken(address)": FunctionFragment;
    "closePosition(address,address,uint256)": FunctionFragment;
    "deposit(uint256,address)": FunctionFragment;
    "forceClosePendingPosition(address,uint256)": FunctionFragment;
    "marketConfiguration(address)": FunctionFragment;
    "markets()": FunctionFragment;
    "maximumOptionAmount(address,uint8)": FunctionFragment;
    "openPosition(address,address,uint8,uint256,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reserve()": FunctionFragment;
    "strike(uint256)": FunctionFragment;
    "totalAssets()": FunctionFragment;
    "totalLockedAssets()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unrealizedPNL()": FunctionFragment;
    "unrealizedPremium()": FunctionFragment;
    "updateUnrealizedPNL()": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAXIMUM_CALL_STRIKE_PRICE_RATIO"
      | "MAXIMUM_DURATION"
      | "MAXIMUM_LOCK_RATIO"
      | "MAXIMUM_PUT_STRIKE_PRICE_RATIO"
      | "MINIMUM_CALL_STRIKE_PRICE_RATIO"
      | "MINIMUM_DURATION"
      | "MINIMUM_PUT_STRIKE_PRICE_RATIO"
      | "PREMIUM_UPSCALE_RATIO"
      | "activePosition"
      | "addMarket"
      | "claimLPToken"
      | "closePosition"
      | "deposit"
      | "forceClosePendingPosition"
      | "marketConfiguration"
      | "markets"
      | "maximumOptionAmount"
      | "openPosition"
      | "owner"
      | "paused"
      | "renounceOwnership"
      | "reserve"
      | "strike"
      | "totalAssets"
      | "totalLockedAssets"
      | "transferOwnership"
      | "unrealizedPNL"
      | "unrealizedPremium"
      | "updateUnrealizedPNL"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAXIMUM_CALL_STRIKE_PRICE_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAXIMUM_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAXIMUM_LOCK_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAXIMUM_PUT_STRIKE_PRICE_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_CALL_STRIKE_PRICE_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_PUT_STRIKE_PRICE_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PREMIUM_UPSCALE_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activePosition",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addMarket",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimLPToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "forceClosePendingPosition",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "marketConfiguration",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "markets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maximumOptionAmount",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "reserve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "strike",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalLockedAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unrealizedPNL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unrealizedPremium",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateUnrealizedPNL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAXIMUM_CALL_STRIKE_PRICE_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAXIMUM_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAXIMUM_LOCK_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAXIMUM_PUT_STRIKE_PRICE_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_CALL_STRIKE_PRICE_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_PUT_STRIKE_PRICE_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PREMIUM_UPSCALE_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addMarket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimLPToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "forceClosePendingPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maximumOptionAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reserve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "strike", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalLockedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unrealizedPNL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unrealizedPremium",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateUnrealizedPNL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "CreateMarket(address,uint32,address)": EventFragment;
    "CreateStrike(uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "DestoryStrike(uint256)": EventFragment;
    "OpenPosition(address,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "ReceivePremium(address,uint256,uint256)": EventFragment;
    "SendRevenue(address,uint256,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateMarket"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateStrike"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DestoryStrike"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OpenPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceivePremium"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendRevenue"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface CreateMarketEventObject {
  collection: string;
  weight: number;
  optionToken: string;
}
export type CreateMarketEvent = TypedEvent<
  [string, number, string],
  CreateMarketEventObject
>;

export type CreateMarketEventFilter = TypedEventFilter<CreateMarketEvent>;

export interface CreateStrikeEventObject {
  strikeId: BigNumber;
  duration: BigNumber;
  expiration: BigNumber;
  spotPrice: BigNumber;
  strikePrice: BigNumber;
}
export type CreateStrikeEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  CreateStrikeEventObject
>;

export type CreateStrikeEventFilter = TypedEventFilter<CreateStrikeEvent>;

export interface DestoryStrikeEventObject {
  strikeId: BigNumber;
}
export type DestoryStrikeEvent = TypedEvent<
  [BigNumber],
  DestoryStrikeEventObject
>;

export type DestoryStrikeEventFilter = TypedEventFilter<DestoryStrikeEvent>;

export interface OpenPositionEventObject {
  collection: string;
  strikeId: BigNumber;
  positionId: BigNumber;
  estimatedPremium: BigNumber;
}
export type OpenPositionEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  OpenPositionEventObject
>;

export type OpenPositionEventFilter = TypedEventFilter<OpenPositionEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface ReceivePremiumEventObject {
  user: string;
  amountToReserve: BigNumber;
  amountToLiquidityPool: BigNumber;
}
export type ReceivePremiumEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  ReceivePremiumEventObject
>;

export type ReceivePremiumEventFilter = TypedEventFilter<ReceivePremiumEvent>;

export interface SendRevenueEventObject {
  receiver: string;
  amount: BigNumber;
  fee: BigNumber;
}
export type SendRevenueEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  SendRevenueEventObject
>;

export type SendRevenueEventFilter = TypedEventFilter<SendRevenueEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface Vault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MAXIMUM_CALL_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    MAXIMUM_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAXIMUM_LOCK_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAXIMUM_PUT_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    MINIMUM_CALL_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    MINIMUM_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    MINIMUM_PUT_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    PREMIUM_UPSCALE_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    activePosition(
      collection: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addMarket(
      collection: PromiseOrValue<string>,
      weight: PromiseOrValue<BigNumberish>,
      optionToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimLPToken(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    closePosition(
      collection: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    forceClosePendingPosition(
      collection: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    marketConfiguration(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IVault.CollectionConfigurationStructOutput]>;

    markets(overrides?: CallOverrides): Promise<[string[]]>;

    maximumOptionAmount(
      collection: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    openPosition(
      collection: PromiseOrValue<string>,
      onBehalfOf: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reserve(overrides?: CallOverrides): Promise<[string]>;

    strike(
      strikeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[StrikeStructOutput] & { s: StrikeStructOutput }>;

    totalAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalLockedAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unrealizedPNL(overrides?: CallOverrides): Promise<[BigNumber]>;

    unrealizedPremium(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateUnrealizedPNL(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MAXIMUM_CALL_STRIKE_PRICE_RATIO(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  MAXIMUM_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  MAXIMUM_LOCK_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  MAXIMUM_PUT_STRIKE_PRICE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  MINIMUM_CALL_STRIKE_PRICE_RATIO(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  MINIMUM_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  MINIMUM_PUT_STRIKE_PRICE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  PREMIUM_UPSCALE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  activePosition(
    collection: PromiseOrValue<string>,
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addMarket(
    collection: PromiseOrValue<string>,
    weight: PromiseOrValue<BigNumberish>,
    optionToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimLPToken(
    user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  closePosition(
    collection: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    amount: PromiseOrValue<BigNumberish>,
    onBehalfOf: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  forceClosePendingPosition(
    collection: PromiseOrValue<string>,
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  marketConfiguration(
    collection: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IVault.CollectionConfigurationStructOutput>;

  markets(overrides?: CallOverrides): Promise<string[]>;

  maximumOptionAmount(
    collection: PromiseOrValue<string>,
    optionType: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  openPosition(
    collection: PromiseOrValue<string>,
    onBehalfOf: PromiseOrValue<string>,
    optionType: PromiseOrValue<BigNumberish>,
    strikePrice: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reserve(overrides?: CallOverrides): Promise<string>;

  strike(
    strikeId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<StrikeStructOutput>;

  totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

  totalLockedAssets(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unrealizedPNL(overrides?: CallOverrides): Promise<BigNumber>;

  unrealizedPremium(overrides?: CallOverrides): Promise<BigNumber>;

  updateUnrealizedPNL(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAXIMUM_CALL_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAXIMUM_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_LOCK_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_PUT_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MINIMUM_CALL_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MINIMUM_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_PUT_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    PREMIUM_UPSCALE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    activePosition(
      collection: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addMarket(
      collection: PromiseOrValue<string>,
      weight: PromiseOrValue<BigNumberish>,
      optionToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    claimLPToken(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    closePosition(
      collection: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    forceClosePendingPosition(
      collection: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    marketConfiguration(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IVault.CollectionConfigurationStructOutput>;

    markets(overrides?: CallOverrides): Promise<string[]>;

    maximumOptionAmount(
      collection: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openPosition(
      collection: PromiseOrValue<string>,
      onBehalfOf: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reserve(overrides?: CallOverrides): Promise<string>;

    strike(
      strikeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<StrikeStructOutput>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalLockedAssets(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unrealizedPNL(overrides?: CallOverrides): Promise<BigNumber>;

    unrealizedPremium(overrides?: CallOverrides): Promise<BigNumber>;

    updateUnrealizedPNL(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "CreateMarket(address,uint32,address)"(
      collection?: PromiseOrValue<string> | null,
      weight?: null,
      optionToken?: null
    ): CreateMarketEventFilter;
    CreateMarket(
      collection?: PromiseOrValue<string> | null,
      weight?: null,
      optionToken?: null
    ): CreateMarketEventFilter;

    "CreateStrike(uint256,uint256,uint256,uint256,uint256)"(
      strikeId?: PromiseOrValue<BigNumberish> | null,
      duration?: null,
      expiration?: null,
      spotPrice?: null,
      strikePrice?: null
    ): CreateStrikeEventFilter;
    CreateStrike(
      strikeId?: PromiseOrValue<BigNumberish> | null,
      duration?: null,
      expiration?: null,
      spotPrice?: null,
      strikePrice?: null
    ): CreateStrikeEventFilter;

    "DestoryStrike(uint256)"(
      strikeId?: PromiseOrValue<BigNumberish> | null
    ): DestoryStrikeEventFilter;
    DestoryStrike(
      strikeId?: PromiseOrValue<BigNumberish> | null
    ): DestoryStrikeEventFilter;

    "OpenPosition(address,uint256,uint256,uint256)"(
      collection?: PromiseOrValue<string> | null,
      strikeId?: PromiseOrValue<BigNumberish> | null,
      positionId?: PromiseOrValue<BigNumberish> | null,
      estimatedPremium?: null
    ): OpenPositionEventFilter;
    OpenPosition(
      collection?: PromiseOrValue<string> | null,
      strikeId?: PromiseOrValue<BigNumberish> | null,
      positionId?: PromiseOrValue<BigNumberish> | null,
      estimatedPremium?: null
    ): OpenPositionEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "ReceivePremium(address,uint256,uint256)"(
      user?: PromiseOrValue<string> | null,
      amountToReserve?: null,
      amountToLiquidityPool?: null
    ): ReceivePremiumEventFilter;
    ReceivePremium(
      user?: PromiseOrValue<string> | null,
      amountToReserve?: null,
      amountToLiquidityPool?: null
    ): ReceivePremiumEventFilter;

    "SendRevenue(address,uint256,uint256)"(
      receiver?: PromiseOrValue<string> | null,
      amount?: null,
      fee?: null
    ): SendRevenueEventFilter;
    SendRevenue(
      receiver?: PromiseOrValue<string> | null,
      amount?: null,
      fee?: null
    ): SendRevenueEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    MAXIMUM_CALL_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAXIMUM_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_LOCK_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_PUT_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MINIMUM_CALL_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MINIMUM_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_PUT_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    PREMIUM_UPSCALE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    activePosition(
      collection: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addMarket(
      collection: PromiseOrValue<string>,
      weight: PromiseOrValue<BigNumberish>,
      optionToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimLPToken(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    closePosition(
      collection: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    forceClosePendingPosition(
      collection: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    marketConfiguration(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    markets(overrides?: CallOverrides): Promise<BigNumber>;

    maximumOptionAmount(
      collection: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openPosition(
      collection: PromiseOrValue<string>,
      onBehalfOf: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reserve(overrides?: CallOverrides): Promise<BigNumber>;

    strike(
      strikeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalLockedAssets(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unrealizedPNL(overrides?: CallOverrides): Promise<BigNumber>;

    unrealizedPremium(overrides?: CallOverrides): Promise<BigNumber>;

    updateUnrealizedPNL(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAXIMUM_CALL_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAXIMUM_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAXIMUM_LOCK_RATIO(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAXIMUM_PUT_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MINIMUM_CALL_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MINIMUM_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINIMUM_PUT_STRIKE_PRICE_RATIO(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PREMIUM_UPSCALE_RATIO(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    activePosition(
      collection: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addMarket(
      collection: PromiseOrValue<string>,
      weight: PromiseOrValue<BigNumberish>,
      optionToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimLPToken(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    closePosition(
      collection: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    forceClosePendingPosition(
      collection: PromiseOrValue<string>,
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    marketConfiguration(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    markets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maximumOptionAmount(
      collection: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openPosition(
      collection: PromiseOrValue<string>,
      onBehalfOf: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      strikePrice: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    strike(
      strikeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalLockedAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unrealizedPNL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unrealizedPremium(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateUnrealizedPNL(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
