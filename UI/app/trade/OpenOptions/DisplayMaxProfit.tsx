import { useMemo } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTradeOpenOptions } from '.'

const DisplayMaxProfit: FC = () => {
  const { amount, strikePrice, premium, tOpenCallOptions } = usePageTradeOpenOptions()
  const value = useMemo(() => {
    if (premium.loading) return <CircularProgress size={14} />
    return <NumberDisplay value={strikePrice ? strikePrice.value * amount.value - premium.value.toNumber() : 0} />
  }, [amount.value, premium.loading, premium.value, strikePrice])

  return (
    <FlexBetween>
      <Span color="text.secondary">{tOpenCallOptions('maxProfit')}</Span>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        <TokenIcon symbol="WETH" sx={{ width: 14, height: 14 }} />
        {value}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayMaxProfit
