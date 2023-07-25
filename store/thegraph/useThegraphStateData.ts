import { useMemo } from 'react'

import { useAppSelector } from 'store/helpers'

import { vaultSelect } from './vault'
import { getVaultData } from './vault/adapter/getVaultData'

export const useThegraphStateData = () => {
  const vaultBaseData = useAppSelector(vaultSelect.selectData)
  const returnValue = useMemo(() => {
    return { vault: getVaultData(vaultBaseData) }
  }, [vaultBaseData])
  return returnValue
}
