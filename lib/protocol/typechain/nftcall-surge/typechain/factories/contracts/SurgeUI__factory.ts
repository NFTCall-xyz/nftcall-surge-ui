/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, type Overrides, Signer, utils } from 'ethers'

import type { PromiseOrValue } from '../../common'
import type { SurgeUI, SurgeUIInterface } from '../../contracts/SurgeUI'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'lpTokenAddress',
        type: 'address',
      },
    ],
    name: 'getAnalytics',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'TVL',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'ncETHPrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct Analytics',
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
        internalType: 'address',
        name: 'collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'oracleAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
    ],
    name: 'getNFTCollection',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'vol',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maximumOptionAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct NFTCollection',
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
        internalType: 'address',
        name: 'collectionAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'oracleAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
    ],
    name: 'getNFTCollectionStaus',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'vol',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'openInterest',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'PNL',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'weightedDelta',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'optionTokenTotalAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'optionTokenTotalValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'optionTokenTotalLockedValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'activeCallOptionAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'activePutOptionAmount',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'unrealizedPNL',
            type: 'int256',
          },
        ],
        internalType: 'struct NFTCollectionStaus',
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
        internalType: 'address[]',
        name: 'collectionAddresses',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: 'oracleAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
    ],
    name: 'getNFTCollections',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'vol',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maximumOptionAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct NFTCollection[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'collectionAddresses',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: 'oracleAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
    ],
    name: 'getNFTCollectionsStaus',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'vol',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'openInterest',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'PNL',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'weightedDelta',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'optionTokenTotalAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'optionTokenTotalValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'optionTokenTotalLockedValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'activeCallOptionAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'activePutOptionAmount',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'unrealizedPNL',
            type: 'int256',
          },
        ],
        internalType: 'struct NFTCollectionStaus[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'optionTokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'getPosition',
    outputs: [
      {
        components: [
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
            internalType: 'address',
            name: 'payer',
            type: 'address',
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
          {
            internalType: 'uint256',
            name: 'premium',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maximumPremium',
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
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'lpTokenAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'wETHAddress',
        type: 'address',
      },
    ],
    name: 'getVault',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'wETHBalance',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'wETHAllowance',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'balance',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lockedBalance',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxWithdraw',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'releaseTime',
                type: 'uint256',
              },
            ],
            internalType: 'struct VaultLPToken',
            name: 'lpToken',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'ncETHPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'wETHAllowance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalAssets',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'executionFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalLockedAssets',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'unrealizedPNL',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'unrealizedPremium',
            type: 'uint256',
          },
        ],
        internalType: 'struct Vault',
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
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'lpTokenAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'wETHAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'userAddress',
        type: 'address',
      },
    ],
    name: 'getVaultWithUser',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'wETHBalance',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'wETHAllowance',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'balance',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lockedBalance',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxWithdraw',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'releaseTime',
                type: 'uint256',
              },
            ],
            internalType: 'struct VaultLPToken',
            name: 'lpToken',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'ncETHPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'wETHAllowance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalAssets',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'executionFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalLockedAssets',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'unrealizedPNL',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'unrealizedPremium',
            type: 'uint256',
          },
        ],
        internalType: 'struct Vault',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const

