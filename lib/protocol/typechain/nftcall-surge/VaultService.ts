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
import { DEFAULT_NULL_VALUE_ON_TX } from '../commons/utils'
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
  optionType: OptionType

  strikePrice: string
  expiry: number
  amount: string
}

export interface WithdrawProps extends BaseVaultProps {
  userAddress: tEthereumAddress
  amount: string
}

export class VaultService extends BaseService<Vault> {
  provider: providers.Provider

  constructor(provider: providers.Provider) {
    super(provider, Vault__factory)
    this.provider = provider
    this.claimLPToken = this.claimLPToken.bind(this)
    this.deposit = this.deposit.bind(this)
    this.openPosition = this.openPosition.bind(this)
    this.withdraw = this.withdraw.bind(this)
  }

  public async claimLPToken(props: ClaimLPTokenProps) {
    const { Vault, userAddress } = props
    const VaultContract = this.getContractInstance(Vault)
    const txs: EthereumTransactionTypeExtended[] = []

    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => VaultContract.populateTransaction.claimLPToken(userAddress),
      from: userAddress,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })

    txs.push({
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    })

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
  }

  public async openPosition(props: OpenPositionProps) {
    const { Vault, userAddress, collectionAddress, optionType, strikePrice, expiry, amount } = props
    const VaultContract = this.getContractInstance(Vault)
    const txs: EthereumTransactionTypeExtended[] = []

    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () =>
        VaultContract.populateTransaction.openPosition(
          collectionAddress,
          userAddress,
          optionType,
          valueToWei(strikePrice, 18).toString(),
          expiry,
          valueToWei(amount, 18).toString()
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

  public async withdraw(props: WithdrawProps) {
    const {
      Vault,
      userAddress,

      amount,
    } = props
    const VaultContract = this.getContractInstance(Vault)
    const txs: EthereumTransactionTypeExtended[] = []

    const convertedAmount = amount === '-1' ? constants.MaxUint256.toString() : valueToWei(amount, 18).toString()

    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => VaultContract.populateTransaction.withdraw(convertedAmount, userAddress),
      from: userAddress,
      value: DEFAULT_NULL_VALUE_ON_TX,
    })

    txs.push({
      tx: txCallback,
      txType: eEthereumTxType.DLP,
    })

    return txs
  }
}
