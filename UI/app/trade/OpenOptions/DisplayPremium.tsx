import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTradeOpenOptions } from '.'

const DisplayPremium: FC = () => {
  const { premium, tOpenCallOptions } = usePageTradeOpenOptions()

  return (
    <FlexBetween>
      <Span color='text.secondary'>{tOpenCallOptions('premium')}</Span>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        {premium.loading ? (
          <CircularProgress size={14}/>
        ) : (
          <>
            <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
            <NumberDisplay value={premium.value} options="number" numberFormatOptions={{ maximumFractionDigits: 6 }} />          
          </>
        )}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayPremium
