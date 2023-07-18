import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Fab from '@mui/material/Fab'
import Stack from '@mui/material/Stack'

import { useDialog } from 'app/hooks/useDialog'

import Dialog from 'components/dialog/Dialog'

import { usePageTrade } from '.'
import FloorPriceTrends from './FloorPriceTrends'
import OpenOptions from './OpenOptions'
import Positions from './Positions'
import SelectNFTCollection from './SelectNFTCollection'

const MobileTrade: FC = () => {
  const {
    usePageEffect,
    collection: {
      collection: { id },
      mobileDialog: { visible, close },
    },
  } = usePageTrade()
  usePageEffect()
  const dialog = useDialog()

  return (
    <Box>
      <Stack spacing={2}>
        <FloorPriceTrends />
        <Positions />
      </Stack>

      <Fab
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          color: 'common.white',
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.light',
          },
        }}
        size="large"
        color="primary"
        onClick={() => dialog.open()}
      >
        <ShoppingCartCheckoutIcon />
      </Fab>

      <Dialog {...{ ...dialog, title: `Open ${id} Options` }} fullScreen>
        <Box minWidth={300}>
          <OpenOptions />
        </Box>
      </Dialog>

      <Drawer anchor="left" open={visible} onClose={close}>
        <SelectNFTCollection />
      </Drawer>
    </Box>
  )
}

export default MobileTrade
