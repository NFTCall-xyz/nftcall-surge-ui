import { AnalyticsService } from 'lib/api'
import { weiToValue } from 'lib/math'

import type { GetTVLTrendsProps, TVLTrends } from './types'

export const getTVLTrends = (props: GetTVLTrendsProps): Promise<TVLTrends[]> => {
  const { chainId, startTime, endTime } = props

  return AnalyticsService.analyticsControllerGetTvlList(chainId, startTime, endTime).then((data) =>
    data.map((item: any) => {
      return {
        chainId,
        TVL: weiToValue(item.value, 18),
        createTime: new Date(item.time).getTime(),
      }
    })
  )
}
