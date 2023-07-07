import { getWeiToValueBN } from 'app/utils/get'

import type { GetAnalyticsBaseData } from './getGetAnalyticsBaseData'

export type GetAnalyticsData = {
  TVL: BN
  ncETHPrice: BN
}

export const getGetAnalyticsData = (getAnalyticsBaseData: GetAnalyticsBaseData): GetAnalyticsData => {
  if (!getAnalyticsBaseData) return {} as undefined
  return getWeiToValueBN(getAnalyticsBaseData, ['TVL', 'ncETHPrice'], 18)
}
