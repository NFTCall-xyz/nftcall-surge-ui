import { utils } from 'ethers'

import { getOpenSeaMainNetworkAddress } from 'app/constant/openSea'

import type { AddressData } from 'lib/protocol/market'

export type MarketInfo = {
  symbol: string
}

const getMarketInfo = (id: string): MarketInfo => {
  switch (id) {
    default:
      return {
        symbol: 'ETH',
      }
  }
}

export type ContractsAddress = {
  collection: string
  ethereumCollection: string
  optionToken: string
}

export type Market = {
  id: string
  info: MarketInfo
  address: ContractsAddress
}

export const getMarkets = (address: AddressData) => {
  return Object.keys(address.markets)
    .filter((key) => address.markets[key as 'BAYC'].OptionToken)
    .map((key) => {
      const id = key
      const info = getMarketInfo(id)
      const NFT = utils.getAddress(address[key as 'BAYC'])

      return {
        id,
        info,
        address: {
          collection: NFT,
          ethereumCollection: getOpenSeaMainNetworkAddress(NFT),
          optionToken: utils.getAddress(address.markets[id as 'BAYC'].OptionToken),
        } as ContractsAddress,
      }
    })
}
