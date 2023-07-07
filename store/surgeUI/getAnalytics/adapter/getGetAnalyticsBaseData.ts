import { getString } from 'app/utils/get'

import type { AnalyticsStructOutput } from 'lib/protocol/typechain/nftcall-surge/typechain/contracts/SurgeUI'

export type GetAnalyticsBaseData = {
  TVL: string
  ncETHPrice: string
}

export const getGetAnalyticsBaseData = (value: AnalyticsStructOutput): GetAnalyticsBaseData => {
  return getString(value, ['TVL', 'ncETHPrice'])
}
