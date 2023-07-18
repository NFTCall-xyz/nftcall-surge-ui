import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'

import { usePageTradeOpenOptions } from '.'

const DisplayAdjustedVolatility: FC = () => {
  const { premium, vol, tOpenCallOptions } = usePageTradeOpenOptions()

  return (
    <FlexBetween>
      <Box>
        <Span color="text.secondary">{tOpenCallOptions('adjustedVolatility')}</Span>
      </Box>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        {premium.loading ? <CircularProgress size={14} /> : <NumberDisplay value={vol} options="percent" />}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayAdjustedVolatility
