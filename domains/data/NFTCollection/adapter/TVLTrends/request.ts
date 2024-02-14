import { weiToValue } from 'lib/math'
import { AdminAnalyticsFindAllRequestOrder, AnalyticsService } from 'lib/openapi'

import type { GetTVLTrendsProps, TVLTrends } from './types'

export const getTVLTrends = (props: GetTVLTrendsProps): Promise<TVLTrends[]> => {
  const { chainId, startTime, endTime } = props

  return AnalyticsService.findAll({
    filter: {
      chainId,
      operationTimeStart: new Date(startTime).toISOString(),
      operationTimeEnd: new Date(endTime).toISOString(),
    },
    orders: [
      {
        field: AdminAnalyticsFindAllRequestOrder.field.OPERATION_TIME,
        direction: AdminAnalyticsFindAllRequestOrder.direction.ASC,
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
        TVL: weiToValue(item.TVL, 18),
        createTime: new Date(item.operationTime).getTime(),
      }
    })
  )
}
