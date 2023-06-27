import Avatar from '@mui/material/Avatar'
import type { SxProps, Theme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'

import { getAssetInfo } from './assets-list'
import { Tooltip } from '@mui/material'

export interface TokenIconProps {
  symbol: string
  sx?: SxProps<Theme>
}

const TokenAvatar = styled(Avatar)`
  .MuiAvatar-img {
    object-fit: contain;
  }
`

const TokenIcon = ({ symbol, sx }: TokenIconProps) => {
  if (!symbol) return null
  const asset = getAssetInfo(symbol)

  return (
    <Tooltip title={symbol}>
      <TokenAvatar sx={sx} alt={symbol} src={asset.icon.src} />
    </Tooltip>
  )
}

export default TokenIcon
