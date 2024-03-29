export type CollectionsStatsProps = any
export type GetCollectionsStatsProps = {
  chainId: number
}
export type CollectionsStats = {
  chainId: number
  collectionName: string
  floorPrice: BN
  vol: BN
  changed: BN
}
