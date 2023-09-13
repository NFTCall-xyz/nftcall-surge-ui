import { utils } from 'ethers'

import { getOpenSeaMainNetworkAddress } from 'app/constant/openSea'

import type { CollectionName } from 'lib/api'
import type { AddressData } from 'lib/protocol/market'

export type MarketInfo = {
  symbol: string
}

const getMarketInfo = (id: CollectionName): MarketInfo => {
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
  id: CollectionName
  info: MarketInfo
  address: ContractsAddress
}

export const getMarkets = (address: AddressData) => {
  return Object.keys(address.markets)
    .filter((key) => address.markets[key as 'BAYC'].OptionToken)
    .map((key) => {
      const id: CollectionName = key as any
      const info = getMarketInfo(id)
      const NFT = utils.getAddress(address[key as 'BAYC'])

      return {
        id,
        info,
        address: {
          collection: NFT,
          ethereumCollection: getOpenSeaMainNetworkAddress(NFT),
          optionToken: utils.getAddress(address.markets[id].OptionToken),
        } as ContractsAddress,
      }
    })
}
