import { createContextWithProvider } from 'app/utils/createContext'

import type { GetNFTCollectionData } from 'store/surgeUI/getNFTCollection/adapter/getGetNFTCollectionData'

import type { Market } from '../network/adapter/markets'
import { useCollectionsData } from './application/collections'
import type { BaseCollection } from './application/collections/adapter/getCollection'
import { useFloorPrice24Change } from './application/floorPrice24Change'

export type NFTCollection = Market & {
  data: GetNFTCollectionData
  info: BaseCollection
}

const useNFTCollectionService = () => {
  const { collections, updateNFTCollections } = useCollectionsData()
  const floorPrice24Change = useFloorPrice24Change(collections)

  return { collections, updateNFTCollections, floorPrice24Change }
}
const { Provider: NFTCollectionProvider, createUseContext } = createContextWithProvider(useNFTCollectionService)
export const createNFTCollectionContext = createUseContext

export default NFTCollectionProvider
