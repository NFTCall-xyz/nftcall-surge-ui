import { useControllers, useWallet } from 'domains'
import { useCallback, useMemo } from 'react'

import { MINUTES } from 'app/constant'
import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'

import { useNetwork } from 'domains/data'

import type { TraderProps } from 'store/thegraph/trader/adapter'
import { useThegraphStateData } from 'store/thegraph/useThegraphStateData'

const useTraderSouceData = () => {
  const storeThegraphData = useThegraphStateData()
  const traderSouceData = useMemo(() => {
    const trader = storeThegraphData.trader
    return trader
  }, [storeThegraphData.trader])

  useWhyDidYouUpdate('[Vault][TraderSouceData]', [storeThegraphData.trader])
  return traderSouceData
}

const useTraderRequest = () => {
  const { thegraph } = useControllers()
  const { thegraphUrl } = useNetwork()
  const { account } = useWallet()
  const query: TraderProps = useMemo(() => ({ thegraphUrl, userAddress: account }), [account, thegraphUrl])

  thegraph.trader.usePolling(query, (query) => !query.userAddress, MINUTES)

  const updateTraders = useCallback(() => {
    thegraph.trader.polling.restart()
  }, [thegraph.trader.polling])

  return {
    updateTraders,
  }
}

export const useTraderData = () => {
  const traderSouceData = useTraderSouceData()

  const trader = useMemo(() => traderSouceData, [traderSouceData])

  useWhyDidYouUpdate('[Vault][trader]', trader)

  const { updateTraders } = useTraderRequest()

  return { trader, updateTraders }
}
