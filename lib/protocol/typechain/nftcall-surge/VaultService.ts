import type { providers } from 'ethers'
import { constants } from 'ethers'

import { valueToWei } from 'lib/math'

import BaseService from '../commons/BaseService'
import {
  type ApproveType,
  type EthereumTransactionTypeExtended,
  eEthereumTxType,
  type tEthereumAddress,
  type transactionType,
} from '../commons/types'
import { DEFAULT_APPROVE_AMOUNT, DEFAULT_NULL_VALUE_ON_TX } from '../commons/utils'
import type { Vault } from './typechain'
import { Vault__factory } from './typechain'

interface BaseVaultProps {
  Vault: tEthereumAddress
}

export enum OptionType {
  LONG_CALL,
  LONG_PUT,
}

export interface ClaimLPTokenProps extends BaseVaultProps {
  userAddress: tEthereumAddress
}

export interface DepositProps extends BaseVaultProps {
  userAddress: tEthereumAddress
  wETHAddress: tEthereumAddress
  lpTokenAddress: tEthereumAddress
  amount: string
  approveService: {
    approve: (args: ApproveType) => EthereumTransactionTypeExtended
    isApproved: (args: ApproveType) => Promise<boolean>
  }
}

export interface OpenPositionProps extends BaseVaultProps {
  userAddress: tEthereumAddress
  collectionAddress: tEthereumAddress
  wETHAddress: tEthereumAddress
  optionType: OptionType

  strikePrice: string
  expiry: number
  amount: string

  maximumPremium: string

  approveService: {
    approve: (args: ApproveType) => EthereumTransactionTypeExtended
    isApproved: (args: ApproveType) => Promise<boolean>
  }
}

export interface WithdrawProps extends BaseVaultProps {
  userAddress: tEthereumAddress
  lpTokenAddress: tEthereumAddress
  amount: string
  approveService: {
    approve: (args: ApproveType) => EthereumTransactionTypeExtended
    isApproved: (args: ApproveType) => Promise<boolean>
  }
}

export interface ForceClosePendingPositionProps extends BaseVaultProps {
  userAddress: tEthereumAddress
  collectionAddress: tEthereumAddress
  positionId: number
}

export interface GetAdjustedVolatilityProps extends BaseVaultProps {
  collection: string
  optionType: OptionType
  strikePrice: string
  amount: string
}

export interface GetPremiumProps extends GetAdjustedVolatilityProps {
  expiry: number
}

export interface GetPositionPNLWeightedDeltaProps extends BaseVaultProps {
  collection: string
  positionId: number
}

export class VaultService extends BaseService<Vault> {
  declare provider: providers.Provider

  constructor(provider: providers.Provider) {
    super(provider, Vault__factory)
    this.provider = provider
    this.approveDeposit = this.approveDeposit.bind(this)
    this.deposit = this.deposit.bind(this)
    this.approveOpenPosition = this.approveOpenPosition.bind(this)
    this.openPosition = this.openPosition.bind(this)
    this.withdraw = this.withdraw.bind(this)
    this.approveWithdraw = this.approveWithdraw.bind(this)
    this.forceClosePendingPosition = this.forceClosePendingPosition.bind(this)
    this.getPremium = this.getPremium.bind(this)
    this.getPositionPNLWeightedDelta = this.getPositionPNLWeightedDelta.bind(this)
    this.getAdjustedVolatility = this.getAdjustedVolatility.bind(this)
  }

  public async approveDeposit(props: DepositProps) {
    const {
      userAddress,
      wETHAddress,
      lpTokenAddress,
      approveService: { isApproved, approve },
      amount,
    } = props
    const txs: EthereumTransactionTypeExtended[] = []
    const convertedAmount = valueToWei(amount, 18).toString()

    const approveProps = {
      token: wETHAddress,
      user: userAddress,
      spender: lpTokenAddress,
      amount: convertedAmount,
    }
    const approved = await isApproved(approveProps)
    if (!approved) {
      approveProps.amount = DEFAULT_APPROVE_AMOUNT
      const approveTx: EthereumTransactionTypeExtended = approve(approveProps)
      txs.push(approveTx)
    }

    return txs
  }

