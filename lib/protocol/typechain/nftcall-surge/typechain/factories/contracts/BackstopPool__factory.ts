/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, type Overrides, Signer, utils } from 'ethers'

import type { PromiseOrValue } from '../../common'
import type { BackstopPool, BackstopPoolInterface } from '../../contracts/BackstopPool'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

const _bytecode =
  '0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107c38061007e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b578063d9caed121461007a578063f2fde38b1461008d575b600080fd5b6100596100a0565b005b600054604080516001600160a01b039092168252519081900360200190f35b610059610088366004610681565b6100b4565b61005961009b3660046106bd565b6102a5565b6100a861031e565b6100b26000610378565b565b6100bc61031e565b6001600160a01b0383166101235760405162461bcd60e51b815260206004820152602360248201527f4261636b73746f70506f6f6c3a20746f6b656e206973207a65726f206164647260448201526265737360e81b60648201526084015b60405180910390fd5b6001600160a01b0382166101795760405162461bcd60e51b815260206004820181905260248201527f4261636b73746f70506f6f6c3a20746f206973207a65726f2061646472657373604482015260640161011a565b600081116101c95760405162461bcd60e51b815260206004820152601c60248201527f4261636b73746f70506f6f6c3a20616d6f756e74206973207a65726f00000000604482015260640161011a565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a0823190602401602060405180830381865afa15801561020d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023191906106df565b81111561028c5760405162461bcd60e51b8152602060048201526024808201527f4261636b73746f70506f6f6c3a20616d6f756e7420657863656564732062616c604482015263616e636560e01b606482015260840161011a565b6102a06001600160a01b03841683836103c8565b505050565b6102ad61031e565b6001600160a01b0381166103125760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161011a565b61031b81610378565b50565b6000546001600160a01b031633146100b25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161011a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180516001600160e01b031663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526102a0928692916000916104589185169084906104d5565b8051909150156102a0578080602001905181019061047691906106f8565b6102a05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161011a565b60606104e484846000856104ec565b949350505050565b60608247101561054d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161011a565b600080866001600160a01b03168587604051610569919061073e565b60006040518083038185875af1925050503d80600081146105a6576040519150601f19603f3d011682016040523d82523d6000602084013e6105ab565b606091505b50915091506105bc878383876105c7565b979650505050505050565b6060831561063657825160000361062f576001600160a01b0385163b61062f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161011a565b50816104e4565b6104e4838381511561064b5781518083602001fd5b8060405162461bcd60e51b815260040161011a919061075a565b80356001600160a01b038116811461067c57600080fd5b919050565b60008060006060848603121561069657600080fd5b61069f84610665565b92506106ad60208501610665565b9150604084013590509250925092565b6000602082840312156106cf57600080fd5b6106d882610665565b9392505050565b6000602082840312156106f157600080fd5b5051919050565b60006020828403121561070a57600080fd5b815180151581146106d857600080fd5b60005b8381101561073557818101518382015260200161071d565b50506000910152565b6000825161075081846020870161071a565b9190910192915050565b602081526000825180602084015261077981604085016020870161071a565b601f01601f1916919091016040019291505056fea26469706673582212203521875cb98453f08d77aae2857971477226cf6a51c467bcb456eee702d139df64736f6c63430008110033'

type BackstopPoolConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: BackstopPoolConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class BackstopPool__factory extends ContractFactory {
  constructor(...args: BackstopPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BackstopPool> {
    return super.deploy(overrides || {}) as Promise<BackstopPool>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): BackstopPool {
    return super.attach(address) as BackstopPool
  }
  override connect(signer: Signer): BackstopPool__factory {
    return super.connect(signer) as BackstopPool__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): BackstopPoolInterface {
    return new utils.Interface(_abi) as BackstopPoolInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BackstopPool {
    return new Contract(address, _abi, signerOrProvider) as BackstopPool
  }
}
