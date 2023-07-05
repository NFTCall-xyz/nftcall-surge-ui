import { useMemo } from 'react'

import { createContextWithProvider } from 'app/utils/createContext'

import type { GetNFTCollectionData } from 'store/surgeUI/getNFTCollection/adapter/getGetNFTCollectionData'

import type { Market } from '../network/adapter/markets'
import { useCollectionsData } from './application/collections'
import type { BaseCollection } from './application/collections/adapter/getCollection'
import { useCollectionsStats } from './application/collectionsStats'

export type NFTCollection = Market & {
  data: GetNFTCollectionData
  info: BaseCollection
}

const useNFTCollectionService = () => {
  const { collections, updateNFTCollections } = useCollectionsData()
  const collectionsStats = useCollectionsStats(collections)

  const displayCollections = useMemo(() => {
    const { apiFloorPrice, apiVol } = collectionsStats
    return collections.reduce((obj, collection) => {
      const {
        address,
        data: { price, vol },
      } = collection
      obj[address.collection] = {
        floorPrice: apiFloorPrice[address.collection] || price,
        vol: apiVol[address.collection] || vol,
      }
      return obj
    }, {} as Record<string, { floorPrice: BN; vol: BN }>)
  }, [collections, collectionsStats])

  return { collections, updateNFTCollections, collectionsStats, displayCollections }
}
const { Provider: NFTCollectionProvider, createUseContext } = createContextWithProvider(useNFTCollectionService)
export const createNFTCollectionContext = createUseContext

export default NFTCollectionProvider
