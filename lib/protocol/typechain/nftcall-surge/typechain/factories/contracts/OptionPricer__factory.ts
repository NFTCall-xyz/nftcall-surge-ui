/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, type Overrides, Signer, utils } from 'ethers'

import type { PromiseOrValue } from '../../common'
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
    name: 'delta',
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
        internalType: 'address',
        name: 'asset',
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
    name: 'getPremium',
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
  '0x60806040526000805460ff60a01b191690556103e8620000226006600a620001c2565b6200002f906030620001d7565b6200003b9190620001f1565b6008553480156200004b57600080fd5b5062000057336200005d565b62000214565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111562000104578160001904821115620000e857620000e8620000ad565b80851615620000f657918102915b93841c9390800290620000c8565b509250929050565b6000826200011d57506001620001bc565b816200012c57506000620001bc565b8160018114620001455760028114620001505762000170565b6001915050620001bc565b60ff841115620001645762000164620000ad565b50506001821b620001bc565b5060208310610133831016604e8410600b841016171562000195575081810a620001bc565b620001a18383620000c3565b8060001904821115620001b857620001b8620000ad565b0290505b92915050565b6000620001d083836200010c565b9392505050565b8082028115828204841417620001bc57620001bc620000ad565b6000826200020f57634e487b7160e01b600052601260045260246000fd5b500490565b610f4880620002246000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638da5cb5b116100665780638da5cb5b14610103578063959c08891461011e578063b891f7b014610131578063c0c53b8b14610144578063f2fde38b1461015757600080fd5b806311277a251461009857806326790bbc146100be578063493443a2146100e6578063715018a6146100fb575b600080fd5b6100ab6100a6366004610b8e565b61016a565b6040519081526020015b60405180910390f35b6100d16100cc366004610bca565b6106ae565b604080519283526020830191909152016100b5565b6100f96100f4366004610bca565b6107ae565b005b6100f96107ea565b6000546040516001600160a01b0390911681526020016100b5565b6100ab61012c366004610bfc565b6107fe565b6100d161013f366004610bca565b610867565b6100f9610152366004610c3e565b61091c565b6100f9610165366004610c81565b610a40565b60035460405163220386fb60e21b81526001600160a01b038581166004830152600092839283929091169063880e1bec906024016040805180830381865afa1580156101ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101de9190610ca3565b60025460405163153623c960e11b81526001600160a01b038a811660048301529395509193506000921690632a6c4792906024016040805180830381865afa15801561022e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102529190610ca3565b50905081600087600181111561026a5761026a610cc7565b036103c6578386116102a457604051633177075360e11b815233600482015260248101859052604481018790526064015b60405180910390fd5b6102b06006600a610dd9565b600554859081906102c1828b610de5565b6102cb898c610de5565b6102d59089610df8565b6102df9190610df8565b6102e99190610df8565b6102f39190610e25565b6102fd9190610e25565b6103079190610e25565b6103136006600a610dd9565b6004548690610322828b610de5565b61032c9088610df8565b6103369190610df8565b6103409190610e25565b61034a9190610e25565b6103549190610e39565b61035e9082610e4c565b905061036c6012600a610dd9565b6103786006600a610dd9565b60008413156103895760075461038d565b6006545b6103978585610e74565b6103a19190610e74565b6103ab9190610ea4565b6103b59190610ea4565b6103bf9082610ed2565b905061052e565b8386106103f657604051633177075360e11b8152336004820152602481018590526044810187905260640161029b565b6000866104038680610df8565b61040d9190610e25565b905061041b6006600a610dd9565b6005548690819061042c8286610de5565b6104368a87610de5565b610440908a610df8565b61044a9190610df8565b6104549190610df8565b61045e9190610e25565b6104689190610e25565b6104729190610e25565b61047e6006600a610dd9565b600454879061048d8286610de5565b6104979089610df8565b6104a19190610df8565b6104ab9190610e25565b6104b59190610e25565b6104bf9190610e39565b6104c99083610e4c565b91506104d76012600a610dd9565b6104e36006600a610dd9565b60008512156104f4576007546104f8565b6006545b6105028686610e74565b61050c9190610e74565b6105169190610ea4565b6105209190610ea4565b61052a9083610e4c565b9150505b600154604080516278744560e21b815290516000926001600160a01b0316916301e1d1149160048083019260209291908290030181865afa158015610577573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059b9190610ef9565b6105a76006600a610dd9565b600160009054906101000a90046001600160a01b03166001600160a01b0316632e9403886040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061e9190610ef9565b6106289190610df8565b6106329190610e25565b905060026106426006600a610dd9565b61064c9190610e25565b8111156106a25761065f6006600a610dd9565b600261066d6006600a610dd9565b6106779190610e25565b6106819083610de5565b61068b9084610e74565b6106959190610ea4565b61069f9083610e4c565b91505b50979650505050505050565b600080806106be60066012610de5565b6106c990600a610dd9565b905060006040518060a00160405280868152602001878152602001898152602001888152602001836008546106fe9190610e74565b905260408051634698f9d560e11b81528251600482015260208301516024820152908201516044820152606082015160648201526080820151608482015290915073__$eb86d565a3113b3c398b1080d0d395c3b4$__90638d31f3aa9060a4015b6040805180830381865af415801561077b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079f9190610ca3565b90999098509650505050505050565b6107b6610ab9565b6040805160808101825285815260208101859052908101839052606001819052600493909355600591909155600655600755565b6107f2610ab9565b6107fc6000610b13565b565b600080600061080f87878787610867565b9092509050600088600181111561082857610828610cc7565b036108355750905061085e565b600188600181111561084957610849610cc7565b0361085757915061085e9050565b6000925050505b95945050505050565b6000808061087760066012610de5565b61088290600a610dd9565b905060006040518060a00160405280868152602001878152602001898152602001888152602001836008546108b79190610e74565b90526040805163b6e62e5960e01b81528251600482015260208301516024820152908201516044820152606082015160648201526080820151608482015290915073__$eb86d565a3113b3c398b1080d0d395c3b4$__9063b6e62e599060a40161075f565b610924610ab9565b600054600160a01b900460ff16156109515760405163161b906f60e01b815230600482015260240161029b565b6000805460ff60a01b1916600160a01b179055600180546001600160a01b038086166001600160a01b03199283161790925560028054858416908316179055600380549284169290911691909117905560646109af6006600a610dd9565b6109ba90600a610df8565b6109c49190610e25565b60045560646109d56006600a610dd9565b6109e0906014610df8565b6109ea9190610e25565b60055560646109fb6006600a610dd9565b610a06906032610df8565b610a109190610e25565b6006908155606490610a2390600a610dd9565b610a2e906014610df8565b610a389190610e25565b600755505050565b610a48610ab9565b6001600160a01b038116610aad5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161029b565b610ab681610b13565b50565b6000546001600160a01b031633146107fc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161029b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b0381168114610b7a57600080fd5b919050565b803560028110610b7a57600080fd5b600080600060608486031215610ba357600080fd5b610bac84610b63565b9250610bba60208501610b7f565b9150604084013590509250925092565b60008060008060808587031215610be057600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080600060a08688031215610c1457600080fd5b610c1d86610b7f565b97602087013597506040870135966060810135965060800135945092505050565b600080600060608486031215610c5357600080fd5b610c5c84610b63565b9250610c6a60208501610b63565b9150610c7860408501610b63565b90509250925092565b600060208284031215610c9357600080fd5b610c9c82610b63565b9392505050565b60008060408385031215610cb657600080fd5b505080516020909101519092909150565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600181815b80851115610d2e578160001904821115610d1457610d14610cdd565b80851615610d2157918102915b93841c9390800290610cf8565b509250929050565b600082610d4557506001610dd3565b81610d5257506000610dd3565b8160018114610d685760028114610d7257610d8e565b6001915050610dd3565b60ff841115610d8357610d83610cdd565b50506001821b610dd3565b5060208310610133831016604e8410600b8410161715610db1575081810a610dd3565b610dbb8383610cf3565b8060001904821115610dcf57610dcf610cdd565b0290505b92915050565b6000610c9c8383610d36565b81810381811115610dd357610dd3610cdd565b8082028115828204841417610dd357610dd3610cdd565b634e487b7160e01b600052601260045260246000fd5b600082610e3457610e34610e0f565b500490565b80820180821115610dd357610dd3610cdd565b8082018281126000831280158216821582161715610e6c57610e6c610cdd565b505092915050565b80820260008212600160ff1b84141615610e9057610e90610cdd565b8181058314821517610dd357610dd3610cdd565b600082610eb357610eb3610e0f565b600160ff1b821460001984141615610ecd57610ecd610cdd565b500590565b8181036000831280158383131683831282161715610ef257610ef2610cdd565b5092915050565b600060208284031215610f0b57600080fd5b505191905056fea2646970667358221220098e578eece0c340fb3fd61c1d07202e136c2bb147f99ed6158b3ecd3ead5e9464736f6c63430008110033'

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
  }

  static linkBytecode(linkLibraryAddresses: OptionPricerLibraryAddresses): string {
    let linkedBytecode = _bytecode

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$eb86d565a3113b3c398b1080d0d395c3b4\\$__', 'g'),
      linkLibraryAddresses['contracts/libraries/BlackScholes.sol:BlackScholes'].replace(/^0x/, '').toLowerCase()
    )

    return linkedBytecode
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<OptionPricer> {
    return super.deploy(overrides || {}) as Promise<OptionPricer>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): OptionPricer {
    return super.attach(address) as OptionPricer
  }
  override connect(signer: Signer): OptionPricer__factory {
    return super.connect(signer) as OptionPricer__factory
  }

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
