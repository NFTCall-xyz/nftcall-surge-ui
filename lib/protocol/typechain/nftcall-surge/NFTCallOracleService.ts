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
import type { NFTCallOracle } from './typechain'
import { NFTCallOracle__factory } from './typechain'

interface BaseNFTCallOracleProps {
  oracle: tEthereumAddress
}

const PRICE_DECIMALS = 2
const VOL_DECIMALS = 3
const CONFIG = {
  '0x445b465bA8E68C6f2d50C29DB5B629E40F6e9978': {
    OuterIndex: 0,
    InnerIndex: 1,
  },
  '0x88898d1596204a25C93CE4832D3fB98A99058Fe8': {
    OuterIndex: 0,
    InnerIndex: 2,
  },
}

export interface BatchSetAssetPriceProps extends BaseNFTCallOracleProps {
  userAddress: string
  collection: string
  price: string
  vol: string
}

export class NFTCallOracleService extends BaseService<NFTCallOracle> {
  declare provider: providers.Provider

  constructor(provider: providers.Provider) {
    super(provider, NFTCallOracle__factory)
    this.provider = provider
    this.setAssetPrice = this.setAssetPrice.bind(this)
  }

  public async setAssetPrice(props: BatchSetAssetPriceProps) {
    const { oracle, collection, price, vol, userAddress } = props
    const oracleContract = this.getContractInstance(oracle)

    const config = CONFIG[collection as '0x445b465bA8E68C6f2d50C29DB5B629E40F6e9978']

    const convertedPrice = valueToWei(price, PRICE_DECIMALS).toString()
    const convertedVol = valueToWei(vol, VOL_DECIMALS).toString()

    const txs: EthereumTransactionTypeExtended[] = []

    const txCallback: () => Promise<transactionType> = this.generateTxCallback({
      rawTxMethod: async () =>
        oracleContract.populateTransaction.batchSetAssetPrice(
          [config.OuterIndex],
          [
            [
              {
                price: convertedPrice,
                vol: convertedVol,
                index: config.InnerIndex,
              },
            ],
          ]
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
}
