import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import FloorPriceTrends from './FloorPriceTrends'
import OpenOptions from './OpenOptions'
import Positions from './Positions'
import PageProvider from './Provider'
import SelectNFTCollection from './SelectNFTCollection'

export const usePageTrade = PageProvider.createUseContext()

const Trade: FC = () => {
  const { usePageEffect } = usePageTrade()
  usePageEffect()

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SelectNFTCollection />
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={2}>
            <FloorPriceTrends />
            <Positions />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <OpenOptions />
        </Grid>
      </Grid>
    </Box>
  )
}

export default PageProvider.withProvider(Trade)
