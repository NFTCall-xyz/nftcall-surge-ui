import { Box } from '@mui/material'
import Stack from '@mui/material/Stack'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTradeOpenOptions } from '.'

const DisplayOraclePrice: FC = () => {
  const { price, tOpenCallOptions } = usePageTradeOpenOptions()

  return (
    <FlexBetween>
      <Box>
        <Span color="text.secondary">{tOpenCallOptions('oraclePrice')}</Span>
      </Box>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        <TokenIcon symbol="WETH" sx={{ width: 14, height: 14 }} />
        <NumberDisplay value={price} options="number" numberFormatOptions={{ maximumFractionDigits: 6 }} />
      </Stack>
    </FlexBetween>
  )
}

export default DisplayOraclePrice
