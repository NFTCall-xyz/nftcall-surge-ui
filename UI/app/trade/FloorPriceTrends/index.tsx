import type { FC } from 'react'
import { Fragment, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Card from '@mui/material/Card'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material/styles'

import { useIsMobile } from 'app/hooks/useIsMobile'

import { Paragraph, Tiny } from 'components/Typography'
import FlexRowAlign from 'components/flexbox/FlexRowAlign'

import type { FloorPriceTrendsProps } from 'domains/data/NFTCollection/adapter/floorPriceTrends/types'
import NFTCollectionTitle from 'domains/data/NFTCollection/components/NFTCollectionTitle'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTrade } from '..'
import Chart from './Chart'
import { useChart } from './useChart'

const ROOT = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
}))

const NFTCollectionInfo = styled(Stack)``

const Right = styled('div')``

const FloorPriceTrends: FC<FloorPriceTrendsProps> = () => {
  const {
    collection: { mobileDialog },
  } = usePageTrade()
  const { t: tFloorPriceTrends } = useTranslation('app-trade', { keyPrefix: 'floorPriceTrends' })

  const chart = useChart()
  const isMobile = useIsMobile()

  const collectionInfo = useMemo(
    () => (
      <NFTCollectionInfo
        spacing={{ xs: 2, sm: 6 }}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'start', sm: 'end' }}
      >
        <NFTCollectionTitle collection={chart.collection} />
        <Stack direction="row" spacing={4}>
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

  const openSelectNFTCollection = useMemo(() => {
    if (!isMobile) return null
    return (
      <IconButton aria-label="expand row" size="small" onClick={mobileDialog.open}>
        {mobileDialog.visible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    )
  }, [isMobile, mobileDialog.open, mobileDialog.visible])

  return (
    <ROOT>
      <Stack spacing={2}>
        {!isMobile ? (
          <Stack alignItems="center" justifyContent="space-between" direction="row">
            {collectionInfo}
            {chartButtons}
          </Stack>
        ) : (
          <Fragment>
            <Stack alignItems="center" justifyContent="space-between" direction="row">
              {collectionInfo}
              {openSelectNFTCollection}
            </Stack>
            {chartButtons}
          </Fragment>
        )}
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

export default FloorPriceTrends
