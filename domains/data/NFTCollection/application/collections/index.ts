import { useControllers } from 'domains'
import { useCallback, useMemo } from 'react'

import { MINUTES } from 'app/constant'
import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'

import { useNetwork } from 'domains/data'

import type { GetStoreNFTCollectionsProps } from 'store/surgeUI/getNFTCollections/adapter'
import type { GetStoreNFTCollectionsStausProps } from 'store/surgeUI/getNFTCollectionsStaus/adapter'
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
      const data =
        storeData.getNFTCollections.find((i) => i.collectionAddress === address.collection) || ({} as undefined)
      const info = collectionInfos[id as 'BAYC']
      const status = storeData.getNFTCollectionsStaus.find((i) => i.collectionAddress === address.collection)

      return {
        ...market,
        data,
        info,
        status,
      } as NFTCollection
    })
    return returnValue
  }, [collectionInfos, markets, storeData.getNFTCollections, storeData.getNFTCollectionsStaus])

  useWhyDidYouUpdate('[Collection][CollectionsSouceData]', [markets, storeData.getNFTCollections])
  return collectionSouceData
}

const useCollectionsRequest = () => {
  const {
    contracts: { surgeUIService },
    markets,
    address: { NFTCallOracle, Vault, SurgeUI, AssetRiskCache },
  } = useNetwork()
  const { surgeUI } = useControllers()
  const query: GetStoreNFTCollectionsProps = useMemo(
    () => ({
      collectionAddresses: markets.map((i) => i.address.collection),
      oracleAddress: NFTCallOracle,
      vaultAddress: Vault,
      SurgeUI,
      surgeUIService,
    }),
    [NFTCallOracle, SurgeUI, Vault, markets, surgeUIService]
  )

  surgeUI.getNFTCollections.usePolling(query, (query) => !query.collectionAddresses.length, MINUTES)

  const queryStaus: GetStoreNFTCollectionsStausProps = useMemo(
    () => ({
      ...query,
      riskCacheAddress: AssetRiskCache,
    }),
    [AssetRiskCache, query]
  )

  surgeUI.getNFTCollectionsStaus.usePolling(queryStaus, (query) => !query.collectionAddresses.length, 15 * MINUTES)

  const updateNFTCollections = useCallback(() => {
    surgeUI.getNFTCollections.polling.restart()
  }, [surgeUI.getNFTCollections.polling])

  const updateNFTCollectionsStaus = useCallback(() => {
    surgeUI.getNFTCollectionsStaus.polling.restart()
  }, [surgeUI.getNFTCollectionsStaus.polling])

  return {
    updateNFTCollections,
    updateNFTCollectionsStaus,
  }
}

export const useCollectionsData = () => {
  const collectionSouceData = useCollectionsSouceData()

  const collections = useMemo(() => collectionSouceData, [collectionSouceData])

  useWhyDidYouUpdate('[Collection][collections]', collections)

  const { updateNFTCollections } = useCollectionsRequest()

  return { collections, updateNFTCollections }
}
