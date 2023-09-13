import type { providers } from 'ethers'

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
}

export class WETHService extends BaseService<MintableERC20> {
  declare provider: providers.Provider

  constructor(provider: providers.Provider) {
    super(provider, MintableERC20__factory)
    this.provider = provider
    this.mint = this.mint.bind(this)
  }

  public async mint(props: MintProps) {
    const { wETH, userAddress } = props
    const wETHContract = this.getContractInstance(wETH)
    const txs: EthereumTransactionTypeExtended[] = []

    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () => wETHContract.populateTransaction.mint(),
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
