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

export type OptionPositionStruct = {
  strikeId: PromiseOrValue<BigNumberish>;
  state: PromiseOrValue<BigNumberish>;
  optionType: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
  premium: PromiseOrValue<BigNumberish>;
};

export type OptionPositionStructOutput = [
  BigNumber,
  number,
  number,
  BigNumber,
  BigNumber
] & {
  strikeId: BigNumber;
  state: number;
  optionType: number;
  amount: BigNumber;
  premium: BigNumber;
};

export interface IOptionTokenInterface extends utils.Interface {
  functions: {
    "activePosition(uint256,uint256)": FunctionFragment;
    "closePosition(uint256)": FunctionFragment;
    "forceClosePosition(uint256)": FunctionFragment;
    "lockedValue(uint256)": FunctionFragment;
    "openPosition(address,uint8,uint256,uint256)": FunctionFragment;
    "optionPosition(uint256)": FunctionFragment;
    "optionPositionState(uint256)": FunctionFragment;
    "setBaseURI(string)": FunctionFragment;
    "totalValue()": FunctionFragment;
    "vault()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activePosition"
      | "closePosition"
      | "forceClosePosition"
      | "lockedValue"
      | "openPosition"
      | "optionPosition"
      | "optionPositionState"
      | "setBaseURI"
      | "totalValue"
      | "vault"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activePosition",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "forceClosePosition",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockedValue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "optionPosition",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "optionPositionState",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseURI",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalValue",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "activePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceClosePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "optionPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "optionPositionState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;

  events: {
    "ActivePosition(uint256,uint256)": EventFragment;
    "ClosePosition(uint256)": EventFragment;
    "ForceClosePosition(uint256)": EventFragment;
    "Initialize(address)": EventFragment;
    "OpenPosition(address,uint256,uint8,uint256,uint256)": EventFragment;
    "UpdateBaseURI(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ActivePosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClosePosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ForceClosePosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OpenPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateBaseURI"): EventFragment;
}

export interface ActivePositionEventObject {
  positionId: BigNumber;
  premium: BigNumber;
}
export type ActivePositionEvent = TypedEvent<
  [BigNumber, BigNumber],
  ActivePositionEventObject
>;

export type ActivePositionEventFilter = TypedEventFilter<ActivePositionEvent>;

export interface ClosePositionEventObject {
  positionId: BigNumber;
}
export type ClosePositionEvent = TypedEvent<
  [BigNumber],
  ClosePositionEventObject
>;

export type ClosePositionEventFilter = TypedEventFilter<ClosePositionEvent>;

export interface ForceClosePositionEventObject {
  positionId: BigNumber;
}
export type ForceClosePositionEvent = TypedEvent<
  [BigNumber],
  ForceClosePositionEventObject
>;

export type ForceClosePositionEventFilter =
  TypedEventFilter<ForceClosePositionEvent>;

export interface InitializeEventObject {
  vault: string;
}
export type InitializeEvent = TypedEvent<[string], InitializeEventObject>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export interface OpenPositionEventObject {
  to: string;
  positionId: BigNumber;
  optionType: number;
  strikeId: BigNumber;
  amount: BigNumber;
}
export type OpenPositionEvent = TypedEvent<
  [string, BigNumber, number, BigNumber, BigNumber],
  OpenPositionEventObject
>;

export type OpenPositionEventFilter = TypedEventFilter<OpenPositionEvent>;

export interface UpdateBaseURIEventObject {
  baseURI: string;
}
export type UpdateBaseURIEvent = TypedEvent<[string], UpdateBaseURIEventObject>;

export type UpdateBaseURIEventFilter = TypedEventFilter<UpdateBaseURIEvent>;

export interface IOptionToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOptionTokenInterface;

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
    activePosition(
      positionId: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    closePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    forceClosePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lockedValue(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    openPosition(
      to: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      strikeId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    optionPosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[OptionPositionStructOutput]>;

    optionPositionState(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    setBaseURI(
      baseURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    vault(overrides?: CallOverrides): Promise<[string]>;
  };

  activePosition(
    positionId: PromiseOrValue<BigNumberish>,
    premium: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  closePosition(
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  forceClosePosition(
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lockedValue(
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  openPosition(
    to: PromiseOrValue<string>,
    optionType: PromiseOrValue<BigNumberish>,
    strikeId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  optionPosition(
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<OptionPositionStructOutput>;

  optionPositionState(
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  setBaseURI(
    baseURI: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalValue(overrides?: CallOverrides): Promise<BigNumber>;

  vault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    activePosition(
      positionId: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    closePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    forceClosePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    lockedValue(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openPosition(
      to: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      strikeId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    optionPosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<OptionPositionStructOutput>;

    optionPositionState(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    setBaseURI(
      baseURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalValue(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ActivePosition(uint256,uint256)"(
      positionId?: PromiseOrValue<BigNumberish> | null,
      premium?: null
    ): ActivePositionEventFilter;
    ActivePosition(
      positionId?: PromiseOrValue<BigNumberish> | null,
      premium?: null
    ): ActivePositionEventFilter;

    "ClosePosition(uint256)"(
      positionId?: PromiseOrValue<BigNumberish> | null
    ): ClosePositionEventFilter;
    ClosePosition(
      positionId?: PromiseOrValue<BigNumberish> | null
    ): ClosePositionEventFilter;

    "ForceClosePosition(uint256)"(
      positionId?: PromiseOrValue<BigNumberish> | null
    ): ForceClosePositionEventFilter;
    ForceClosePosition(
      positionId?: PromiseOrValue<BigNumberish> | null
    ): ForceClosePositionEventFilter;

    "Initialize(address)"(
      vault?: PromiseOrValue<string> | null
    ): InitializeEventFilter;
    Initialize(vault?: PromiseOrValue<string> | null): InitializeEventFilter;

    "OpenPosition(address,uint256,uint8,uint256,uint256)"(
      to?: PromiseOrValue<string> | null,
      positionId?: PromiseOrValue<BigNumberish> | null,
      optionType?: null,
      strikeId?: null,
      amount?: null
    ): OpenPositionEventFilter;
    OpenPosition(
      to?: PromiseOrValue<string> | null,
      positionId?: PromiseOrValue<BigNumberish> | null,
      optionType?: null,
      strikeId?: null,
      amount?: null
    ): OpenPositionEventFilter;

    "UpdateBaseURI(string)"(baseURI?: null): UpdateBaseURIEventFilter;
    UpdateBaseURI(baseURI?: null): UpdateBaseURIEventFilter;
  };

  estimateGas: {
    activePosition(
      positionId: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    closePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    forceClosePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lockedValue(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openPosition(
      to: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      strikeId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    optionPosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    optionPositionState(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBaseURI(
      baseURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalValue(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    activePosition(
      positionId: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    closePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    forceClosePosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lockedValue(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openPosition(
      to: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      strikeId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    optionPosition(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    optionPositionState(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBaseURI(
      baseURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}