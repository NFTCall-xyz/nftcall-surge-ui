import { useControllers } from 'domains'
import { useCallback, useMemo } from 'react'

import { MINUTES } from 'app/constant'
import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'

import { useNetwork } from 'domains/data'

import type { GetStoreAnalyticsProps } from 'store/surgeUI/getAnalytics/adapter'
import { useSurgeUIStateData } from 'store/surgeUI/useSurgeUIStateData'

const useAnalyticsSouceData = () => {
  const storeData = useSurgeUIStateData()
  const analyticsSouceData = useMemo(() => {
    const analytics = storeData.getAnalytics
    return analytics
  }, [storeData.getAnalytics])

  useWhyDidYouUpdate('[Vault][AnalyticsSouceData]', [storeData.getAnalytics])
  return analyticsSouceData
}

const useAnalyticsRequest = () => {
  const {
    contracts: { surgeUIService },
    address: { LPToken, Vault, SurgeUI },
  } = useNetwork()
  const { surgeUI } = useControllers()
  const query: GetStoreAnalyticsProps = useMemo(
    () => ({
      lpTokenAddress: LPToken,
      vaultAddress: Vault,
      SurgeUI,
      surgeUIService,
    }),
    [LPToken, SurgeUI, Vault, surgeUIService]
  )

  surgeUI.getAnalytics.usePolling(query, (query) => !query.vaultAddress, MINUTES)

  const updateAnalytics = useCallback(() => {
    surgeUI.getAnalytics.polling.restart()
  }, [surgeUI.getAnalytics.polling])

  return {
    updateAnalytics,
  }
}

export const useAnalyticsData = () => {
  const analyticsSouceData = useAnalyticsSouceData()

  const analytics = useMemo(() => analyticsSouceData, [analyticsSouceData])

  useWhyDidYouUpdate('[Vault][analytics]', analytics)

  const { updateAnalytics } = useAnalyticsRequest()

  return { analytics, updateAnalytics }
}
