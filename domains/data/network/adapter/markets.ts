import { utils } from 'ethers'

import type { AddressData } from 'lib/protocol/market'

export type MarketId = 'BAYC'

export type MarketInfo = {
  symbol: string
}

const getMarketInfo = (id: MarketId): MarketInfo => {
  switch (id) {
    default:
      return {
        symbol: 'ETH',
      }
  }
}

export type ContractsAddress = {
  NFT: string
  OptionToken: string
}

export type Market = {
  id: MarketId
  info: MarketInfo
  address: ContractsAddress
}

export const getMarkets = (address: AddressData) => {
  return Object.keys(address.markets)
    .filter((key) => address.markets[key as 'BAYC'].OptionToken)
    .map((key) => {
      const id: MarketId = key as any
      const info = getMarketInfo(id)

      return {
        id,
        info,
        address: {
          NFT: utils.getAddress(address[key as 'BAYC']),
          OptionToken: utils.getAddress(address.markets[id].OptionToken),
        } as ContractsAddress,
      }
    })
}
