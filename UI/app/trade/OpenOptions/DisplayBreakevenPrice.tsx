import { useMemo } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

import { usePageTradeOpenOptions } from '.'

const DisplayBreakevenPrice: FC = () => {
  const { optionType, price, premium, tOpenCallOptions, init } = usePageTradeOpenOptions()
  const value = useMemo(() => {
    if (premium.loading) return <CircularProgress size={14} />
    if (init || !premium.value) return <NumberDisplay value={0} />
    if (optionType === OptionType.LONG_CALL) {
      return <NumberDisplay value={price ? price.plus(premium.value) : 0} />
    } else {
      return <NumberDisplay value={price ? price.minus(premium.value) : 0} />
    }
  }, [init, optionType, premium.loading, premium.value, price])

  return (
    <FlexBetween>
      <Span color="text.secondary">{tOpenCallOptions('breakevenPrice')}</Span>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
        {value}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayBreakevenPrice
