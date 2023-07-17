import type { FC } from 'react'

import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import SettingButton from 'app/setting/components/SettingButton'

import ChainButton from 'lib/wallet/components/ChainButton'
import ConnectButton from 'lib/wallet/components/ConnectButton'

import GetMockETH from './components/GetMockETH'

const ROOT = styled(Stack)`
  justify-content: right;
`
const Actions: FC = () => {
  return (
    <ROOT direction="row" spacing={2}>
      <SettingButton />
      <GetMockETH />
      <ChainButton />
      <ConnectButton />
    </ROOT>
  )
}

export default Actions
