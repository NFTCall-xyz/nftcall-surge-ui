import blastSepolia from 'lib/protocol/generate/blastSepolia.json'
import { ChainId } from 'lib/wallet/constant/chains'

export type AddressData = {
  chainId: ChainId
} & typeof blastSepolia

const list: Record<ChainId, typeof blastSepolia> = {
  [ChainId.blastSepolia]: {
    ...blastSepolia,
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
  [ChainId.blastSepolia]: getMarketsData(ChainId.blastSepolia),
}

export const defaultMarket = MARKETS[ChainId.blastSepolia]
export const getAddress = (chainId: ChainId) => MARKETS[chainId] || defaultMarket
export const marktetIds = Object.keys(defaultMarket.markets)
