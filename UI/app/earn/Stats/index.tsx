import type { FC } from 'react'

import { Grid, Stack } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageEarn } from '..'
import StatsCard from './StatsCard'

const Stats: FC = () => {
  const { stats } = usePageEarn()
  const cardList = [
    {
      data: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'WETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.TVL} abbreviate={{}} />
        </Stack>
      ),
      title: 'TVL',
    },
    {
      data: (
        <div>
          {stats.APY.loading ? (
            <CircularProgress size={24} />
          ) : (
            <NumberDisplay value={stats.APY.value} options="percent" />
          )}
        </div>
      ),
      title: 'APY',
      tip: 'apyTip',
    },
    {
      data: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'WETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.ncETHPrice} abbreviate={{ maximumFractionDigits: 3 }} />
        </Stack>
      ),
      title: 'ncETHPrice',
      tip: 'ncETHTip',
    },
    {
      data: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'ncETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.ncETHTotalSupply} abbreviate={{}} />
        </Stack>
      ),
      title: 'ncETHTotalSupply',
    },
  ]

  return (
    <div>
      <Grid container spacing={2}>
        {cardList.map((card, index) => (
          <Grid item lg={3} sm={6} xs={12} key={index}>
            <StatsCard card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Stats
