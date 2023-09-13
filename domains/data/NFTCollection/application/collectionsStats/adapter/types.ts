import type { CollectionName } from 'lib/api'

export type CollectionsStatsProps = any
export type GetCollectionsStatsProps = {
  chainId: number
  collectionNames: CollectionName[]
}
export type CollectionsStats = {
  chainId: number
  collectionName: CollectionName
  floorPrice: BN
  vol: BN
  changed: BN
}
