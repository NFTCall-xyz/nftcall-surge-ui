/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IPricerInterface extends utils.Interface {
  functions: {
    "getAdjustedVol(address,uint8,uint256)": FunctionFragment;
    "getPremium(uint8,uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getAdjustedVol" | "getPremium"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAdjustedVol",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPremium",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAdjustedVol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPremium", data: BytesLike): Result;

  events: {};
}

export interface IPricer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPricerInterface;

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
    getAdjustedVol(
      asset: PromiseOrValue<string>,
      ot: PromiseOrValue<BigNumberish>,
      K: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { adjustedVol: BigNumber }>;

    getPremium(
      optionType: PromiseOrValue<BigNumberish>,
      S: PromiseOrValue<BigNumberish>,
      K: PromiseOrValue<BigNumberish>,
      vol: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { premium: BigNumber }>;
  };

  getAdjustedVol(
    asset: PromiseOrValue<string>,
    ot: PromiseOrValue<BigNumberish>,
    K: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPremium(
    optionType: PromiseOrValue<BigNumberish>,
    S: PromiseOrValue<BigNumberish>,
    K: PromiseOrValue<BigNumberish>,
    vol: PromiseOrValue<BigNumberish>,
    duration: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getAdjustedVol(
      asset: PromiseOrValue<string>,
      ot: PromiseOrValue<BigNumberish>,
      K: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPremium(
      optionType: PromiseOrValue<BigNumberish>,
      S: PromiseOrValue<BigNumberish>,
      K: PromiseOrValue<BigNumberish>,
      vol: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getAdjustedVol(
      asset: PromiseOrValue<string>,
      ot: PromiseOrValue<BigNumberish>,
      K: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPremium(
      optionType: PromiseOrValue<BigNumberish>,
      S: PromiseOrValue<BigNumberish>,
      K: PromiseOrValue<BigNumberish>,
      vol: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAdjustedVol(
      asset: PromiseOrValue<string>,
      ot: PromiseOrValue<BigNumberish>,
      K: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPremium(
      optionType: PromiseOrValue<BigNumberish>,
      S: PromiseOrValue<BigNumberish>,
      K: PromiseOrValue<BigNumberish>,
      vol: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
