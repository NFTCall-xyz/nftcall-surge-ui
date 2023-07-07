import type { GetAnalyticsProps, SurgeUIService } from 'lib/protocol/typechain/nftcall-surge'

import { getGetAnalyticsBaseData } from './getGetAnalyticsBaseData'

export type GetStoreAnalyticsProps = {
  surgeUIService: SurgeUIService
} & GetAnalyticsProps

export const getAnalyticsRequest = ({ surgeUIService, ...props }: GetStoreAnalyticsProps) => {
  return surgeUIService.getAnalytics(props).then(getGetAnalyticsBaseData)
}

export type GetAnalyticsSliceState = Awaited<ReturnType<typeof getAnalyticsRequest>>
