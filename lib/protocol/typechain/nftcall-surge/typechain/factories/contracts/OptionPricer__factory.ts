/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, type Overrides, Signer, utils } from 'ethers'

import type { OptionPricer, OptionPricerInterface } from '../../contracts/OptionPricer'

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
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'S',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'K',
        type: 'uint256',
      },
    ],
    name: 'IllegalStrikePrice',
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
        name: 'collection',
        type: 'address',
      },
      {
        internalType: 'enum OptionType',
        name: 'ot',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'K',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lockValue',
        type: 'uint256',
      },
    ],
    name: 'getAdjustedVol',
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
        internalType: 'enum OptionType',
        name: 'ot',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'S',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'K',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vol',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
    ],
    name: 'getPremiumDeltaStdVega',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
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
        name: 'vault_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'riskCache_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'oracle_',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'S',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'K',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vol',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
    ],
    name: 'optionDelta',
    outputs: [
      {
        internalType: 'int256',
        name: 'callDelta',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'putDelta',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'S',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'K',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vol',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
    ],
    name: 'optionPrices',
    outputs: [
      {
        internalType: 'uint256',
        name: 'call',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'put',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'S',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'K',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vol',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
    ],
    name: 'optionPricesDeltaStdVega',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'callPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'putPrice',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'callDelta',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'putDelta',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'vega',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'stdVega',
            type: 'uint256',
          },
        ],
        internalType: 'struct BlackScholes.PricesDeltaStdVega',
        name: 'pricesDeltaStdVega',
        type: 'tuple',
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
        internalType: 'uint256',
        name: 'skewP1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'skewP2',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deltaP1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deltaP2',
        type: 'uint256',
      },
    ],
    name: 'updatePricerParams',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

