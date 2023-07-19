import type { FC } from 'react'

import Stack from '@mui/material/Stack'

import { I18n } from './I18n'
import NFTCallOracle from './NFTCallOracle'
import { Protocol } from './Protocol'
import { Store } from './Store'

const Dev: FC = () => {
  return (
    <Stack spacing={2}>
      <NFTCallOracle />
      <I18n />
      <Protocol />
      <Store />
    </Stack>
  )
}

export default Dev
