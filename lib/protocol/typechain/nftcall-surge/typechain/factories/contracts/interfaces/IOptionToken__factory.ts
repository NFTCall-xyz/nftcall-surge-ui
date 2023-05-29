/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'

import type { IOptionToken, IOptionTokenInterface } from '../../../contracts/interfaces/IOptionToken'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        internalType: 'enum PositionState',
        name: 'state',
        type: 'uint8',
      },
    ],
    name: 'IsNotActive',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        internalType: 'enum PositionState',
        name: 'state',
        type: 'uint8',
      },
    ],
    name: 'IsNotPending',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'NonexistentPosition',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
    ],
    name: 'OnlyVault',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
    ],
    name: 'ZeroAmount',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
    ],
    name: 'ZeroVaultAddress',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256',
      },
    ],
    name: 'ActivePosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'ClosePosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'ForceClosePosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
    ],
    name: 'Initialize',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum OptionType',
        name: 'optionType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'strikeId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'OpenPosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'baseURI',
        type: 'string',
      },
    ],
    name: 'UpdateBaseURI',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256',
      },
    ],
    name: 'activePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'closePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'forceClosePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'lockedValue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'enum OptionType',
        name: 'optionType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'strikeId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'openPosition',
    outputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'optionPosition',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'strikeId',
            type: 'uint256',
          },
          {
            internalType: 'enum PositionState',
            name: 'state',
            type: 'uint8',
          },
          {
            internalType: 'enum OptionType',
            name: 'optionType',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'premium',
            type: 'uint256',
          },
        ],
        internalType: 'struct OptionPosition',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'optionPositionState',
    outputs: [
      {
        internalType: 'enum PositionState',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'baseURI',
        type: 'string',
      },
    ],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalValue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vault',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const

export class IOptionToken__factory {
  static readonly abi = _abi
  static createInterface(): IOptionTokenInterface {
    return new utils.Interface(_abi) as IOptionTokenInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IOptionToken {
    return new Contract(address, _abi, signerOrProvider) as IOptionToken
  }
}
