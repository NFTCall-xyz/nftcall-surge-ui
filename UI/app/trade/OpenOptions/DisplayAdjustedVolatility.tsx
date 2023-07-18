import { Box, Tooltip } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

import { TooltipSpan } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'

import { usePageTradeOpenOptions } from '.'

const DisplayAdjustedVolatility: FC = () => {
  const { adjustedVolatility, tOpenCallOptions } = usePageTradeOpenOptions()

  return (
    <FlexBetween>
      <Tooltip title={tOpenCallOptions('adjustedVolatilityTip')}>
        <Box>
          <TooltipSpan color="text.secondary">{tOpenCallOptions('adjustedVolatility')}</TooltipSpan>
        </Box>
      </Tooltip>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        {adjustedVolatility.loading ? (
          <CircularProgress size={14} />
        ) : (
          <NumberDisplay value={adjustedVolatility.value} options="percent" />
        )}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayAdjustedVolatility
