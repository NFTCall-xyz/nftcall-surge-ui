import { cloneDeep } from 'lodash'
import { useTranslation } from 'next-i18next'
import { useMemo } from 'react'

import { useTheme } from '@mui/material/styles'

import { createContextWithProvider } from 'app/utils/createContext'
import { safeGet } from 'app/utils/get'

import { useNFTCollections, useVault } from 'domains/data'

export type CollectionStats = {
  collectionAddress: string
  openInterest: BN
  floorPrice: BN
  floorPrice24Change: BN
  volatility: BN
  delta: BN
  utilizationRate: BN
  ratio: BN
  unrealizedPnL: BN
}
const usePageEffect = () => {
  return {}
}

const useStats = () => {
  const {
    vault: { totalTradingVolume, totalTrades, totalPremiumCollected },
    analytics: { TVL },
  } = useVault()
  const stats = useMemo(() => {
    const returnValue = {
      TVL,
      totalTradingVolume,
      totalTrades,
      totalPremiumCollected,
    }
    return returnValue
  }, [TVL, totalPremiumCollected, totalTrades, totalTradingVolume])

  return stats
}

const useCollectionStats = () => {
  const {
    analytics: { TVL },
  } = useVault()
  const { collections, displayCollections } = useNFTCollections()
  const data = useMemo(() => {
    const sourceData = cloneDeep(collections)

    return sourceData
      .filter((i) => i.status)
      .map(
        (collection) =>
          ({
            collectionAddress: collection.address.collection,
            openInterest: collection.status.openInterest,
            floorPrice: displayCollections[collection.address.collection].floorPrice,
            floorPrice24Change: displayCollections[collection.address.collection].floorPrice24Change,
            volatility: displayCollections[collection.address.collection].vol,
            delta: collection.status.delta,
            utilizationRate: safeGet(() =>
              collection.status.optionTokenTotalValue.div(TVL.times(collection.status.collectionWeight))
            ),
            ratio: safeGet(() => collection.status.putOptionAmount.div(collection.status.callOptionAmount)),
            unrealizedPnL: collection.status.unrealizedPNL,
          } as CollectionStats)
      )
  }, [TVL, collections, displayCollections])

  return {
    data,
  }
}

export default createContextWithProvider(() => {
  const theme = useTheme()
  const { t } = useTranslation('app-analytics')
  const { t: tCollectionStats } = useTranslation('app-analytics', { keyPrefix: 'collectionStats' })
  const { t: tTVLTrends } = useTranslation('app-analytics', { keyPrefix: 'TVLTrends' })
  const { t: tNcETHPriceTrends } = useTranslation('app-analytics', { keyPrefix: 'ncETHPriceTrends' })

  const stats = useStats()
  const collectionStats = useCollectionStats()
  const { analytics } = useVault()

  return {
    theme,
    t,
    tCollectionStats,
    tTVLTrends,
    tNcETHPriceTrends,

    analytics,

    stats,
    collectionStats,

    usePageEffect,
  }
})
