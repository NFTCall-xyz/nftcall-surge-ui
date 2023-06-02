import { useMemo } from 'react'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import { OptionType } from 'lib/protocol/typechain/nftcall-surge'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTradeOpenOptions } from '.'

const DisplayMaxProfit: FC = () => {
  const { optionType, price, premium, tOpenCallOptions } = usePageTradeOpenOptions()
  const value = useMemo(() => {
    if (optionType === OptionType.LONG_CALL) {
      return 'Limitless'
    }
    if (premium.loading) return <CircularProgress size={14}/>
    return <NumberDisplay value={price ? price.minus(premium.value) : 0} />
  }, [optionType, premium.loading, premium.value, price])

  return (
    <FlexBetween>
      <Span color='text.secondary'>{tOpenCallOptions('maxProfit')}</Span>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        {value !== 'Limitless' && <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />}
        {value}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayMaxProfit
