import { useCallback } from 'react'

import { useTraderController } from './trader'
import { useVaultController } from './vault'

export const useThegraphController = () => {
  const vaultController = useVaultController()
  const traderController = useTraderController()
  const updateData = useCallback(() => {}, [])
  return { vault: vaultController, trader: traderController, updateData }
}
