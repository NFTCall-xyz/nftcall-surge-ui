import { CollectionService } from 'lib/api'
import { toBN } from 'lib/math'

import type { FloorPriceTrends, GetFloorPriceTrendsProps } from './types'

export const getFloorPriceTrends = (props: GetFloorPriceTrendsProps): Promise<FloorPriceTrends[]> => {
  const { chainId, collectionName, startTime, endTime } = props

  return CollectionService.collectionControllerGetOriginalPrice(collectionName, startTime, endTime).then((data) =>
    data.map((item) => {
      return {
        chainId,
        collectionName,
        floorPrice: toBN(item.floorPrice),
        vol: toBN(item.volatility),
        createTime: new Date(item.time).getTime(),
      }
    })
  )
}
