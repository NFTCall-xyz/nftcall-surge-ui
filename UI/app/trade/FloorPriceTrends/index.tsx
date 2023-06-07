import type { FC } from 'react'
import { Fragment, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { CircularProgress } from '@mui/material'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { Paragraph, Tiny } from 'components/Typography'
import FlexRowAlign from 'components/flexbox/FlexRowAlign'

import NFTCollectionTitle from 'domains/data/NFTCollection/components/NFTCollectionTitle'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import Chart from './Chart'
import type { FloorPriceTrendsProps } from './types'
import { useChart } from './useChart'

const ROOT = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
}))

const NFTCollectionInfo = styled(Stack)`
  align-items: flex-end;
`

const Right = styled('div')``

const FloorPriceTrends: FC<FloorPriceTrendsProps> = () => {
  const { t: tFloorPriceTrends } = useTranslation('app-trade', { keyPrefix: 'floorPriceTrends' })

  const chart = useChart()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('xl'))

  const collectionInfo = useMemo(
    () => (
      <NFTCollectionInfo spacing={4} direction="row">
        <NFTCollectionTitle collection={chart.collection} />
        <Stack spacing={0.5}>
          <Tiny color="text.secondary" fontWeight={400}>
            {tFloorPriceTrends('floorPrice')}
          </Tiny>
          <Paragraph component="div">
            <Stack spacing={0.5} direction="row" alignItems="center">
              <TokenIcon symbol="ETH" sx={{ width: 16, height: 16 }} />
              <NumberDisplay value={chart.currentFloorPrice} options="number" />
            </Stack>
          </Paragraph>
        </Stack>
        <Stack spacing={0.5}>
          <Tiny color="text.secondary" fontWeight={400}>
            {tFloorPriceTrends('change24h')}
          </Tiny>

          <RiseOrFall value={chart.change24}>
            <Paragraph component="div">
              <Stack spacing={0.5} direction="row" alignItems="center">
                <NumberDisplay
                  value={chart.change24}
                  abbreviate={{}}
                  numberFormatOptions={{ signDisplay: 'always' }}
                  options="percent"
                />
              </Stack>
            </Paragraph>
          </RiseOrFall>
        </Stack>
        <Stack spacing={0.5}>
          <Tiny color="text.secondary" fontWeight={400}>
            {tFloorPriceTrends('volatility')}
          </Tiny>
          <Paragraph component="div">
            <NumberDisplay value={chart.volatility} options="percent" />
          </Paragraph>
        </Stack>
      </NFTCollectionInfo>
    ),
    [chart, tFloorPriceTrends]
  )

  const chartButtons = useMemo(
    () => (
      <Right>
        <ToggleButtonGroup color="primary" value={chart.dayButton.value} exclusive onChange={chart.dayButton.onChange}>
          {chart.dayButton.list.map((day) => (
            <ToggleButton value={day} key={day} sx={{ fontSize: 12 }}>
              {day} {tFloorPriceTrends('days')}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Right>
    ),
    [chart.dayButton.list, chart.dayButton.onChange, chart.dayButton.value, tFloorPriceTrends]
  )

  return (
    <ROOT>
      <Stack spacing={2}>
        {matches ? (
          <Stack alignItems="center" justifyContent="space-between" direction="row">
            {collectionInfo}
            {chartButtons}
          </Stack>
        ) : (
          <Fragment>
            {collectionInfo}
            {chartButtons}
          </Fragment>
        )}
        {chart.loading ? (
          <FlexRowAlign paddingTop={2} height={100}>
            <CircularProgress />
          </FlexRowAlign>
        ) : (
          <Chart {...chart.props} />
        )}
      </Stack>
    </ROOT>
  )
}

export default FloorPriceTrends