const _bytecode =
  '0x60806040526000805460ff60a01b191690556103e8620000226006600a620001c2565b6200002f906030620001d7565b6200003b9190620001f1565b6008553480156200004b57600080fd5b5062000057336200005d565b62000214565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111562000104578160001904821115620000e857620000e8620000ad565b80851615620000f657918102915b93841c9390800290620000c8565b509250929050565b6000826200011d57506001620001bc565b816200012c57506000620001bc565b8160018114620001455760028114620001505762000170565b6001915050620001bc565b60ff841115620001645762000164620000ad565b50506001821b620001bc565b5060208310610133831016604e8410600b841016171562000195575081810a620001bc565b620001a18383620000c3565b8060001904821115620001b857620001b8620000ad565b0290505b92915050565b6000620001d083836200010c565b9392505050565b8082028115828204841417620001bc57620001bc620000ad565b6000826200020f57634e487b7160e01b600052601260045260246000fd5b500490565b61138580620002246000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063b00d62dd11610066578063b00d62dd1461013b578063b891f7b01461015c578063c0c53b8b1461016f578063c14c293114610182578063f2fde38b146101e157600080fd5b806302e1d4d6146100a3578063493443a2146100db578063715018a6146100f05780638da5cb5b146100f8578063a2f1372f14610113575b600080fd5b6100b66100b1366004610e1c565b6101f4565b6040805194855260208501939093529183015260608201526080015b60405180910390f35b6100ee6100e9366004610e5e565b61029c565b005b6100ee6102d8565b6000546040516001600160a01b0390911681526020016100d2565b610126610121366004610e5e565b6102ec565b604080519283526020830191909152016100d2565b61014e610149366004610ea5565b6103c7565b6040519081526020016100d2565b61012661016a366004610e5e565b610a27565b6100ee61017d366004610ee9565b610ab3565b610195610190366004610e5e565b610bd7565b6040516100d29190600060c082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015292915050565b6100ee6101ef366004610f34565b610ce5565b600080600080600061020889898989610bd7565b905060008a600181111561021e5761021e610f58565b03610245578060000151816040015182608001518360a00151945094509450945050610290565b60018a600181111561025957610259610f58565b03610280578060200151816060015182608001518360a00151945094509450945050610290565b6000806000809450945094509450505b95509550955095915050565b6102a4610d5e565b6040805160808101825285815260208101859052908101839052606001819052600493909355600591909155600655600755565b6102e0610d5e565b6102ea6000610db8565b565b600080806102fc60066012610f84565b61030790600a611081565b905060006040518060a001604052808681526020018781526020018981526020018881526020018360085461033c919061108d565b9052604051634698f9d560e11b815290915073__$eb86d565a3113b3c398b1080d0d395c3b4$__90638d31f3aa906103789084906004016110bd565b6040805180830381865af4158015610394573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b891906110f7565b90999098509650505050505050565b60035460405163220386fb60e21b81526001600160a01b038681166004830152600092839283929091169063880e1bec906024016040805180830381865afa158015610417573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043b91906110f7565b60025460405163153623c960e11b81526001600160a01b038b811660048301529395509193506000921690632a6c4792906024016040805180830381865afa15801561048b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104af91906110f7565b5090506000600160009054906101000a90046001600160a01b03166001600160a01b03166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa158015610507573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052b919061111b565b6001546040516353bac0b160e01b81526001600160a01b038c81166004830152929350600092909116906353bac0b19060240160a060405180830381865afa15801561057b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059f9190611158565b9050600081608001516001600160a01b031663d4c3eea06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105e5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610609919061111b565b90508460008b600181111561062057610620610f58565b036107a957868a1161066657335b604051633177075360e11b81526001600160a01b03909116600482015260248101889052604481018b90526064015b60405180910390fd5b6106726006600a611081565b60055488908190610683828f610f84565b8b8f61068f9190610f84565b610699908c6111f6565b6106a391906111f6565b6106ad91906111f6565b6106b79190611223565b6106c19190611223565b6106cb9190611223565b6106d76006600a611081565b60045489906106e6828f610f84565b6106f0908b6111f6565b6106fa91906111f6565b6107049190611223565b61070e9190611223565b6107189190611237565b610722908261124a565b606084015190915063ffffffff168461073d6012600a611081565b6107478c86611237565b60008913156107585760075461075c565b6006545b6107668a8761108d565b610770919061108d565b61077a919061108d565b6107849190611272565b61078e9190611272565b6107989190611272565b6107a290826112a0565b905061090d565b868a106107b6573361062e565b60008a6107c389806111f6565b6107cd9190611223565b90506107db6006600a611081565b600554899081906107ec8286610f84565b6107f68d87610f84565b610800908d6111f6565b61080a91906111f6565b61081491906111f6565b61081e9190611223565b6108289190611223565b6108329190611223565b61083e6006600a611081565b6004548a9061084d8286610f84565b610857908c6111f6565b61086191906111f6565b61086b9190611223565b6108759190611223565b61087f9190611237565b610889908361124a565b606085015190925063ffffffff16856108a46012600a611081565b6108ae8d87611237565b60008a12156108bf576007546108c3565b6006545b6108cd8b8861108d565b6108d7919061108d565b6108e1919061108d565b6108eb9190611272565b6108f59190611272565b6108ff9190611272565b610909908361124a565b9150505b60008461091c6006600a611081565b600160009054906101000a90046001600160a01b03166001600160a01b0316632e9403886040518163ffffffff1660e01b8152600401602060405180830381865afa15801561096f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610993919061111b565b61099d91906111f6565b6109a79190611223565b905060026109b76006600a611081565b6109c19190611223565b811115610a17576109d46006600a611081565b60026109e26006600a611081565b6109ec9190611223565b6109f69083610f84565b610a00908461108d565b610a0a9190611272565b610a14908361124a565b91505b509b9a5050505050505050505050565b60008080610a3760066012610f84565b610a4290600a611081565b905060006040518060a0016040528086815260200187815260200189815260200188815260200183600854610a77919061108d565b905260405163b6e62e5960e01b815290915073__$eb86d565a3113b3c398b1080d0d395c3b4$__9063b6e62e59906103789084906004016110bd565b610abb610d5e565b600054600160a01b900460ff1615610ae85760405163161b906f60e01b815230600482015260240161065d565b6000805460ff60a01b1916600160a01b179055600180546001600160a01b038086166001600160a01b0319928316179092556002805485841690831617905560038054928416929091169190911790556064610b466006600a611081565b610b5190600a6111f6565b610b5b9190611223565b6004556064610b6c6006600a611081565b610b779060146111f6565b610b819190611223565b6005556064610b926006600a611081565b610b9d9060326111f6565b610ba79190611223565b6006908155606490610bba90600a611081565b610bc59060146111f6565b610bcf9190611223565b600755505050565b610c106040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610c1e60066012610f84565b610c2990600a611081565b905060006040518060a0016040528085815260200186815260200188815260200187815260200183600854610c5e919061108d565b9052604051626dab0f60e31b815290915073__$eb86d565a3113b3c398b1080d0d395c3b4$__9063036d587890610c999084906004016110bd565b60c060405180830381865af4158015610cb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cda91906112c7565b979650505050505050565b610ced610d5e565b6001600160a01b038116610d525760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161065d565b610d5b81610db8565b50565b6000546001600160a01b031633146102ea5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161065d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803560028110610e1757600080fd5b919050565b600080600080600060a08688031215610e3457600080fd5b610e3d86610e08565b97602087013597506040870135966060810135965060800135945092505050565b60008060008060808587031215610e7457600080fd5b5050823594602084013594506040840135936060013592509050565b6001600160a01b0381168114610d5b57600080fd5b60008060008060808587031215610ebb57600080fd5b8435610ec681610e90565b9350610ed460208601610e08565b93969395505050506040820135916060013590565b600080600060608486031215610efe57600080fd5b8335610f0981610e90565b92506020840135610f1981610e90565b91506040840135610f2981610e90565b809150509250925092565b600060208284031215610f4657600080fd5b8135610f5181610e90565b9392505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b81810381811115610f9757610f97610f6e565b92915050565b600181815b80851115610fd8578160001904821115610fbe57610fbe610f6e565b80851615610fcb57918102915b93841c9390800290610fa2565b509250929050565b600082610fef57506001610f97565b81610ffc57506000610f97565b8160018114611012576002811461101c57611038565b6001915050610f97565b60ff84111561102d5761102d610f6e565b50506001821b610f97565b5060208310610133831016604e8410600b841016171561105b575081810a610f97565b6110658383610f9d565b806000190482111561107957611079610f6e565b029392505050565b6000610f518383610fe0565b80820260008212600160ff1b841416156110a9576110a9610f6e565b8181058314821517610f9757610f97610f6e565b600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b6000806040838503121561110a57600080fd5b505080516020909101519092909150565b60006020828403121561112d57600080fd5b5051919050565b80518015158114610e1757600080fd5b805163ffffffff81168114610e1757600080fd5b600060a0828403121561116a57600080fd5b60405160a0810181811067ffffffffffffffff8211171561119b57634e487b7160e01b600052604160045260246000fd5b6040526111a783611134565b81526111b560208401611134565b60208201526111c660408401611144565b60408201526111d760608401611144565b606082015260808301516111ea81610e90565b60808201529392505050565b8082028115828204841417610f9757610f97610f6e565b634e487b7160e01b600052601260045260246000fd5b6000826112325761123261120d565b500490565b80820180821115610f9757610f97610f6e565b808201828112600083128015821682158216171561126a5761126a610f6e565b505092915050565b6000826112815761128161120d565b600160ff1b82146000198414161561129b5761129b610f6e565b500590565b81810360008312801583831316838312821617156112c0576112c0610f6e565b5092915050565b600060c082840312156112d957600080fd5b60405160c0810181811067ffffffffffffffff8211171561130a57634e487b7160e01b600052604160045260246000fd5b8060405250825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a0820152809150509291505056fea264697066735822122004693330695c6b8dc2571ffa5872b49729d15e495b8fcb96fd152058d7d0f6df64736f6c63430008110033'

