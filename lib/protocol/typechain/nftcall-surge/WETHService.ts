import type { providers } from 'ethers'

import { valueToWei } from 'lib/math'

import BaseService from '../commons/BaseService'
import {
  type EthereumTransactionTypeExtended,
  eEthereumTxType,
  type tEthereumAddress,
  type transactionType,
} from '../commons/types'
import { DEFAULT_NULL_VALUE_ON_TX } from '../commons/utils'
import type { MintableERC20 } from './typechain'
import { MintableERC20__factory } from './typechain'

interface BaseWETHServiceProps {
  wETH: tEthereumAddress
}

export interface MintProps extends BaseWETHServiceProps {
  userAddress: tEthereumAddress
  amount: string
}

export class WETHService extends BaseService<MintableERC20> {
  provider: providers.Provider

  constructor(provider: providers.Provider) {
    super(provider, MintableERC20__factory)
    this.provider = provider
    this.mint = this.mint.bind(this)
  }

  public async mint(props: MintProps) {
    const { wETH, amount, userAddress } = props
    const wETHContract = this.getContractInstance(wETH)
    const txs: EthereumTransactionTypeExtended[] = []

    const convertedAmount = valueToWei(amount, 18).toString()

    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => wETHContract.populateTransaction.mint(convertedAmount),
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
