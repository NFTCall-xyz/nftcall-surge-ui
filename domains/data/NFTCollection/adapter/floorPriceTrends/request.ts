import { weiToValue } from 'lib/math'
import { AdminBlockchainPriceFindAllRequestOrder, BlockchainPriceService } from 'lib/openapi'

import type { FloorPriceTrends, GetFloorPriceTrendsProps } from './types'

export const getFloorPriceTrends = (props: GetFloorPriceTrendsProps): Promise<FloorPriceTrends[]> => {
  const { chainId, collectionName, startTime, endTime } = props

  return BlockchainPriceService.findAll({
    filter: {
      status: '不上链',
      updateReason: '整点更新',
      collectionName,
      operationTimeStart: new Date(startTime).toISOString(),
      operationTimeEnd: new Date(endTime).toISOString(),
    },
    orders: [
      {
        field: AdminBlockchainPriceFindAllRequestOrder.field.OPERATION_TIME,
        direction: AdminBlockchainPriceFindAllRequestOrder.direction.ASC,
      },
    ],
    pagination: {
      page: 1,
      limit: 10000,
    },
  }).then(({ data }) =>
    data.map((item) => {
      return {
        chainId,
        collectionName,
        floorPrice: weiToValue(item.floorPrice, 18),
        vol: weiToValue(item.volatility, 18),
        createTime: new Date(item.operationTime).getTime(),
      }
    })
  )
}