  public async deposit(props: DepositProps) {
    const {
      Vault,
      userAddress,
      wETHAddress,
      lpTokenAddress,
      approveService: { isApproved, approve },
      amount,
    } = props
    const VaultContract = this.getContractInstance(Vault)
    const txs: EthereumTransactionTypeExtended[] = []
    const convertedAmount = valueToWei(amount, 18).toString()

    const approveProps = {
      token: wETHAddress,
      user: userAddress,
      spender: lpTokenAddress,
      amount: convertedAmount,
    }
    const approved = await isApproved(approveProps)
    if (!approved) {
      approveProps.amount = DEFAULT_APPROVE_AMOUNT
      const approveTx: EthereumTransactionTypeExtended = approve(approveProps)
      txs.push(approveTx)
    }

    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => VaultContract.populateTransaction.deposit(convertedAmount, userAddress),
      from: userAddress,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })

    txs.push({
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    })

    return txs
  }

  public async approveOpenPosition(props: OpenPositionProps) {
    const {
      Vault,
      userAddress,
      wETHAddress,
      maximumPremium,
      approveService: { isApproved, approve },
    } = props
    const txs: EthereumTransactionTypeExtended[] = []

    const convertedPremium = valueToWei(maximumPremium, 18).toString()
    const approveProps = {
      token: wETHAddress,
      user: userAddress,
      spender: Vault,
      amount: convertedPremium,
    }
    const approved = await isApproved(approveProps)
    if (!approved) {
      approveProps.amount = DEFAULT_APPROVE_AMOUNT
      const approveTx: EthereumTransactionTypeExtended = approve(approveProps)
      txs.push(approveTx)
    }
    return txs
  }

  public async openPosition(props: OpenPositionProps) {
    const {
      Vault,
      userAddress,
      wETHAddress,
      collectionAddress,
      optionType,
      strikePrice,
      expiry,
      amount,
      maximumPremium,
      approveService: { isApproved, approve },
    } = props
    const VaultContract = this.getContractInstance(Vault)
    const txs: EthereumTransactionTypeExtended[] = []

    const convertedPremium = valueToWei(maximumPremium, 18).toString()
    const approveProps = {
      token: wETHAddress,
      user: userAddress,
      spender: Vault,
      amount: convertedPremium,
    }
    const approved = await isApproved(approveProps)
    if (!approved) {
      approveProps.amount = DEFAULT_APPROVE_AMOUNT
      const approveTx: EthereumTransactionTypeExtended = approve(approveProps)
      txs.push(approveTx)
    }

    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () =>
        VaultContract.populateTransaction.openPosition(
          collectionAddress,
          userAddress,
          optionType,
          valueToWei(strikePrice, 18).toString(),
          expiry,
          valueToWei(amount, 18).toString(),
          convertedPremium
        ),
      from: userAddress,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })

    txs.push({
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    })

    return txs
  }

  public async approveWithdraw(props: WithdrawProps) {
    const {
      userAddress,
      lpTokenAddress,
      Vault,
      approveService: { isApproved, approve },
      amount,
    } = props
    const txs: EthereumTransactionTypeExtended[] = []
    const convertedAmount = valueToWei(amount, 18).toString()

    const approveProps = {
      token: lpTokenAddress,
      user: userAddress,
      spender: Vault,
      amount: convertedAmount,
    }

    const approved = await isApproved(approveProps)
    if (!approved) {
      approveProps.amount = DEFAULT_APPROVE_AMOUNT
      const approveTx: EthereumTransactionTypeExtended = approve(approveProps)
      txs.push(approveTx)
    }

    return txs
  }

  public async withdraw(props: WithdrawProps) {
    const {
      Vault,
      userAddress,
      lpTokenAddress,
      approveService: { isApproved, approve },
      amount,
    } = props
    const VaultContract = this.getContractInstance(Vault)
    const txs: EthereumTransactionTypeExtended[] = []

    const convertedAmount = amount === '-1' ? constants.MaxUint256.toString() : valueToWei(amount, 18).toString()

    const approveProps = {
      token: lpTokenAddress,
      user: userAddress,
      spender: Vault,
      amount: convertedAmount,
    }
    const approved = await isApproved(approveProps)
    if (!approved) {
      approveProps.amount = DEFAULT_APPROVE_AMOUNT
      const approveTx: EthereumTransactionTypeExtended = approve(approveProps)
      txs.push(approveTx)
    }

    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => VaultContract.populateTransaction.redeem(convertedAmount, userAddress),
      from: userAddress,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })

    txs.push({
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    })

    return txs
  }

  public async forceClosePendingPosition(props: ForceClosePendingPositionProps) {
    const { Vault, collectionAddress, positionId, userAddress } = props
    const VaultContract = this.getContractInstance(Vault)
    const txs: EthereumTransactionTypeExtended[] = []

    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () =>
        VaultContract.populateTransaction.forceClosePendingPosition(collectionAddress, positionId),
      from: userAddress,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })

    txs.push({
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    })

    return txs
  }

  public async getPremium(props: GetPremiumProps) {
    const { Vault, collection, optionType, strikePrice, expiry, amount } = props
    const VaultContract = this.getContractInstance(Vault)
    return await VaultContract.estimatePremium(collection, optionType, strikePrice, expiry, amount)
  }

  public async getPositionPNLWeightedDelta(props: GetPositionPNLWeightedDeltaProps) {
    const { Vault, collection, positionId } = props
    const VaultContract = this.getContractInstance(Vault)
    return await VaultContract.positionPNLWeightedDelta(collection, positionId)
  }

  public async getAdjustedVolatility(props: GetAdjustedVolatilityProps) {
    const { Vault, collection, optionType, strikePrice, amount } = props
    const VaultContract = this.getContractInstance(Vault)
    return await VaultContract.adjustedVolatility(collection, optionType, strikePrice, amount)
  }
}
