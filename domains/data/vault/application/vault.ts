import { useControllers, useWallet } from 'domains'
import { useCallback, useMemo } from 'react'

import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'

import { useNetwork } from 'domains/data'

import type { GetStoreVaultProps } from 'store/surgeUI/getVault/adapter'
import { useSurgeUIStateData } from 'store/surgeUI/useSurgeUIStateData'

const useVaultSouceData = () => {
  const storeData = useSurgeUIStateData()
  const vaultSouceData = useMemo(() => {
    const vault = storeData.getVault
    return vault
  }, [storeData.getVault])

  useWhyDidYouUpdate('[Vault][VaultSouceData]', [storeData.getVault])
  return vaultSouceData
}

const useVaultRequest = () => {
  const {
    contracts: { surgeUIService },
    address: { LPToken, Vault, SurgeUI, WETH },
  } = useNetwork()
  const { account } = useWallet()
  const { surgeUI } = useControllers()
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

  surgeUI.getVault.usePolling(query, (query) => !query.vaultAddress, 1000 * 60)

  const updateVaults = useCallback(() => {
    surgeUI.getVault.polling.restart()
  }, [surgeUI.getVault.polling])

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
