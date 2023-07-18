import { useTranslation } from 'next-i18next'

import { useTheme } from '@mui/material/styles'

import { createContextWithProvider } from 'app/utils/createContext'

const usePageEffect = () => {
  return {}
}

export default createContextWithProvider(() => {
  const theme = useTheme()
  const { t } = useTranslation('app-leaderboard')
  const { t: tTable } = useTranslation('app-leaderboard', { keyPrefix: 'Table' })

  return {
    theme,
    t,
    tTable,

    usePageEffect,
  }
})
