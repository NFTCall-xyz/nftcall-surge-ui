import { ETH } from '../currency'
import type { ChainInformation } from './types'

export const infuraId = ''
export const walletconnectId = ''

export enum ChainId {
  ethereum = 1,
  // arbitrum = 42161,
  // arbitrumGoerli = 421613,
  blastSepolia = 168587773,
}

export const CHAIN_INFORMATION: ChainInformation[] = [
  {
    id: ChainId.ethereum,
    currency: ETH,
    name: 'Ethereum',
    explorerUrl: `https://etherscan.io`,
    publicJsonRPCUrl: [
      'https://rpc.ankr.com/eth',
      'https://cloudflare-eth.com',
      'https://rpc.flashbots.net',
      'https://ethereum.publicnode.com',
    ],
  },
  // {
  //   id: ChainId.arbitrum,
  //   currency: ArbitrumETH,
  //   name: 'Arbitrum',
  //   explorerUrl: `https://arbiscan.io/`,
  //   publicJsonRPCUrl: ['https://endpoints.omniatech.io/v1/arbitrum/one/public', `https://1rpc.io/arb`],
  // },
  // {
  //   id: ChainId.arbitrumGoerli,
  //   currency: ArbitrumGoerliETH,
  //   name: 'Arbitrum Goerli',
  //   explorerUrl: `https://testnet.arbiscan.io/`,
  //   publicJsonRPCUrl: [
  //     'https://endpoints.omniatech.io/v1/arbitrum/goerli/public',
  //     `https://arbitrum-goerli.public.blastapi.io`,
  //   ],
  // },

  {
    id: ChainId.blastSepolia,
    currency: ETH,
    name: 'Blast Sepolia',
    explorerUrl: `https://testnet.blastscan.io/`,
    publicJsonRPCUrl: ['https://sepolia.blast.io'],
  },
]

export const getChainInformationByChainId = (chainId: ChainId) => {
  return CHAIN_INFORMATION.find((chainInformation) => chainInformation.id === chainId)
}

export const CHAIN_IDS = CHAIN_INFORMATION.map((i) => i.id)
