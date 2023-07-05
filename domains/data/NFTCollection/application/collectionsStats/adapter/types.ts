export type CollectionsStatsProps = any
export type GetCollectionsStatsProps = {
  chainId: number
  NFTAddress: string
}
export type CollectionsStats = {
  chainId: number
  NFTAddress: string
  MainNetworkNFT: string
  floorPrice: BN
  vol: BN
  changed: BN
}
