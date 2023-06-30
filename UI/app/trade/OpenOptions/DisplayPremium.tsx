import { Box, Tooltip } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

import { TooltipSpan } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTradeOpenOptions } from '.'

const DisplayPremium: FC = () => {
  const { premium, tOpenCallOptions } = usePageTradeOpenOptions()

  return (
    <FlexBetween>
      <Tooltip title={tOpenCallOptions('premiumTip')}>
        <Box>
          <TooltipSpan color="text.secondary">{tOpenCallOptions('premium')}</TooltipSpan>
        </Box>
      </Tooltip>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        {premium.loading ? (
          <CircularProgress size={14} />
        ) : (
          <>
            <TokenIcon symbol="WETH" sx={{ width: 14, height: 14 }} />
            <NumberDisplay value={premium.value} options="number" numberFormatOptions={{ maximumFractionDigits: 6 }} />
          </>
        )}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayPremium
