import type { FC } from 'react'
import { useMemo } from 'react'

import Card from '@mui/material/Card'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material/styles'

import { H2, Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'
import FlexRowAlign from 'components/flexbox/FlexRowAlign'

import type { NcETHPriceTrendsProps } from 'domains/data/NFTCollection/adapter/ncETHPriceTrends/types'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageAnalytics } from '..'
import Chart from './Chart'
import { useChart } from './useChart'

const ROOT = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
}))

const NcETHPriceTrends: FC<NcETHPriceTrendsProps> = () => {
  const { tNcETHPriceTrends } = usePageAnalytics()

  const chart = useChart()

  const chartButtons = useMemo(
    () => (
      <ToggleButtonGroup color="primary" value={chart.dayButton.value} exclusive onChange={chart.dayButton.onChange}>
        {chart.dayButton.list.map((day) => (
          <ToggleButton value={day} key={day} sx={{ fontSize: 12 }}>
            {day} {tNcETHPriceTrends('days')}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    ),
    [chart.dayButton.list, chart.dayButton.onChange, chart.dayButton.value, tNcETHPriceTrends]
  )

  return (
    <ROOT>
      <Stack spacing={3}>
        <FlexBetween>
          <Stack spacing={1}>
            <Span color="text.secondary">{tNcETHPriceTrends('title')}</Span>
            <H2>
              <Stack spacing={0.5} direction="row" alignItems="center">
                <TokenIcon symbol={'WETH'} sx={{ width: 24, height: 24 }} />
                <NumberDisplay value={chart.currentncETHPrice} abbreviate={{}} />
              </Stack>
            </H2>
          </Stack>
          {chartButtons}
        </FlexBetween>
        {chart.loading ? (
          <FlexRowAlign paddingTop={2} height={300}>
            <CircularProgress />
          </FlexRowAlign>
        ) : (
          <Chart {...chart.props} />
        )}
      </Stack>
    </ROOT>
  )
}

export default NcETHPriceTrends
