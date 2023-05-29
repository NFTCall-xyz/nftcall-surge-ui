import arbitrumGoerli from 'lib/protocol/generate/goerli.json'
import { ChainId } from 'lib/wallet/constant/chains'

export type AddressData = {
  chainId: ChainId
} & typeof arbitrumGoerli

const list: Record<ChainId, typeof arbitrumGoerli> = {
  [ChainId.arbitrumGoerli]: {
    ...arbitrumGoerli,
  },
} as any

const getMarketsData = (chainId: ChainId): AddressData => {
  const generateInfo = list[chainId]
  if (!generateInfo) throw new Error(`[getMarketsData] error. chainId => ${chainId}`)

  return {
    chainId,
    ...generateInfo,
  }
}

export const MARKETS: Record<number, AddressData> = {
  // [ChainId.arbitrum]: getMarketsData(ChainId.arbitrum),
  [ChainId.arbitrumGoerli]: getMarketsData(ChainId.arbitrumGoerli),
}

export const defaultMarket = MARKETS[ChainId.arbitrumGoerli]
export const getAddress = (chainId: ChainId) => MARKETS[chainId] || defaultMarket
export const marktetIds = Object.keys(defaultMarket.markets)
