import { useMemo } from 'react'
import { useImmer } from 'use-immer'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import { safeGet } from 'app/utils/get'

import { H5, Paragraph, Tiny } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { NumberInput } from 'lib/math/components/NumberInput'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageEarn } from '../..'

const Withdraw: FC = () => {
  const {
    theme,
    tTabs,
    tabs: { maxWithdraw, ncETHPrice, withdraw },
  } = usePageEarn()

  const [value, setValue] = useImmer(0)
  const { receiveAmount, withdrawalFee } = useMemo(() => {
    const totalAmount = safeGet(() => toBN(value).div(ncETHPrice)) || toBN(0)
    const withdrawalFee = totalAmount.multipliedBy(0.003)
    return {
      withdrawalFee,
      receiveAmount: totalAmount.minus(withdrawalFee),
    }
  }, [ncETHPrice, value])

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6.5}>
          <Box paddingRight={2}>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <FlexBetween>
                  <H5>Withdraw Amount</H5>
                  <Tiny color="text.secondary">
                    available: {<NumberDisplay value={maxWithdraw} options="number" />} ETH
                  </Tiny>
                </FlexBetween>
                <NumberInput
                  value={value}
                  onChange={(e: any) => {
                    if (e.target.value > maxWithdraw.toNumber()) {
                      setValue(maxWithdraw.toNumber())
                    } else {
                      setValue(e.target.value)
                    }
                  }}
                  onMax={() => {
                    setValue(maxWithdraw.toNumber())
                  }}
                />
              </Stack>
              <Stack spacing={2}>
                <Paragraph>Receive Amount</Paragraph>
                <Stack spacing={0.5} direction="row" alignItems="center">
                  <TokenIcon symbol={'nETH'} sx={{ width: 16, height: 16 }} />
                  <NumberDisplay value={receiveAmount} />
                </Stack>
                <Stack spacing={1}>
                  <Tiny color="text.secondary">
                    1 ETH = {<NumberDisplay value={ncETHPrice} options="number" />} nETH
                  </Tiny>
                  <Tiny color="text.secondary">
                    Withdrawal fee 0.3%: {<NumberDisplay value={withdrawalFee} options="number" />} ETH
                  </Tiny>
                </Stack>
              </Stack>

              <Button
                variant="contained"
                size="small"
                disabled={!value}
                onClick={() => {
                  withdraw(value.toString())
                }}
                sx={{ padding: '5px' }}
              >
                {tTabs('withdraw.action')}
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={5.5}
          sx={{
            borderLeft: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Stack spacing={2}>
            <Paragraph color="text.secondary">Burn your ncETH in exchange for ETH.</Paragraph>
            <Paragraph color="text.secondary">
              Please note that you will only be able to withdraw funds when the amount of available ETH in the Vault is
              sufficient. Available ETH refers to funds not used by current open positions.
            </Paragraph>
            <Paragraph color="text.secondary">Notice that withdrawal incurs a fee of 0.3%.</Paragraph>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Withdraw