type OptionPricerConstructorParams =
  | [linkLibraryAddresses: OptionPricerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: OptionPricerConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === 'string' ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    '_isInterface' in xs[0]
  )
}

export class OptionPricer__factory extends ContractFactory {
  constructor(...args: OptionPricerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      const [linkLibraryAddresses, signer] = args
      super(_abi, OptionPricer__factory.linkBytecode(linkLibraryAddresses), signer)
    }
    this.contractName = 'OptionPricer'
  }

  static linkBytecode(linkLibraryAddresses: OptionPricerLibraryAddresses): string {
    let linkedBytecode = _bytecode

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$eb86d565a3113b3c398b1080d0d395c3b4\\$__', 'g'),
      linkLibraryAddresses['contracts/libraries/BlackScholes.sol:BlackScholes'].replace(/^0x/, '').toLowerCase()
    )

    return linkedBytecode
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<OptionPricer> {
    return super.deploy(overrides || {}) as Promise<OptionPricer>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: string }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): OptionPricer {
    return super.attach(address) as OptionPricer
  }
  override connect(signer: Signer): OptionPricer__factory {
    return super.connect(signer) as OptionPricer__factory
  }
  static readonly contractName: 'OptionPricer'

  public readonly contractName: 'OptionPricer'

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): OptionPricerInterface {
    return new utils.Interface(_abi) as OptionPricerInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OptionPricer {
    return new Contract(address, _abi, signerOrProvider) as OptionPricer
  }
}

export interface OptionPricerLibraryAddresses {
  ['contracts/libraries/BlackScholes.sol:BlackScholes']: string
}
