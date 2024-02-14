/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, type Overrides, Signer, utils } from 'ethers'

import type { AssetRiskCache, AssetRiskCacheInterface } from '../../contracts/AssetRiskCache'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AlreadyInitialised',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
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
    inputs: [],
    name: 'owner',
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
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
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

const _bytecode =
  '0x60806040526000805460ff60a01b1916905534801561001d57600080fd5b506100273361002c565b61007c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103be8061008b6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063715018a61161005b578063715018a6146101195780638da5cb5b14610121578063d708afa71461013c578063f2fde38b1461014f57600080fd5b80632671013d146100825780632a6c47921461009757806348e71121146100e2575b600080fd5b610095610090366004610309565b610162565b005b6100c86100a536600461033c565b6001600160a01b0316600090815260016020819052604090912080549101549091565b604080519283526020830191909152015b60405180910390f35b61010b6100f036600461033c565b6001600160a01b031660009081526001602052604090205490565b6040519081526020016100d9565b61009561018d565b6000546040516001600160a01b0390911681526020016100d9565b61009561014a36600461035e565b6101a1565b61009561015d36600461033c565b6101c5565b61016a610243565b6001600160a01b0390921660009081526001602081905260409091209182550155565b610195610243565b61019f600061029d565b565b6101a9610243565b6001600160a01b03909116600090815260016020526040902055565b6101cd610243565b6001600160a01b0381166102375760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6102408161029d565b50565b6000546001600160a01b0316331461019f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161022e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461030457600080fd5b919050565b60008060006060848603121561031e57600080fd5b610327846102ed565b95602085013595506040909401359392505050565b60006020828403121561034e57600080fd5b610357826102ed565b9392505050565b6000806040838503121561037157600080fd5b61037a836102ed565b94602093909301359350505056fea264697066735822122006790fb0dbe3d734676549cb5955d459dfa70d8cb66f020f4f3973926f3b66a564736f6c63430008110033'

type AssetRiskCacheConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: AssetRiskCacheConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class AssetRiskCache__factory extends ContractFactory {
  constructor(...args: AssetRiskCacheConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<AssetRiskCache> {
    return super.deploy(overrides || {}) as Promise<AssetRiskCache>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: string }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): AssetRiskCache {
    return super.attach(address) as AssetRiskCache
  }
  override connect(signer: Signer): AssetRiskCache__factory {
    return super.connect(signer) as AssetRiskCache__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): AssetRiskCacheInterface {
    return new utils.Interface(_abi) as AssetRiskCacheInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AssetRiskCache {
    return new Contract(address, _abi, signerOrProvider) as AssetRiskCache
  }
}
