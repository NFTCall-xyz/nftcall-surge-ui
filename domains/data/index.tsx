import NFTCollection, { createNFTCollectionContext } from './NFTCollection'
import NetworkProvider, { createNetworkContext } from './network'
import VaultProvider, { createVaultContext } from './vault'

const Provider: FCC = ({ children }) => {
  return (
    <NetworkProvider>
      <NFTCollection>
        <VaultProvider>{children}</VaultProvider>
      </NFTCollection>
    </NetworkProvider>
  )
}

export default Provider

export const useNetwork = createNetworkContext()
export const useVault = createVaultContext()
export const useNFTCollections = createNFTCollectionContext()