const _bytecode =
  '0x608060405234801561001057600080fd5b50611c4e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063777a30031161005b578063777a3003146101a15780638975d6d6146101c157806399a14189146101e15780639f6dfb021461020157600080fd5b80630a29701d1461008d578063347c5d43146101405780633adbb5af146101535780633bf4212014610173575b600080fd5b6100a061009b366004611478565b610221565b60408051825180518252602080820151818401528184015183850152606080830151818501526080808401518186015260a093840151848601529186015160c0808601919091529486015160e08086019190915290860151610100808601919091529186015161012085015291850151610140840152928401516101608301528301516101808201529101516101a08201526101c0015b60405180910390f35b6100a061014e3660046114d4565b61023e565b61016661016136600461151f565b61025f565b6040516101379190611575565b6101866101813660046115e3565b61031e565b60408051825181526020928301519281019290925201610137565b6101b46101af366004611663565b610439565b6040516101379190611737565b6101d46101cf366004611663565b610518565b604051610137919061180b565b6101f46101ef3660046114d4565b6105d2565b604051610137919061184e565b61021461020f3660046114d4565b610609565b604051610137919061186f565b610229611373565b6102358585858561061c565b95945050505050565b610246611373565b60006102548585858461061c565b9150505b9392505050565b6102a96040805160e0810190915280600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6040516352e5491f60e01b81526004810183905283906001600160a01b038216906352e5491f9060240160e060405180830381865afa1580156102f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103149190611898565b9150505b92915050565b604080518082019091526000808252602082015260408051808201909152600080825260208201526000849050806001600160a01b03166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa158015610389573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ad9190611935565b8252836001600160a01b0381166307a2d13a6103cb6012600a611a48565b6040518263ffffffff1660e01b81526004016103e991815260200190565b602060405180830381865afa158015610406573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042a9190611935565b60208401525090949350505050565b60606000845167ffffffffffffffff8111156104575761045761161c565b6040519080825280602002602001820160405280156104ac57816020015b61049960405180606001604052806000815260200160008152602001600081525090565b8152602001906001900390816104755790505b50905060005b855181101561050f576104df8682815181106104d0576104d0611a54565b60200260200101518686610c6d565b8282815181106104f1576104f1611a54565b6020026020010181905250808061050790611a6a565b9150506104b2565b50949350505050565b60606000845167ffffffffffffffff8111156105365761053661161c565b60405190808252806020026020018201604052801561056f57816020015b61055c6113f6565b8152602001906001900390816105545790505b50905060005b855181101561050f576105a286828151811061059357610593611a54565b60200260200101518686610daa565b8282815181106105b4576105b4611a54565b602002602001018190525080806105ca90611a6a565b915050610575565b6105f660405180606001604052806000815260200160008152602001600081525090565b610601848484610c6d565b949350505050565b6106116113f6565b610601848484610daa565b610624611373565b61062c611373565b85856001600160a01b03851615610963576040516370a0823160e01b81526001600160a01b0386811660048301528791908316906370a0823190602401602060405180830381865afa158015610686573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106aa9190611935565b8451604090810191909152516370a0823160e01b81526001600160a01b0387811660048301528216906370a0823190602401602060405180830381865afa1580156106f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071d9190611935565b845152604051636eb1769f60e11b81526001600160a01b038781166004830152898116602483015282169063dd62ed3e90604401602060405180830381865afa15801561076e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107929190611935565b845160200152604051636eb1769f60e11b81526001600160a01b0387811660048301528a8116602483015282169063dd62ed3e90604401602060405180830381865afa1580156107e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080a9190611935565b60408581019190915251632c9aab9b60e11b81526001600160a01b038781166004830152831690635935573690602401602060405180830381865afa158015610857573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087b9190611935565b84516060015260405163ce96cb7760e01b81526001600160a01b03878116600483015283169063ce96cb7790602401602060405180830381865afa1580156108c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108eb9190611935565b845160800152604051630684cb8960e31b81526001600160a01b0387811660048301528316906334265c4890602401602060405180830381865afa158015610937573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095b9190611935565b845160a00152505b816001600160a01b03166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c59190611935565b60808401526001600160a01b0381166307a2d13a6109e56012600a611a48565b6040518263ffffffff1660e01b8152600401610a0391815260200190565b602060405180830381865afa158015610a20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a449190611935565b836020018181525050806001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaf9190611935565b836060018181525050816001600160a01b0316633d1b760b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610af6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1a9190611935565b8360a0018181525050816001600160a01b0316632e9403886040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b859190611935565b8360c0018181525050816001600160a01b03166308b8e7d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf09190611935565b8360e0018181525050816001600160a01b031663568c11626040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5b9190611935565b61010084015250909695505050505050565b610c9160405180606001604052806000815260200160008152602001600081525090565b610cb560405180606001604052806000815260200160008152602001600081525090565b60405163220386fb60e21b81526001600160a01b03868116600483015285919082169063880e1bec906024016040805180830381865afa158015610cfd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d219190611a83565b602084015282526040516365ab438d60e11b815284906001600160a01b0382169063cb56871a90610d59908a90600090600401611aa7565b602060405180830381865afa158015610d76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9a9190611935565b6040840152509095945050505050565b610db26113f6565b610dba6113f6565b60405163220386fb60e21b81526001600160a01b03868116600483015285919082169063880e1bec906024016040805180830381865afa158015610e02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e269190611a83565b602084015282526040516353bac0b160e01b81526001600160a01b03878116600483015285916000918316906353bac0b19060240160a060405180830381865afa158015610e78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9c9190611ae8565b608081015190915060005b816001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ee5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f099190611935565b81101561122757604051634f6ccce760e01b8152600481018290526000906001600160a01b03841690634f6ccce790602401602060405180830381865afa158015610f58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7c9190611935565b6040516352e5491f60e01b8152600481018290529091506000906001600160a01b038516906352e5491f9060240160e060405180830381865afa158015610fc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610feb9190611898565b90506002815160038111156110025761100261154b565b14801561108657506060810151604051634674dce360e01b815242916001600160a01b03891691634674dce39161103f9160040190815260200190565b608060405180830381865afa15801561105c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110809190611b78565b60600151115b1561121457604051630c953da560e11b81526001600160a01b038d8116600483015260248201849052600091829189169063192a7b4a906044016040805180830381865afa1580156110dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111009190611a83565b91509150818a6060018181516111169190611bde565b90525060808a01805182919061112d908390611bde565b905250608083015160408b018051611146908390611c05565b9052506040516306895a9960e51b8152600481018590526001600160a01b0387169063d12b532090602401602060405180830381865afa15801561118e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b29190611935565b8a60e0018181516111c39190611c05565b9052506000836020015160018111156111de576111de61154b565b036111fc576101008a018051906111f482611a6a565b905250611211565b6101208a0180519061120d82611a6a565b9052505b50505b50508061122090611a6a565b9050610ea7565b50806001600160a01b0316631a39d8ef6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611266573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128a9190611935565b8560a0018181525050806001600160a01b031663d4c3eea06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f59190611935565b8560c0018181525050826001600160a01b03166308b8e7d06040518163ffffffff1660e01b8152600401602060405180830381865afa15801561133c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113609190611935565b6101408601525092979650505050505050565b6040518061012001604052806113b86040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6001600160a01b038116811461146557600080fd5b50565b803561147381611450565b919050565b6000806000806080858703121561148e57600080fd5b843561149981611450565b935060208501356114a981611450565b925060408501356114b981611450565b915060608501356114c981611450565b939692955090935050565b6000806000606084860312156114e957600080fd5b83356114f481611450565b9250602084013561150481611450565b9150604084013561151481611450565b809150509250925092565b6000806040838503121561153257600080fd5b823561153d81611450565b946020939093013593505050565b634e487b7160e01b600052602160045260246000fd5b600281106115715761157161154b565b9052565b815160e08201906004811061158c5761158c61154b565b8083525060208301516115a26020840182611561565b5060018060a01b036040840151166040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015292915050565b600080604083850312156115f657600080fd5b823561160181611450565b9150602083013561161181611450565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561165b5761165b61161c565b604052919050565b60008060006060848603121561167857600080fd5b833567ffffffffffffffff8082111561169057600080fd5b818601915086601f8301126116a457600080fd5b81356020828211156116b8576116b861161c565b8160051b92506116c9818401611632565b828152928401810192818101908a8511156116e357600080fd5b948201945b8486101561170d57853593506116fd84611450565b83825294820194908201906116e8565b975061171c9050888201611468565b95505050505061172e60408501611468565b90509250925092565b6020808252825182820181905260009190848201906040850190845b8181101561178d5761177a8385518051825260208082015190830152604090810151910152565b9284019260609290920191600101611753565b50909695505050505050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152505050565b6020808252825182820181905260009190848201906040850190845b8181101561178d5761183a838551611799565b928401926101609290920191600101611827565b81518152602080830151908201526040808301519082015260608101610318565b61016081016103188284611799565b80516002811061147357600080fd5b805161147381611450565b600060e082840312156118aa57600080fd5b60405160e0810181811067ffffffffffffffff821117156118cd576118cd61161c565b6040528251600481106118df57600080fd5b81526118ed6020840161187e565b60208201526118fe6040840161188d565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b60006020828403121561194757600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111561199f5781600019048211156119855761198561194e565b8085161561199257918102915b93841c9390800290611969565b509250929050565b6000826119b657506001610318565b816119c357506000610318565b81600181146119d957600281146119e3576119ff565b6001915050610318565b60ff8411156119f4576119f461194e565b50506001821b610318565b5060208310610133831016604e8410600b8410161715611a22575081810a610318565b611a2c8383611964565b8060001904821115611a4057611a4061194e565b029392505050565b600061025883836119a7565b634e487b7160e01b600052603260045260246000fd5b600060018201611a7c57611a7c61194e565b5060010190565b60008060408385031215611a9657600080fd5b505080516020909101519092909150565b6001600160a01b0383168152604081016102586020830184611561565b8051801515811461147357600080fd5b805163ffffffff8116811461147357600080fd5b600060a08284031215611afa57600080fd5b60405160a0810181811067ffffffffffffffff82111715611b1d57611b1d61161c565b604052611b2983611ac4565b8152611b3760208401611ac4565b6020820152611b4860408401611ad4565b6040820152611b5960608401611ad4565b60608201526080830151611b6c81611450565b60808201529392505050565b600060808284031215611b8a57600080fd5b6040516080810181811067ffffffffffffffff82111715611bad57611bad61161c565b8060405250825181526020830151602082015260408301516040820152606083015160608201528091505092915050565b8181036000831280158383131683831282161715611bfe57611bfe61194e565b5092915050565b808201808211156103185761031861194e56fea26469706673582212203223ddf456964ca2c252d7070d30cd35b224229a727fdf356298774f918819ed64736f6c63430008110033'

type SurgeUIConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: SurgeUIConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class SurgeUI__factory extends ContractFactory {
  constructor(...args: SurgeUIConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<SurgeUI> {
    return super.deploy(overrides || {}) as Promise<SurgeUI>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): SurgeUI {
    return super.attach(address) as SurgeUI
  }
  override connect(signer: Signer): SurgeUI__factory {
    return super.connect(signer) as SurgeUI__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): SurgeUIInterface {
    return new utils.Interface(_abi) as SurgeUIInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SurgeUI {
    return new Contract(address, _abi, signerOrProvider) as SurgeUI
  }
}
