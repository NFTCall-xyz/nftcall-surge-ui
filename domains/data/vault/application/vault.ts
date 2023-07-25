import { useControllers, useWallet } from 'domains'
import { useCallback, useMemo } from 'react'

import { MINUTES } from 'app/constant'
import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'

import { useNetwork } from 'domains/data'

import type { GetStoreVaultProps } from 'store/surgeUI/getVault/adapter'
import { useSurgeUIStateData } from 'store/surgeUI/useSurgeUIStateData'
import { useThegraphStateData } from 'store/thegraph/useThegraphStateData'
import type { VaultProps } from 'store/thegraph/vault/adapter'

const useVaultSouceData = () => {
  const storeSurgeUIData = useSurgeUIStateData()
  const storeThegraphData = useThegraphStateData()
  const vaultSouceData = useMemo(() => {
    const vault = storeSurgeUIData.getVault
    const vaultThegraph = storeThegraphData.vault
    return { ...vault, ...vaultThegraph }
  }, [storeSurgeUIData.getVault, storeThegraphData.vault])

  useWhyDidYouUpdate('[Vault][VaultSouceData]', [storeSurgeUIData.getVault])
  return vaultSouceData
}

const useVaultRequest = () => {
  const {
    contracts: { surgeUIService },
    address: { LPToken, Vault, SurgeUI, WETH },
    thegraphUrl,
  } = useNetwork()
  const { account } = useWallet()
  const { surgeUI, thegraph } = useControllers()
  const query: GetStoreVaultProps = useMemo(
    () => ({
      userAddress: account,
      lpTokenAddress: LPToken,
      vaultAddress: Vault,
      wETHAddress: WETH,
      SurgeUI,
      surgeUIService,
    }),
    [LPToken, SurgeUI, Vault, WETH, account, surgeUIService]
  )

  surgeUI.getVault.usePolling(query, (query) => !query.vaultAddress, MINUTES)

  const queryVault: VaultProps = useMemo(() => ({ thegraphUrl }), [thegraphUrl])
  thegraph.vault.usePolling(queryVault, (query) => !query.thegraphUrl, MINUTES)

  const updateVaults = useCallback(() => {
    surgeUI.getVault.polling.restart()
    thegraph.vault.polling.restart()
  }, [surgeUI.getVault.polling, thegraph.vault.polling])

  return {
    updateVaults,
  }
}

export const useVaultData = () => {
  const vaultSouceData = useVaultSouceData()

  const vault = useMemo(() => vaultSouceData, [vaultSouceData])

  useWhyDidYouUpdate('[Vault][vault]', vault)

  const { updateVaults } = useVaultRequest()

  return { vault, updateVaults }
}
