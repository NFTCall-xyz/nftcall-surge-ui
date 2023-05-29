/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPremium,
  IPremiumInterface,
} from "../../../contracts/interfaces/IPremium";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "spotPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vol",
        type: "uint256",
      },
    ],
    name: "getCallPremium",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "spotPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vol",
        type: "uint256",
      },
    ],
    name: "getPutPremium",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "precision",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class IPremium__factory {
  static readonly abi = _abi;
  static createInterface(): IPremiumInterface {
    return new utils.Interface(_abi) as IPremiumInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPremium {
    return new Contract(address, _abi, signerOrProvider) as IPremium;
  }
}
