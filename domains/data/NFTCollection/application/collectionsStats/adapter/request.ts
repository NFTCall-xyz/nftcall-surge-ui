import { toBN } from 'lib/math'
import { ScrapedPriceService } from 'lib/openapi'

import type { CollectionsStats, GetCollectionsStatsProps } from './types'

export const getCollectionsStats = (props: GetCollectionsStatsProps): Promise<CollectionsStats[]> => {
  const { chainId } = props

  return ScrapedPriceService.getCollectionStats().then((data) =>
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
