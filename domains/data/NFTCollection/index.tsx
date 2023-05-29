import { createContextWithProvider } from 'app/utils/createContext'

import type { GetNFTCollectionData } from 'store/surgeUI/getNFTCollection/adapter/getGetNFTCollectionData'

import type { Market } from '../network/adapter/markets'
import { useCollectionsData } from './application/collections'
import type { BaseCollection } from './application/collections/adapter/getCollection'

export type NFTCollection = Market & {
  collection: GetNFTCollectionData
  info: BaseCollection
}

const useNFTCollectionService = () => {
  const { collections, updateNFTCollections } = useCollectionsData()

  return { collections, updateNFTCollections }
}
const { Provider: NFTCollectionProvider, createUseContext } = createContextWithProvider(useNFTCollectionService)
export const createNFTCollectionContext = createUseContext

export default NFTCollectionProvider
