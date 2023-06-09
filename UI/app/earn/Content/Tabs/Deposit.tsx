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

const Deposit: FC = () => {
  const {
    theme,
    tabs: { approveDeposit, deposit, ncETHPrice, wETHBalance, wETHAllowance },
    tTabs,
  } = usePageEarn()
  const [value, setValue] = useImmer(0)
  const receiveAmount = useMemo(() => {
    return safeGet(() => toBN(value).div(ncETHPrice))
  }, [ncETHPrice, value])

  const depositAvailable = useMemo(() => {
    return safeGet(() => wETHAllowance.gt(value))
  }, [wETHAllowance, value])

  return (
    <Box paddingTop={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6.5}>
          <Box paddingRight={2}>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <FlexBetween flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'start', sm: 'center' }}>
                  <H5>Deposit Amount</H5>
                  <Tiny color="text.secondary">
                    available: {<NumberDisplay value={wETHBalance} options="number" />} WETH
                  </Tiny>
                </FlexBetween>
                <NumberInput
                  value={value}
                  onChange={(e: any) => {
                    if (e.target.value > wETHBalance.toNumber()) {
                      setValue(wETHBalance.toNumber())
                    } else {
                      setValue(e.target.value)
                    }
                  }}
                  onMax={() => {
                    setValue(wETHBalance.toNumber())
                  }}
                  endAdornment={'WETH'}
                />
              </Stack>
              <Stack spacing={2}>
                <Paragraph color="text.secondary" fontSize={14}>
                  Receive ncETH Amount
                </Paragraph>
                <Stack spacing={0.5} direction="row" alignItems="center">
                  <TokenIcon symbol={'ncETH'} sx={{ width: 16, height: 16 }} />
                  <NumberDisplay value={receiveAmount} />
                </Stack>
                <Tiny color="text.secondary">
                  1 WETH = {<NumberDisplay value={toBN(1).div(ncETHPrice)} options="number" />} ncETH
                </Tiny>
              </Stack>

              {depositAvailable ? (
                <Button
                  variant="contained"
                  disabled={!value}
                  onClick={() => {
                    deposit(value.toString())
                  }}
                >
                  {tTabs('deposit.action')}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  disabled={!value}
                  onClick={() => {
                    approveDeposit(value.toString())
                  }}
                >
                  {tTabs('approve.action')}
                </Button>
              )}
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5.5}
          sx={{
            borderLeft: { sm: `1px solid ${theme.palette.divider}` },
          }}
        >
          <Stack spacing={2} paddingX={1} sx={{ '& p': { fontSize: 14, lineHeight: 2, color: 'text.secondary' } }}>
            <Paragraph>
              Deposit WETH in exchange for ncETH, an ERC-20 token representing your ownership in the vault.
            </Paragraph>
            <Paragraph>
              Stakers receive 90% premiums from each option written on the platform in exchange for serving as the
              counterparty to all trades. ncETH accumulates these premiums in real-time.
            </Paragraph>
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

export default Deposit
