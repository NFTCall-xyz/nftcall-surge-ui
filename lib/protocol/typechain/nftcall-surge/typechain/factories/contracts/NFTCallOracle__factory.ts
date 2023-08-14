/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, type Overrides, Signer, utils } from 'ethers'

import type { NFTCallOracle, NFTCallOracleInterface } from '../../contracts/NFTCallOracle'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOperator',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'assets',
        type: 'address[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'oldOperator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOperator',
        type: 'address',
      },
    ],
    name: 'ChangeOperator',
    type: 'event',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'oldAsset',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newAsset',
        type: 'address',
      },
    ],
    name: 'ReplaceAsset',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'indexes',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'uint16',
            name: 'price',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'vol',
            type: 'uint16',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct NFTCallOracle.UpdateInput[][]',
        name: 'inputs',
        type: 'tuple[][]',
      },
    ],
    name: 'SetAssetData',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'enabled',
        type: 'bool',
      },
    ],
    name: 'SetEmergencyAdmin',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [],
    name: 'PRICE_DECIMALS',
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
    name: 'PRICE_UNIT',
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
    name: 'VOL_DECIMALS',
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
    name: 'VOL_UNIT',
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
        internalType: 'address[]',
        name: 'assets',
        type: 'address[]',
      },
    ],
    name: 'addAssets',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'indexes',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'uint16',
            name: 'price',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'vol',
            type: 'uint16',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        internalType: 'struct NFTCallOracle.UpdateInput[][]',
        name: 'inputs',
        type: 'tuple[][]',
      },
    ],
    name: 'batchSetAssetPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAddressList',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
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
    name: 'getAssetPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: 'price',
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
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getAssetPriceAndVol',
    outputs: [
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
    name: 'getAssetVol',
    outputs: [
      {
        internalType: 'uint256',
        name: 'vol',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'assets',
        type: 'address[]',
      },
    ],
    name: 'getAssets',
    outputs: [
      {
        internalType: 'uint256[2][]',
        name: 'prices',
        type: 'uint256[2][]',
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
    name: 'getIndexes',
    outputs: [
      {
        internalType: 'uint256',
        name: 'OuterIndex',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'InnerIndex',
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
        name: 'admin',
        type: 'address',
      },
    ],
    name: 'isEmergencyAdmin',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'operator',
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
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
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
        name: 'oldAsset',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newAsset',
        type: 'address',
      },
    ],
    name: 'replaceAsset',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'enabled',
        type: 'bool',
      },
    ],
    name: 'setEmergencyAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOperator',
        type: 'address',
      },
    ],
    name: 'setOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'val',
        type: 'bool',
      },
    ],
    name: 'setPause',
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
] as const

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162001ca938038062001ca983398101604081905262000034916200024b565b6200003f336200007e565b6000805460ff60a01b191690556001600160a01b0382166200006057600080fd5b6200006b82620000ce565b620000768162000120565b505062000398565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600480546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f43ecbc1bb0a9bebbcadca5bdaedc649040adb65597772899e25403afb28b679490600090a35050565b600354600090620001339060016200034a565b905060005b82518110156200021357600083828151811062000159576200015962000366565b6020026020010151905060016000826001600160a01b03166001600160a01b0316815260200190815260200160002054600003620001fd576001600160a01b038116600081815260016020819052604082208690556003805491820181559091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b031916909117905582620001f9816200037c565b9350505b50806200020a816200037c565b91505062000138565b505050565b80516001600160a01b03811681146200023057600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200025f57600080fd5b6200026a8362000218565b602084810151919350906001600160401b03808211156200028a57600080fd5b818601915086601f8301126200029f57600080fd5b815181811115620002b457620002b462000235565b8060051b604051601f19603f83011681018181108582111715620002dc57620002dc62000235565b604052918252848201925083810185019189831115620002fb57600080fd5b938501935b828510156200032457620003148562000218565b8452938501939285019262000300565b8096505050505050509250929050565b634e487b7160e01b600052601160045260246000fd5b8082018082111562000360576200036062000334565b92915050565b634e487b7160e01b600052603260045260246000fd5b60006001820162000391576200039162000334565b5060010190565b61190180620003a86000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80638da5cb5b116100b8578063b3ab15fb1161007c578063b3ab15fb146102bb578063bedb86fb146102ce578063d91a2683146102e1578063ed435e5814610301578063f1a640f814610309578063f2fde38b1461031157600080fd5b80638da5cb5b14610268578063942acc981461027957806395b861981461028c578063aea321c614610295578063b3596f07146102a857600080fd5b80635c975abb1161010a5780635c975abb146101e8578063715018a6146101fa578063762fb68914610202578063774c4c621461022a5780638111913014610240578063880e1bec1461025557600080fd5b80632500f2b614610147578063467d1589146101885780634d0503d41461019d5780634fdd1d4f146101b0578063570ca735146101c3575b600080fd5b6101736101553660046111d1565b6001600160a01b031660009081526002602052604090205460ff1690565b60405190151581526020015b60405180910390f35b61019b6101963660046111ec565b610324565b005b61019b6101ab36600461122f565b6103fe565b61019b6101be36600461141f565b6104ab565b6004546001600160a01b03165b6040516001600160a01b03909116815260200161017f565b600054600160a01b900460ff16610173565b61019b6105ed565b6102156102103660046111d1565b610601565b6040805192835260208301919091520161017f565b610232600381565b60405190815260200161017f565b610248610657565b60405161017f91906114d8565b6102156102633660046111d1565b6106b9565b6000546001600160a01b03166101d0565b6102326102873660046111d1565b6106cf565b6102326103e881565b61019b6102a3366004611525565b6106e1565b6102326102b63660046111d1565b610703565b61019b6102c93660046111d1565b610715565b61019b6102dc3660046115bd565b61076f565b6102f46102ef366004611525565b6107e4565b60405161017f91906115d8565b610232606481565b610232600281565b61019b61031f3660046111d1565b6108be565b61032c610934565b6001600160a01b0382166000908152600160205260408120549081900361038a5760405162461bcd60e51b815260206004820152600d60248201526c0d2dcecc2d8d2c840d2dcc8caf609b1b60448201526064015b60405180910390fd5b816003610398600184611657565b815481106103a8576103a861166a565b6000918252602082200180546001600160a01b0319166001600160a01b03938416179055604051848316928616917f08368c387c392d24899e2cf8c0830f3c9a3f03734e5032d68f5eac8c19042db991a3505050565b610406610934565b6001600160a01b03821661044c5760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b21030b236b4b760991b6044820152606401610381565b6001600160a01b038216600081815260026020908152604091829020805460ff191685151590811790915591519182527fd31e6f3e4ff12681638f56ab4792e32b335f90235a708d31e741ee9dac011e91910160405180910390a25050565b6104b361098e565b6004546001600160a01b0316331461050d5760405162461bcd60e51b815260206004820152601a60248201527f63616c6c6572206973206e6f7420746865206f70657261746f720000000000006044820152606401610381565b80518251146105555760405162461bcd60e51b81526020600482015260146024820152731b195b99dd1a081b5d5cdd08189948195c5d585b60621b6044820152606401610381565b60005b82518110156105af5761059d8382815181106105765761057661166a565b60200260200101518383815181106105905761059061166a565b60200260200101516109db565b806105a781611680565b915050610558565b507f1c66d38ae9bc7add98b6cd4a391e70e47c85b044e97db2074c7bde3849dd329e82826040516105e1929190611699565b60405180910390a15050565b6105f5610934565b6105ff6000610d1c565b565b6001600160a01b0381166000908152600160208190526040822054829160089061062b9083611657565b6106359190611789565b925061064260088261179d565b91508160000361065157600891505b50915091565b606060038054806020026020016040519081016040528092919081815260200182805480156106af57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610691575b5050505050905090565b6000806106c583610d6c565b9094909350915050565b60006106da82610d6c565b9392505050565b6106e9610934565b60008151116106f757600080fd5b61070081610dd8565b50565b600061070e82610d6c565b5092915050565b61071d610934565b6001600160a01b0381166107665760405162461bcd60e51b815260206004820152601060248201526f34b73b30b634b21037b832b930ba37b960811b6044820152606401610381565b61070081610ec4565b3360009081526002602052604090205460ff166107ce5760405162461bcd60e51b815260206004820181905260248201527f63616c6c6572206973206e6f742074686520656d657267656e637941646d696e6044820152606401610381565b80156107dc57610700610f16565b610700610f76565b6060815167ffffffffffffffff81111561080057610800611259565b60405190808252806020026020018201604052801561083957816020015b610826611197565b81526020019060019003908161081e5790505b50905060005b82518110156108b85760008061086d8584815181106108605761086061166a565b6020026020010151610d6c565b915091506040518060400160405280838152602001828152508484815181106108985761089861166a565b6020026020010181905250505080806108b090611680565b91505061083f565b50919050565b6108c6610934565b6001600160a01b03811661092b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610381565b61070081610d1c565b6000546001600160a01b031633146105ff5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610381565b600054600160a01b900460ff16156105ff5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610381565b6000600583603281106109f0576109f061166a565b01905060005b8251811015610bd5576000838281518110610a1357610a1361166a565b6020026020010151905061012c61ffff16816020015161ffff161015610a695760405162461bcd60e51b815260206004820152600b60248201526a1a5b9d985b1a59081d9bdb60aa1b6044820152606401610381565b604081015181516020830151600091610a8191610fb2565b905081600103610aa357845463ffffffff191663ffffffff8216178555610bbf565b81600203610ace57845467ffffffff00000000191664010000000063ffffffff831602178555610bbf565b81600303610af757845463ffffffff60401b1916600160401b63ffffffff831602178555610bbf565b81600403610b2057845463ffffffff60601b1916600160601b63ffffffff831602178555610bbf565b81600503610b4957845463ffffffff60801b1916600160801b63ffffffff831602178555610bbf565b81600603610b7257845463ffffffff60a01b1916600160a01b63ffffffff831602178555610bbf565b81600703610b9b57845463ffffffff60c01b1916600160c01b63ffffffff831602178555610bbf565b81600803610bbf5784546001600160e01b0316600160e01b63ffffffff8316021785555b5050508080610bcd90611680565b9150506109f6565b508060058460328110610bea57610bea61166a565b82549101805463ffffffff19811663ffffffff938416908117835584546401000000009081900485160267ffffffffffffffff1990921617178082558354600160401b9081900484160263ffffffff60401b198216811783558454600160601b9081900485160263ffffffff60601b199091166fffffffffffffffff00000000000000001990921691909117178082558354600160801b9081900484160263ffffffff60801b198216811783558454600160a01b9081900485160263ffffffff60a01b1990911667ffffffffffffffff60801b1990921691909117178082558354600160c01b9081900484160263ffffffff60c01b198216811783559354600160e01b908190049093169092026001600160e01b039093166001600160c01b0390921691909117919091179055505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080610d7b85610fca565b90925090506064610d8e6012600a611895565b610d989190611789565b610da69061ffff84166118a1565b93506103e8610db76012600a611895565b610dc19190611789565b610dcf9061ffff83166118a1565b92505050915091565b600354600090610de99060016118b8565b905060005b8251811015610ebf576000838281518110610e0b57610e0b61166a565b6020026020010151905060016000826001600160a01b03166001600160a01b0316815260200190815260200160002054600003610eac576001600160a01b038116600081815260016020819052604082208690556003805491820181559091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b031916909117905582610ea881611680565b9350505b5080610eb781611680565b915050610dee565b505050565b600480546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f43ecbc1bb0a9bebbcadca5bdaedc649040adb65597772899e25403afb28b679490600090a35050565b610f1e61098e565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f593390565b6040516001600160a01b03909116815260200160405180910390a1565b610f7e611147565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610f59565b63ffff0000601083901b1661ffff8216175b92915050565b6001600160a01b0381166000908152600160205260408120548190808203610ff85750600093849350915050565b60008061100486610601565b9150915060006005836032811061101d5761101d61166a565b6040805161010081018252929091015463ffffffff8082168452640100000000820481166020850152600160401b8204811692840192909252600160601b810482166060840152600160801b810482166080840152600160a01b8104821660a0840152600160c01b8104821660c0840152600160e01b90041660e08201529050600060018390036110b057508051611131565b826002036110c357506020810151611131565b826003036110d657506040810151611131565b826004036110e957506060810151611131565b826005036110fc57506080810151611131565b8260060361110f575060a0810151611131565b82600703611122575060c0810151611131565b82600803611131575060e08101515b61ffff601082901c169890975095505050505050565b600054600160a01b900460ff166105ff5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610381565b60405180604001604052806002906020820280368337509192915050565b80356001600160a01b03811681146111cc57600080fd5b919050565b6000602082840312156111e357600080fd5b6106da826111b5565b600080604083850312156111ff57600080fd5b611208836111b5565b9150611216602084016111b5565b90509250929050565b803580151581146111cc57600080fd5b6000806040838503121561124257600080fd5b61124b836111b5565b91506112166020840161121f565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561129257611292611259565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156112c1576112c1611259565b604052919050565b600067ffffffffffffffff8211156112e3576112e3611259565b5060051b60200190565b803561ffff811681146111cc57600080fd5b600082601f83011261131057600080fd5b81356020611325611320836112c9565b611298565b82815260059290921b8401810191818101908684111561134457600080fd5b8286015b8481101561141457803567ffffffffffffffff8111156113685760008081fd5b8701603f8101891361137a5760008081fd5b84810135604061138c611320836112c9565b8281526060928302840182019288820191908d8511156113ac5760008081fd5b948301945b848610156114025780868f0312156113c95760008081fd5b6113d161126f565b6113da876112ed565b81526113e78b88016112ed565b818c01528685013585820152835294850194918901916113b1565b50875250505092840192508301611348565b509695505050505050565b6000806040838503121561143257600080fd5b823567ffffffffffffffff8082111561144a57600080fd5b818501915085601f83011261145e57600080fd5b8135602061146e611320836112c9565b82815260059290921b8401810191818101908984111561148d57600080fd5b948201945b838610156114ab57853582529482019490820190611492565b965050860135925050808211156114c157600080fd5b506114ce858286016112ff565b9150509250929050565b6020808252825182820181905260009190848201906040850190845b818110156115195783516001600160a01b0316835292840192918401916001016114f4565b50909695505050505050565b6000602080838503121561153857600080fd5b823567ffffffffffffffff81111561154f57600080fd5b8301601f8101851361156057600080fd5b803561156e611320826112c9565b81815260059190911b8201830190838101908783111561158d57600080fd5b928401925b828410156115b2576115a3846111b5565b82529284019290840190611592565b979650505050505050565b6000602082840312156115cf57600080fd5b6106da8261121f565b60208082528251828201819052600091906040908185019086840185805b8381101561163357825185835b600281101561162057825182529189019190890190600101611603565b50505093850193918601916001016115f6565b509298975050505050505050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610fc457610fc4611641565b634e487b7160e01b600052603260045260246000fd5b60006001820161169257611692611641565b5060010190565b6040808252835182820181905260009190606090818501906020808901865b838110156116d4578151855293820193908201906001016116b8565b50508683038188015287518084528184019250600581901b8401820189830160005b8381101561176257868303601f1901865281518051808552908601908685019060005b8181101561174d578351805161ffff90811685528a820151168a8501528d01518d84015292880192918b0191600101611719565b505096860196935050908401906001016116f6565b50909b9a5050505050505050505050565b634e487b7160e01b600052601260045260246000fd5b60008261179857611798611773565b500490565b6000826117ac576117ac611773565b500690565b600181815b808511156117ec5781600019048211156117d2576117d2611641565b808516156117df57918102915b93841c93908002906117b6565b509250929050565b60008261180357506001610fc4565b8161181057506000610fc4565b816001811461182657600281146118305761184c565b6001915050610fc4565b60ff84111561184157611841611641565b50506001821b610fc4565b5060208310610133831016604e8410600b841016171561186f575081810a610fc4565b61187983836117b1565b806000190482111561188d5761188d611641565b029392505050565b60006106da83836117f4565b8082028115828204841417610fc457610fc4611641565b80820180821115610fc457610fc461164156fea2646970667358221220ab07ba89ae77fab7e3923868f8a2ea167484a05a6667b5ed58651f827457e58f64736f6c63430008110033'

type NFTCallOracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: NFTCallOracleConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class NFTCallOracle__factory extends ContractFactory {
  constructor(...args: NFTCallOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = 'NFTCallOracle'
  }

  override deploy(
    newOperator: string,
    assets: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<NFTCallOracle> {
    return super.deploy(newOperator, assets, overrides || {}) as Promise<NFTCallOracle>
  }
  override getDeployTransaction(
    newOperator: string,
    assets: string[],
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(newOperator, assets, overrides || {})
  }
  override attach(address: string): NFTCallOracle {
    return super.attach(address) as NFTCallOracle
  }
  override connect(signer: Signer): NFTCallOracle__factory {
    return super.connect(signer) as NFTCallOracle__factory
  }
  static readonly contractName: 'NFTCallOracle'

  public readonly contractName: 'NFTCallOracle'

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): NFTCallOracleInterface {
    return new utils.Interface(_abi) as NFTCallOracleInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFTCallOracle {
    return new Contract(address, _abi, signerOrProvider) as NFTCallOracle
  }
}
