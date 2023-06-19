import { isSameDay } from 'date-fns'
import { cloneDeep } from 'lodash'
import { useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { DAY, getCurrentTimestamp, getTimestamp } from 'app/constant'
import { usePost } from 'app/hooks/request'
import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'
import { safeGet } from 'app/utils/get'

import { toBN } from 'lib/math'

import type { NFTCollection } from '../..'
import { getFloorPriceTrends } from './request'
import type { FloorPriceTrends } from './types'

function transformData(data: FloorPriceTrends[]): Record<string, FloorPriceTrends[]> {
  const result: Record<string, FloorPriceTrends[]> = {}
  for (const item of data) {
    const key = item.MainNetworkNFT
    if (result.hasOwnProperty(key)) {
      result[key].push(cloneDeep(item))
    } else {
      result[key] = [cloneDeep(item)]
    }
  }

  return result
}

export const useFloorPrice24Change = (collections: NFTCollection[]) => {
  const { post, cancel, loading } = usePost(getFloorPriceTrends)
  const [sourceData, setSourceData] = useImmer<FloorPriceTrends[]>([])
  const NFTAddress = useMemo(
    () => collections.map((collection) => collection.address.MainNetworkNFT).join(','),
    [collections]
  )

  useEffect(() => {
    if (!NFTAddress || loading) return
    const endTimestamp = getCurrentTimestamp()
    post({
      chainId: 1,
      NFTAddress,
      startTimestamp: endTimestamp - getTimestamp(2 * DAY),
      endTimestamp,
    }).then((data) => setSourceData(() => data))

    return () => {
      cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NFTAddress])

  const value = useMemo(() => {
    if (!sourceData.length) return {} as undefined
    const tData = transformData(sourceData)
    const returnValue: Record<string, BN> = {}

    for (const key in tData) {
      const collection = collections.find((item) => item.address.MainNetworkNFT === key)
      const item = tData[key]
      const targetDate = item[item.length - 1].createTime
      if (isSameDay(targetDate, new Date())) {
        item[item.length - 1].vol = toBN(collection.data.vol)
        item[item.length - 1].floorPrice = collection.data.price
      } else {
        item.push({
          createTime: targetDate + DAY,
          floorPrice: collection.data.price,
          vol: toBN(collection.data.vol),
        } as any)
      }

      returnValue[collection.address.NFT] =
        safeGet(() => item[item.length - 1].floorPrice.div(item[item.length - 2].floorPrice).minus(1)) || toBN(0)
    }

    return returnValue
  }, [collections, sourceData])

  useWhyDidYouUpdate('[Collection][floorPrice24Change]', value)

  return { value, loading }
}
