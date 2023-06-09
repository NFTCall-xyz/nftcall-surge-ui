/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'

import type { IAssetRiskCache, IAssetRiskCacheInterface } from '../../../contracts/interfaces/IAssetRiskCache'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getAssetDelta',
    outputs: [
      {
        internalType: 'int256',
        name: 'delta',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getAssetRisk',
    outputs: [
      {
        internalType: 'int256',
        name: 'delta',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'PNL',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'int256',
        name: 'delta',
        type: 'int256',
      },
    ],
    name: 'updateAssetDelta',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'int256',
        name: 'delta',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'PNL',
        type: 'int256',
      },
    ],
    name: 'updateAssetRisk',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

export class IAssetRiskCache__factory {
  static readonly abi = _abi
  static createInterface(): IAssetRiskCacheInterface {
    return new utils.Interface(_abi) as IAssetRiskCacheInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IAssetRiskCache {
    return new Contract(address, _abi, signerOrProvider) as IAssetRiskCache
  }
}
