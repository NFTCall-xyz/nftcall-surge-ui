import { useMediaQuery, useTheme } from '@mui/material'

export const useIsMobile = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return matches
}

export const useIsDownLg = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('lg'))

  return matches
}
