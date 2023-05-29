import Stack from '@mui/material/Stack'

import PageProvider from './Provider'

export const usePageTrade = PageProvider.createUseContext()

const Trade: FC = () => {
  const { usePageEffect } = usePageTrade()
  usePageEffect()

  return <Stack spacing={4}></Stack>
}

export default PageProvider.withProvider(Trade)
