/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'

import type { IVault, IVaultInterface } from '../../../contracts/interfaces/IVault'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'CollectionAlreadyExists',
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
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'DeactivatedMarket',
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
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'FrozenMarket',
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
        name: 'totalLockedAssets',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountToBeLocked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vaultLiquidity',
        type: 'uint256',
      },
    ],
    name: 'InsufficientLiquidity',
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
        name: 'collection',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'totalLockedAssets',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountToBeLocked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vaultLiquidity',
        type: 'uint256',
      },
    ],
    name: 'InsufficientLiquidityForCollection',
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
        name: 'minimumRatio',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maximumRatio',
        type: 'uint256',
      },
    ],
    name: 'InvalidCallStrikePriceRatioRange',
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
        name: 'duration',
        type: 'uint256',
      },
    ],
    name: 'InvalidDuration',
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
        name: 'minimumDuration',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maximumDuration',
        type: 'uint256',
      },
    ],
    name: 'InvalidDurationRange',
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
        name: 'minimumRatio',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maximumRatio',
        type: 'uint256',
      },
    ],
    name: 'InvalidPutStrikePriceRatioRange',
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
        name: 'strikeId',
        type: 'uint256',
      },
    ],
    name: 'InvalidStrikeId',
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
        name: 'strikePrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'entryPrice',
        type: 'uint256',
      },
    ],
    name: 'InvalidStrikePrice',
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
        name: 'keeper',
        type: 'address',
      },
    ],
    name: 'OnlyKeeper',
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
        name: 'keeper',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'payer',
        type: 'address',
      },
    ],
    name: 'OnlyKeeperOrOwnerOrPayer',
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
    ],
    name: 'OnlyUnpaused',
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
    name: 'PositionNotActive',
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
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'blockTimestamp',
        type: 'uint256',
      },
    ],
    name: 'PositionNotExpired',
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
    name: 'PremiumTooHigh',
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
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256',
      },
    ],
    name: 'PremiumTransferFailed',
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
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'revenue',
        type: 'uint256',
      },
    ],
    name: 'RevenueTransferFailed',
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
    name: 'ZeroAddress',
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'ActivateMarket',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
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
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'excessPremium',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'delta',
        type: 'int256',
      },
    ],
    name: 'ActivatePosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
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
        internalType: 'uint256',
        name: 'returnedPremium',
        type: 'uint256',
      },
    ],
    name: 'CancelPosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'weight',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'optionToken',
        type: 'address',
      },
    ],
    name: 'CreateMarket',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'strikeId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expiration',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'entryPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'strikePrice',
        type: 'uint256',
      },
    ],
    name: 'CreateStrike',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'DeactivateMarket',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'DefreezeMarket',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'strikeId',
        type: 'uint256',
      },
    ],
    name: 'DestoryStrike',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
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
        internalType: 'uint256',
        name: 'revenue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'exerciseFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'settlementPrice',
        type: 'uint256',
      },
    ],
    name: 'ExercisePosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
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
        internalType: 'uint256',
        name: 'settlementPrice',
        type: 'uint256',
      },
    ],
    name: 'ExpirePosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
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
        internalType: 'uint256',
        name: 'returnedPremium',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum FailureReason',
        name: 'reason',
        type: 'uint8',
      },
    ],
    name: 'FailPosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'FreezeMarket',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'enum OptionType',
            name: 'optionType',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'expiration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'entryPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'strikePrice',
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
            name: 'keeperFee',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct IVault.OpenPositionEventParameters',
        name: 'parameters',
        type: 'tuple',
      },
    ],
    name: 'OpenPosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'PauseVault',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'SendAssetsToLPToken',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'UnpauseVault',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minimumRatio',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maximumRatio',
        type: 'uint256',
      },
    ],
    name: 'UpdateCallStrikePriceRatioRange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minimumDuration',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maximumDuration',
        type: 'uint256',
      },
    ],
    name: 'UpdateDurationRange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'keeperAddress',
        type: 'address',
      },
    ],
    name: 'UpdateKeeper',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'lpToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newPrice',
        type: 'uint256',
      },
    ],
    name: 'UpdateLPTokenPrice',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'ratio',
        type: 'uint256',
      },
    ],
    name: 'UpdateMinimumAnnualRateOfReturnOnLockedAssets',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minimumRatio',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maximumRatio',
        type: 'uint256',
      },
    ],
    name: 'UpdatePutStrikePriceRatioRange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timeWindows',
        type: 'uint256',
      },
    ],
    name: 'UpdateTimeWindowForActivation',
    type: 'event',
  },
  {
    inputs: [],
    name: 'KEEPER_FEE',
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
    name: 'MAXIMUM_CALL_STRIKE_PRICE_RATIO',
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
    name: 'MAXIMUM_DURATION',
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
    name: 'MAXIMUM_LOCK_RATIO',
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
    name: 'MAXIMUM_PUT_STRIKE_PRICE_RATIO',
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
    name: 'MINIMUM_CALL_STRIKE_PRICE_RATIO',
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
    name: 'MINIMUM_DURATION',
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
    name: 'MINIMUM_PUT_STRIKE_PRICE_RATIO',
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
    name: 'RESERVE_RATIO',
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
    name: 'TIME_SCALE',
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
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'activateMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'activatePosition',
    outputs: [
      {
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256',
      },
      {
        internalType: 'int256',
        name: 'delta',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'weight',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'optionToken',
        type: 'address',
      },
    ],
    name: 'addMarket',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
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
        name: 'optionType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'strikePrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'adjustedVolatility',
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
    name: 'backstopPool',
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
    inputs: [
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'closePosition',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'collectUntitledAssetsFromLPToken',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'deactivateMarket',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'defreezeMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'onBehalfOf',
        type: 'address',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
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
        name: 'optionType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'strikePrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'estimatePremium',
    outputs: [
      {
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeRatio',
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
        name: 'collection',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'forceClosePendingPosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'freezeMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'isActiveMarket',
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
    inputs: [
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'isFrozenMarket',
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
    name: 'isPaused',
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
    name: 'keeper',
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
    inputs: [
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
    ],
    name: 'marketConfiguration',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'frozen',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'activated',
            type: 'bool',
          },
          {
            internalType: 'uint32',
            name: 'id',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'weight',
            type: 'uint32',
          },
          {
            internalType: 'address',
            name: 'optionToken',
            type: 'address',
          },
        ],
        internalType: 'struct IVault.CollectionConfiguration',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'markets',
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
        name: 'collection',
        type: 'address',
      },
      {
        internalType: 'enum OptionType',
        name: 'optionType',
        type: 'uint8',
      },
    ],
    name: 'maximumOptionAmount',
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
    name: 'minimumAnnualRateOfReturnOnLockedAssets',
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
        name: 'collection',
        type: 'address',
      },
      {
        internalType: 'enum OptionType',
        name: 'optionType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'strikePrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'minimumPremium',
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
        name: 'collection',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'onBehalfOf',
        type: 'address',
      },
      {
        internalType: 'enum OptionType',
        name: 'optionType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'strikePrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maximumPremium',
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
      {
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'collection',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
    ],
    name: 'positionPNLWeightedDelta',
    outputs: [
      {
        internalType: 'int256',
        name: 'unrealizePNL',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'weightedDelta',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'profitFeeRatio',
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'redeem',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'reserve',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'sendAssetsToLPToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minimumRatio',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maximumRatio',
        type: 'uint256',
      },
    ],
    name: 'setCallStrikePriceRatioRange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minimumDuration',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maximumDuration',
        type: 'uint256',
      },
    ],
    name: 'setDurationRange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'keeperAddress',
        type: 'address',
      },
    ],
    name: 'setKeeper',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'ratio',
        type: 'uint256',
      },
    ],
    name: 'setMinimumAnnualRateOfReturnOnLockedAssets',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minimumRatio',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maximumRatio',
        type: 'uint256',
      },
    ],
    name: 'setPutStrikePriceRatioRange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'timeWindows',
        type: 'uint256',
      },
    ],
    name: 'setTimeWindowForActivation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'strikeId',
        type: 'uint256',
      },
    ],
    name: 'strike',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'entryPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'strikePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'expiry',
            type: 'uint256',
          },
        ],
        internalType: 'struct Strike',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeWindowForActivation',
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
    name: 'totalAssets',
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
    name: 'totalLockedAssets',
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
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unrealizedPNL',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unrealizedPremium',
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
        name: 'collection',
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
    name: 'updateCollectionRisk',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'updateUnrealizedPNL',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

export class IVault__factory {
  static readonly abi = _abi
  static createInterface(): IVaultInterface {
    return new utils.Interface(_abi) as IVaultInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IVault {
    return new Contract(address, _abi, signerOrProvider) as IVault
  }
}
