import type { Web3Provider } from '@ethersproject/providers'
import { useCallback } from 'react'

export type ERC20TokenInfo = {
  address: string
  symbol: string
  decimals: number
  image?: string
}

export const useERC20Token = (provider: Web3Provider, info: ERC20TokenInfo) => {
  const { address, symbol, decimals, image } = info

  const add = useCallback(() => {
    if (!address) return Promise.reject()
    const ethereum = window.ethereum
    console.log(ethereum)
    const checkTokenPromise = Promise.resolve()
    return checkTokenPromise.then((data: any) => {
      if (data) return Promise.resolve()
      return ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address,
            symbol,
            decimals,
            image,
          },
        } as any,
      })
    })
  }, [address, decimals, image, symbol])

  return {
    add,
  }
}
