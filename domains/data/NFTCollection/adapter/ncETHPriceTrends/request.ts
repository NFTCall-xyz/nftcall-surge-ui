import { AnalyticsService } from 'lib/api'
import { weiToValue } from 'lib/math'

import type { GetNcETHPriceTrendsProps, NcETHPriceTrends } from './types'

export const getNcETHPriceTrends = (props: GetNcETHPriceTrendsProps): Promise<NcETHPriceTrends[]> => {
  const { chainId, startTime, endTime } = props

  return AnalyticsService.analyticsControllerGetNcEthPriceList(chainId, startTime, endTime).then((data) =>
    data.map((item) => {
      return {
        chainId,
        ncETHPrice: weiToValue(item.value, 18),
        createTime: new Date(item.time).getTime(),
      }
    })
  )
}
