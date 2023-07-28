import { useMemo } from 'react'

import { useAppSelector } from 'store/helpers'

import { traderSelect } from './trader'
import { getTraderData } from './trader/adapter/getTraderData'
import { vaultSelect } from './vault'
import { getVaultData } from './vault/adapter/getVaultData'

export const useThegraphStateData = () => {
  const vaultBaseData = useAppSelector(vaultSelect.selectData)
  const traderBaseData = useAppSelector(traderSelect.selectData)
  const returnValue = useMemo(() => {
    return { vault: getVaultData(vaultBaseData), trader: getTraderData(traderBaseData) }
  }, [vaultBaseData, traderBaseData])
  return returnValue
}
