import { BigNumber as EthersBN } from '@ethersproject/bignumber'
import { useWeb3React } from '@web3-react/core'
import type { BigNumber, providers } from 'ethers'
import { useCallback } from 'react'

import { toBN } from 'lib/math'

export type transactionType = {
  value?: string
  from?: string
  to?: string
  nonce?: number
  gasLimit?: BigNumber
  gasPrice?: BigNumber
  data?: string
  chainId?: number
}

export const useSendTransaction = () => {
  const { provider: web3Provider } = useWeb3React<providers.Web3Provider>()

  const send = useCallback(
    (extendedTxData: transactionType) => {
      const { from, ...txData } = extendedTxData
      const signer = web3Provider.getSigner(from)
      const tx = {
        ...txData,
        value: txData.value ? EthersBN.from(txData.value) : undefined,
      }

      return signer.estimateGas(tx).then((gasLimit) => {
        if (gasLimit && !gasLimit.isZero()) {
          tx.gasLimit = EthersBN.from(toBN(gasLimit).multipliedBy(2).toString())
        }
        return signer.sendTransaction(tx)
      })
    },
    [web3Provider]
  )

  return send
}

export type SendTransaction = ReturnType<typeof useSendTransaction>
