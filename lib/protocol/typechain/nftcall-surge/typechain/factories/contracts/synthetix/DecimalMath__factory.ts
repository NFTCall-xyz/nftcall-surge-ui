/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, type Overrides, Signer, utils } from 'ethers'

import type { DecimalMath, DecimalMathInterface } from '../../../contracts/synthetix/DecimalMath'

const _abi = [
  {
    inputs: [],
    name: 'PRECISE_UNIT',
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
    name: 'UNIT',
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
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'highPrecisionDecimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'preciseUnit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
] as const

const _bytecode =
  '0x61024761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c8063313ce56714610071578063864029e714610090578063907af6c0146100a65780639d8e2177146100ae578063d5e5e6e6146100b6578063def4419d146100be575b600080fd5b610079601281565b60405160ff90911681526020015b60405180910390f35b6100986100c6565b604051908152602001610087565b6100986100d5565b6100986100e8565b6100986100f4565b610079601b81565b6100d2601b600a6101fe565b81565b60006100e36012600a6101fe565b905090565b6100d26012600a6101fe565b60006100e3601b600a6101fe565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111561015357816000190482111561013957610139610102565b8085161561014657918102915b93841c939080029061011d565b509250929050565b60008261016a575060016101f8565b81610177575060006101f8565b816001811461018d5760028114610197576101b3565b60019150506101f8565b60ff8411156101a8576101a8610102565b50506001821b6101f8565b5060208310610133831016604e8410600b84101617156101d6575081810a6101f8565b6101e08383610118565b80600019048211156101f4576101f4610102565b0290505b92915050565b600061020a838361015b565b939250505056fea2646970667358221220495427d17910f8a85f7f96b5a2cedae90a99556034b308f892dd1eb1ee81aae564736f6c63430008110033'

type DecimalMathConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: DecimalMathConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class DecimalMath__factory extends ContractFactory {
  constructor(...args: DecimalMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<DecimalMath> {
    return super.deploy(overrides || {}) as Promise<DecimalMath>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: string }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): DecimalMath {
    return super.attach(address) as DecimalMath
  }
  override connect(signer: Signer): DecimalMath__factory {
    return super.connect(signer) as DecimalMath__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): DecimalMathInterface {
    return new utils.Interface(_abi) as DecimalMathInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DecimalMath {
    return new Contract(address, _abi, signerOrProvider) as DecimalMath
  }
}
