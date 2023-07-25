import { useWallet } from 'domains'
import { useTranslation } from 'next-i18next'

import { useTheme } from '@mui/material/styles'

import { useMount } from 'app/hooks/useMount'
import { createContextWithProvider } from 'app/utils/createContext'

import { useVault } from 'domains/data'

const usePageEffect = () => {
  const { updateTrader } = useVault()
  const { account } = useWallet()

  useMount(() => {
    if (account) updateTrader()
  })

  return {}
}

export default createContextWithProvider(() => {
  const theme = useTheme()
  const { t } = useTranslation('app-leaderboard')
  const { t: tTable } = useTranslation('app-leaderboard', { keyPrefix: 'Table' })
  const { trader } = useVault()

  return {
    theme,
    t,
    tTable,

    trader,

    usePageEffect,
  }
})
