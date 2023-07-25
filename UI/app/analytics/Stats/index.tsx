import type { FC } from 'react'

import { Grid, Stack } from '@mui/material'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageAnalytics } from '..'
import StatsCard from './StatsCard'

const Stats: FC = () => {
  const { stats } = usePageAnalytics()
  const cardList = [
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'WETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.TVL} abbreviate={{}} />
        </Stack>
      ),
      title: 'TVL',
    },
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'WETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.totalTradingVolume} abbreviate={{}} />
        </Stack>
      ),
      title: 'totalTradingVolume',
    },
    {
      price: (
        <div>
          <NumberDisplay value={stats.totalTrades} options="number" />
        </div>
      ),
      title: 'totalTrades',
    },
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'WETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.totalPremiumCollected} abbreviate={{}} />
        </Stack>
      ),
      title: 'totalPremiumCollected',
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
