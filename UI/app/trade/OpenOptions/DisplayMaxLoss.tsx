import { useMemo } from 'react'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTradeOpenOptions } from '.'

const DisplayMaxLoss: FC = () => {
  const { premium, tOpenCallOptions } = usePageTradeOpenOptions()
  const value = useMemo(() => {
    if (premium.loading) return <CircularProgress size={14}/>
    return <NumberDisplay value={premium.value} />
  }, [premium.loading, premium.value])

  return (
    <FlexBetween>
      <Span color='text.secondary'>{tOpenCallOptions('maxLoss')}</Span>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
        {value}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayMaxLoss
