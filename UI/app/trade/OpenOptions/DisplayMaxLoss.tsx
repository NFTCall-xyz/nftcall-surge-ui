import { useMemo } from 'react'

import { Box, Tooltip } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

import { TooltipSpan } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTradeOpenOptions } from '.'

const DisplayMaxLoss: FC = () => {
  const { premium, tOpenCallOptions } = usePageTradeOpenOptions()
  const value = useMemo(() => {
    if (premium.loading) return <CircularProgress size={14} />
    return <NumberDisplay value={premium.value} numberFormatOptions={{ maximumFractionDigits: 6 }} />
  }, [premium.loading, premium.value])

  return (
    <FlexBetween>
      <Tooltip title={tOpenCallOptions('maxLossTip')}>
        <Box>
          <TooltipSpan color="text.secondary">{tOpenCallOptions('maxLoss')}</TooltipSpan>
        </Box>
      </Tooltip>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        <TokenIcon symbol="WETH" sx={{ width: 14, height: 14 }} />
        {value}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayMaxLoss
