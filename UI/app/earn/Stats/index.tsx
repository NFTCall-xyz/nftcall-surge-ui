import type { FC } from 'react'

import { Grid, Stack } from '@mui/material'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageEarn } from '..'
import StatsCard from './StatsCard'

const Stats: FC = () => {
  const { stats } = usePageEarn()
  const cardList = [
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.TVL} abbreviate={{}} />
        </Stack>
      ),
      title: 'TVL',
    },
    {
      price: (
        <div>
          <NumberDisplay value={stats.APY} options="percent" />
        </div>
      ),
      title: 'APY',
    },
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.ncETHPrice} abbreviate={{}} />
        </Stack>
      ),
      title: 'nETHPrice',
    },
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'nETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.ncETHTotalSupply} abbreviate={{}} />
        </Stack>
      ),
      title: 'nETHTotalSupply',
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
