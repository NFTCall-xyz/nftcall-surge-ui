import { useControllers } from 'domains'
import { useCallback, useMemo } from 'react'

import { MINUTES } from 'app/constant'
import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'

import { useNetwork } from 'domains/data'

import type { GetStoreNFTCollectionsProps } from 'store/surgeUI/getNFTCollections/adapter'
import { useSurgeUIStateData } from 'store/surgeUI/useSurgeUIStateData'

import type { NFTCollection } from '../..'
import { getCollectionInfos } from './constant/collections'

const useCollectionsSouceData = () => {
  const storeData = useSurgeUIStateData()
  const collectionInfos = useMemo(() => getCollectionInfos(), [])
  const { markets } = useNetwork()
  const collectionSouceData = useMemo(() => {
    const returnValue = markets.map((market) => {
      const { id, address } = market
      const data = storeData.getNFTCollections.find((i) => i.collectionAddress === address.NFT) || ({} as undefined)
      const info = collectionInfos[id]

      return {
        ...market,
        data,
        info,
      } as NFTCollection
    })
    return returnValue
  }, [collectionInfos, markets, storeData.getNFTCollections])

  useWhyDidYouUpdate('[Collection][CollectionsSouceData]', [markets, storeData.getNFTCollections])
  return collectionSouceData
}

const useCollectionsRequest = () => {
  const {
    contracts: { surgeUIService },
    markets,
    address: { NFTCallOracle, Vault, SurgeUI },
  } = useNetwork()
  const { surgeUI } = useControllers()
  const query: GetStoreNFTCollectionsProps = useMemo(
    () => ({
      collectionAddresses: markets.map((i) => i.address.NFT),
      oracleAddress: NFTCallOracle,
      vaultAddress: Vault,
      SurgeUI,
      surgeUIService,
    }),
    [NFTCallOracle, SurgeUI, Vault, markets, surgeUIService]
  )

  surgeUI.getNFTCollections.usePolling(query, (query) => !query.collectionAddresses.length, MINUTES)

  const updateNFTCollections = useCallback(() => {
    surgeUI.getNFTCollections.polling.restart()
  }, [surgeUI.getNFTCollections.polling])

  return {
    updateNFTCollections,
  }
}

export const useCollectionsData = () => {
  const collectionSouceData = useCollectionsSouceData()

  const collections = useMemo(() => collectionSouceData, [collectionSouceData])

  useWhyDidYouUpdate('[Collection][collections]', collections)

  const { updateNFTCollections } = useCollectionsRequest()

  return { collections, updateNFTCollections }
}
