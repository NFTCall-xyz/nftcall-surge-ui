import { CollectionService } from 'lib/api'
import { toBN } from 'lib/math'

import type { CollectionsStats, GetCollectionsStatsProps } from './types'

export const getCollectionsStats = (props: GetCollectionsStatsProps): Promise<CollectionsStats[]> => {
  const { chainId, collectionNames } = props

  return CollectionService.collectionControllerGetStats(collectionNames).then((data) =>
    data.map((item) => {
      return {
        chainId,
        collectionName: item.collectionName,
        floorPrice: toBN(item.floorPrice),
        vol: toBN(item.volatility),
        changed: toBN(item.changed24h),
      }
    })
  )
}
