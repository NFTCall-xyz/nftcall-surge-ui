import Link from 'next/link'
import { useMemo } from 'react'

import { Box, Tooltip } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

import { TooltipSpan } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import { useVault } from 'domains/data'

import { BN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTradeOpenOptions } from '.'

const DisplayMaxProfit: FC = () => {
  const { price, amount, premium, strikePrice, tOpenCallOptions } = usePageTradeOpenOptions()
  const {
    constants: { NOTIONAL_FEE_RATE, PROFIT_FEE_RATE },
  } = useVault()
  const value = useMemo(() => {
    if (premium.loading) return <CircularProgress size={14} />
    const exerciseFee = price
      ? BN.min(
          PROFIT_FEE_RATE.times(price).times(amount.value),
          NOTIONAL_FEE_RATE.times(price.plus(strikePrice.value)).times(amount.value)
        )
      : 0
    return <NumberDisplay value={price ? price.times(amount.value).minus(premium.value).minus(exerciseFee) : 0} />
  }, [NOTIONAL_FEE_RATE, PROFIT_FEE_RATE, amount.value, premium.loading, premium.value, price, strikePrice])

  return (
    <FlexBetween>
      <Tooltip
        title={
          <>
            <p>{tOpenCallOptions('maxProfitTip')}</p>
            <br />
            <p>{tOpenCallOptions('maxPayoutTip')}</p>
            <br />
            <Link
              target="_blank"
              href="https://docs.nftcall.xyz/nftcall-surge/overview/options-trading#limited-payout-for-call-options"
            >
              Learn More
            </Link>
          </>
        }
      >
        <Box>
          <TooltipSpan color="text.secondary">{tOpenCallOptions('maxProfit')}</TooltipSpan>
        </Box>
      </Tooltip>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        <TokenIcon symbol="WETH" sx={{ width: 14, height: 14 }} />
        {value}
      </Stack>
    </FlexBetween>
  )
}

export default DisplayMaxProfit
