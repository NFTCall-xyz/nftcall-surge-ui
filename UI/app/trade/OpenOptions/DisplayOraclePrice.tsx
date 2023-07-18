import { Box, Tooltip } from '@mui/material'
import Stack from '@mui/material/Stack'

import { TooltipSpan } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTradeOpenOptions } from '.'

const DisplayOraclePrice: FC = () => {
  const { price, tOpenCallOptions } = usePageTradeOpenOptions()

  return (
    <FlexBetween>
      <Tooltip title={tOpenCallOptions('oraclePriceTip')}>
        <Box>
          <TooltipSpan color="text.secondary">{tOpenCallOptions('oraclePrice')}</TooltipSpan>
        </Box>
      </Tooltip>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        <TokenIcon symbol="WETH" sx={{ width: 14, height: 14 }} />
        <NumberDisplay value={price} options="number" numberFormatOptions={{ maximumFractionDigits: 6 }} />
      </Stack>
    </FlexBetween>
  )
}

export default DisplayOraclePrice
