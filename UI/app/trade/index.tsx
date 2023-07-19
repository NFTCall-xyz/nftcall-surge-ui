import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import { useIsDownLg } from 'app/hooks/useIsMobile'

import FloorPriceTrends from './FloorPriceTrends'
import MobileTrade from './Mobile'
import OpenOptions from './OpenOptions'
import Positions from './Positions'
import PageProvider from './Provider'
import SelectNFTCollection from './SelectNFTCollection'

export const usePageTrade = PageProvider.createUseContext()

const Trade: FC = () => {
  const isDownLg = useIsDownLg()
  const {
    usePageEffect,
    collection: {
      mobileDialog: { visible, close },
    },
  } = usePageTrade()
  usePageEffect()

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8.5} lg={9}>
          <Stack spacing={2}>
            <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} minHeight="50vh">
              {!isDownLg && <SelectNFTCollection />}
              <FloorPriceTrends />
            </Stack>
            <Positions />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3.5} lg={3}>
          <OpenOptions />
        </Grid>
      </Grid>
      <Drawer anchor="left" open={visible} onClose={close}>
        <SelectNFTCollection />
      </Drawer>
    </Box>
  )
}

export default PageProvider.withProvider(Trade, MobileTrade)
