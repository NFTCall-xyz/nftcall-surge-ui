import { useCallback } from 'react'

import { useVaultController } from './vault'

export const useThegraphController = () => {
  const vaultController = useVaultController()
  const updateData = useCallback(() => {}, [])
  return { vault: vaultController, updateData }
}
