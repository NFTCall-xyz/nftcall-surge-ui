/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SimpleInitializable,
  SimpleInitializableInterface,
} from "../../../contracts/libraries/SimpleInitializable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AlreadyInitialised",
    type: "error",
  },
] as const;

export class SimpleInitializable__factory {
  static readonly abi = _abi;
  static createInterface(): SimpleInitializableInterface {
    return new utils.Interface(_abi) as SimpleInitializableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleInitializable {
    return new Contract(address, _abi, signerOrProvider) as SimpleInitializable;
  }
}
