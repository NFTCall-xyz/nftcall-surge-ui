import type { Props } from 'UI/app/leaderboard/Table/request'
import { request } from 'UI/app/leaderboard/Table/request'
import type { Trader } from 'UI/app/leaderboard/Table/request/getTraders'
import { useWallet } from 'domains'
import { useCallback, useEffect, useMemo } from 'react'
import { type Updater, useImmer } from 'use-immer'

import { usePost } from 'app/hooks/request'
import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'

import { useNetwork } from 'domains/data'

const useTraderRequest = (setTrader: Updater<Trader>) => {
  const dataFetcher = usePost(request)
  const { thegraphUrl } = useNetwork()
  const { account } = useWallet()
  const query: Props = useMemo(() => ({ thegraphUrl, userAddress: account }), [account, thegraphUrl])

  const updateTrader = useCallback(() => {
    if (!query.userAddress) return
    dataFetcher.post(query).then((data) => {
      if (data[0]) {
        setTrader(() => data[0])
      }
    })
  }, [dataFetcher, query, setTrader])

  useEffect(() => {
    updateTrader()

    return () => {
      dataFetcher.cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  return {
    updateTrader,
  }
}

export const useTraderData = () => {
  const [trader, setTrader] = useImmer<Trader>(undefined)

  useWhyDidYouUpdate('[Vault][trader]', trader)

  const { updateTrader } = useTraderRequest(setTrader)

  return { trader, updateTrader }
}