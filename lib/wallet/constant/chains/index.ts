import { ArbitrumETH, ArbitrumGoerliETH } from '../currency'
import type { ChainInformation } from './types'

export const infuraId = ''
export const walletconnectId = ''

export enum ChainId {
  arbitrum = 42161,
  arbitrumGoerli = 421613,
}

export const CHAIN_INFORMATION: ChainInformation[] = [
  {
    id: ChainId.arbitrum,
    currency: ArbitrumETH,
    name: 'Arbitrum',
    explorerUrl: `https://arbiscan.io/`,
    publicJsonRPCUrl: ['https://endpoints.omniatech.io/v1/arbitrum/one/public', `https://1rpc.io/arb`],
  },
  {
    id: ChainId.arbitrumGoerli,
    currency: ArbitrumGoerliETH,
    name: 'Arbitrum Goerli',
    explorerUrl: `https://testnet.arbiscan.io/`,
    publicJsonRPCUrl: [
      'https://endpoints.omniatech.io/v1/arbitrum/goerli/public',
      `https://arbitrum-goerli.public.blastapi.io`,
    ],
  },
]

export const getChainInformationByChainId = (chainId: ChainId) => {
  return CHAIN_INFORMATION.find((chainInformation) => chainInformation.id === chainId)
}

export const CHAIN_IDS = CHAIN_INFORMATION.map((i) => i.id)
