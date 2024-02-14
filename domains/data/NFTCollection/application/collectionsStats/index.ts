import { cloneDeep } from 'lodash'
import { useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { MINUTES } from 'app/constant'
import { usePost } from 'app/hooks/request'
import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'
import { safeGet } from 'app/utils/get'

import { toBN } from 'lib/math'
import { ChainId } from 'lib/wallet/constant/chains'

import type { NFTCollection } from '../..'
import { getCollectionsStats } from './adapter/request'
import type { CollectionsStats } from './adapter/types'

function transformData(data: CollectionsStats[]): Record<string, CollectionsStats> {
  const result: Record<string, CollectionsStats> = {}
  for (const item of data) {
    const key = item.collectionName
    result[key] = cloneDeep(item)
  }

  return result
}

export const useCollectionsStats = (collections: NFTCollection[]) => {
  const { post, cancel, loading } = usePost(getCollectionsStats)
  const [sourceData, setSourceData] = useImmer<CollectionsStats[]>([])

  useEffect(() => {
    if (loading) return
    let timer: any = 0
    const run = () => {
      post({
        chainId: ChainId.ethereum,
      }).then((data) => setSourceData(() => data))
      timer = setTimeout(() => run(), MINUTES)
    }

    run()

    return () => {
      cancel()
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const returnValue = useMemo(() => {
    const floorPrice24Change: Record<string, BN> = {}
    const apiFloorPrice: Record<string, BN> = {}
    const apiVol: Record<string, BN> = {}
    if (!sourceData.length) return { floorPrice24Change, apiFloorPrice, apiVol }

    const tData = transformData(sourceData)

    for (const key in tData) {
      const collection = collections.find((item) => item.id === key)
      const item = tData[key]

      floorPrice24Change[collection.address.collection] = safeGet(() => item.changed || toBN(0))
      apiFloorPrice[collection.address.collection] = safeGet(() => item.floorPrice || toBN(0))
      apiVol[collection.address.collection] = safeGet(() => item.vol || toBN(0))
    }

    return { floorPrice24Change, apiFloorPrice, apiVol }
  }, [collections, sourceData])

  useWhyDidYouUpdate('[Collection][CollectionsStats]', returnValue)

  return { loading, ...returnValue }
}
