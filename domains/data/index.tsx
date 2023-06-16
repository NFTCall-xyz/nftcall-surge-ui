import NFTCollection, { createNFTCollectionContext } from './NFTCollection'
import NetworkProvider, { createNetworkContext } from './network'
import OptionPosition, { createOptionPositionContext } from './optionPosition'
import VaultProvider, { createVaultContext } from './vault'

const Provider: FCC = ({ children }) => {
  return (
    <NetworkProvider>
      <NFTCollection>
        <VaultProvider>
          <OptionPosition>{children}</OptionPosition>
        </VaultProvider>
      </NFTCollection>
    </NetworkProvider>
  )
}

export default Provider

export const useNetwork = createNetworkContext()
export const useVault = createVaultContext()
export const useOptionPosition = createOptionPositionContext()
export const useNFTCollections = createNFTCollectionContext()
