import { useMemo } from 'react'

import { Box, Tooltip } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

import { safeGet } from 'app/utils/get'

import { TooltipSpan } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import { useVault } from 'domains/data'

import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

import { usePageTradeOpenOptions } from '.'

const DisplayBreakevenPrice: FC = () => {
  const { optionType, strikePrice, premium, amount, tOpenCallOptions, init } = usePageTradeOpenOptions()
  const {
    constants: { EXERCISE_FEE_RATE },
  } = useVault()
  const value = useMemo(() => {
    if (premium.loading) return <CircularProgress size={14} />
    if (init || !premium.value) return <NumberDisplay value={0} />
    if (optionType === OptionType.LONG_CALL) {
      return (
        <NumberDisplay
          value={safeGet(() =>
            toBN(strikePrice.value).multipliedBy(EXERCISE_FEE_RATE.plus(1)).plus(premium.value.div(amount.value))
          )}
        />
      )
    } else {
      return (
        <NumberDisplay
          value={safeGet(() =>
            toBN(strikePrice.value)
              .multipliedBy(toBN(1).minus(EXERCISE_FEE_RATE))
              .minus(premium.value.div(amount.value))
          )}
        />
      )
    }
  }, [EXERCISE_FEE_RATE, amount.value, init, optionType, premium.loading, premium.value, strikePrice.value])

  return (
    <FlexBetween>
      <Tooltip title={tOpenCallOptions('breakevenPriceTip')}>
        <Box>
          <TooltipSpan color="text.secondary">{tOpenCallOptions('breakevenPrice')}</TooltipSpan>
        </Box>
      </Tooltip>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
        {value}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayBreakevenPrice
