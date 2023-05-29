import { useControllers } from 'domains'
import { useCallback, useMemo } from 'react'

import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'

import { useNetwork } from 'domains/data'

import type { GetStoreNFTCollectionsProps } from 'store/surgeUI/getNFTCollections/adapter'
import { useSurgeUIStateData } from 'store/surgeUI/useSurgeUIStateData'

import type { NFTCollection } from '..'

const useCollectionSouceData = () => {
  const storeData = useSurgeUIStateData()
  const { markets } = useNetwork()
  const collectionSouceData = useMemo(() => {
    const returnValue = markets.map((market) => {
      const { address } = market
      const collection =
        storeData.getNFTCollections.find((i) => i.collectionAddress === address.NFT) || ({} as undefined)

      return {
        ...market,
        collection,
      } as NFTCollection
    })
    return returnValue
  }, [markets, storeData.getNFTCollections])

  useWhyDidYouUpdate('[Collection][CollectionSouceData]', [markets, storeData.getNFTCollections])
  return collectionSouceData
}

const useCollectionRequest = () => {
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

  surgeUI.getNFTCollections.usePolling(query, (query) => !query.collectionAddresses.length, 1000 * 60)

  const updateNFTCollections = useCallback(() => {
    surgeUI.getNFTCollections.polling.restart()
  }, [surgeUI.getNFTCollections.polling])

  return {
    updateNFTCollections,
  }
}

export const useCollectionData = () => {
  const collectionSouceData = useCollectionSouceData()

  const collection = useMemo(() => collectionSouceData, [collectionSouceData])

  useWhyDidYouUpdate('[Collection][collection]', collection)

  const { updateNFTCollections } = useCollectionRequest()

  return { collection, updateNFTCollections }
}
