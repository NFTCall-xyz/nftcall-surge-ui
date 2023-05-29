import { createContextWithProvider } from 'app/utils/createContext'

import type { GetNFTCollectionData } from 'store/surgeUI/getNFTCollection/adapter/getGetNFTCollectionData'

import type { Market } from '../network/adapter/markets'
import { useCollectionData } from './application/collections'

export type NFTCollection = Market & {
  collection: GetNFTCollectionData
}

const useNFTCollectionService = () => {
  const { collection, updateNFTCollections } = useCollectionData()

  return { collection, updateNFTCollections }
}
const { Provider: NFTCollectionProvider, createUseContext } = createContextWithProvider(useNFTCollectionService)
export const createNFTCollectionContext = createUseContext

export default NFTCollectionProvider
