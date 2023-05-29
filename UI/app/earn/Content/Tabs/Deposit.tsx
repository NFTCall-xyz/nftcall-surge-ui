import { useMemo } from 'react'
import { useImmer } from 'use-immer'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import { safeGet } from 'app/utils/get'

import { H5, Paragraph, Tiny } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import { NumberInput } from 'lib/math/components/NumberInput'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageEarn } from '../..'

const Deposit: FC = () => {
  const {
    theme,
    tabs: { deposit, ncETHPrice, wETHBalance },
    tTabs,
  } = usePageEarn()
  const [value, setValue] = useImmer(0)
  const receiveAmount = useMemo(() => {
    return safeGet(() => ncETHPrice.multipliedBy(value))
  }, [ncETHPrice, value])

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6.5}>
          <Box paddingRight={2}>
            <Stack spacing={4}>
              <Stack spacing={2}>
                <FlexBetween>
                  <H5>Deposit Amount</H5>
                  <Tiny color="text.secondary">
                    available: {<NumberDisplay value={wETHBalance} options="number" />} ETH
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
                />
              </Stack>
              <Stack spacing={2}>
                <Paragraph>Receive Amount</Paragraph>
                <Stack spacing={0.5} direction="row" alignItems="center">
                  <TokenIcon symbol={'nETH'} sx={{ width: 16, height: 16 }} />
                  <NumberDisplay value={receiveAmount} />
                </Stack>
                <Tiny color="text.secondary">1 ETH = {<NumberDisplay value={ncETHPrice} options="number" />} nETH</Tiny>
              </Stack>

              <Button
                variant="contained"
                size="small"
                disabled={!value}
                onClick={() => {
                  deposit(value.toString())
                }}
                sx={{ padding: '5px' }}
              >
                {tTabs('deposit.action')}
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
            <Paragraph color="text.secondary">
              Deposit ETH in exchange for ncETH, an ERC-20 representing your ownership in the vault.
            </Paragraph>
            <Paragraph color="text.secondary">
              Stakers receive 90% premiums from each option written on the platform in exchange for serving as the
              counterparty to all trades.
            </Paragraph>
            <Paragraph color="text.secondary">
              nETH accumulates these premiums in real-time. Notice that withdrawal incurs a fee of 0.3%.
            </Paragraph>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Deposit
