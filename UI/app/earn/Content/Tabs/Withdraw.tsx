import { useMemo } from 'react'
import { useImmer } from 'use-immer'

import Alert from '@mui/material/Alert'
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
    <Box paddingTop={2}>
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
                <Paragraph color="text.secondary" fontSize={14}>
                  Receive Amount
                </Paragraph>
                <Stack spacing={0.5} direction="row" alignItems="center">
                  <TokenIcon symbol={'nETH'} sx={{ width: 16, height: 16 }} />
                  <NumberDisplay value={receiveAmount} />
                </Stack>
                <Stack spacing={1}>
                  <Tiny color="text.secondary">
                    1 ETH = {<NumberDisplay value={ncETHPrice} options="number" />} ncETH
                  </Tiny>
                  <Tiny color="text.secondary">
                    Withdrawal fee: {<NumberDisplay value={withdrawalFee} options="number" />} ETH
                  </Tiny>
                </Stack>
              </Stack>

              <Button
                variant="contained"
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
          <Stack spacing={2} paddingX={1} sx={{ '& p': { fontSize: 14, lineHeight: 2, color: 'text.secondary' } }}>
            <Paragraph>Burn your ncETH in exchange for ETH/WETH.</Paragraph>
            <Paragraph>
              Please note that you will only be able to withdraw funds when the amount of available ETH in the Vault is
              sufficient, and you can only withdraw up to 50% of the available ETH in the Vault at one time.
            </Paragraph>
            <Paragraph>Available ETH refers to funds not used by current open positions.</Paragraph>
            <Alert severity="info">
              Please be aware, you can't immediately withdraw your assets within 72 hours, and withdrawal incurs a fee
              of 0.3%.
            </Alert>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Withdraw
