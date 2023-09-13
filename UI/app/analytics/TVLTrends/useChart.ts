import { format, isSameDay, subDays } from 'date-fns'
import { useWallet } from 'domains'
import { cloneDeep } from 'lodash'
import type { MouseEvent } from 'react'
import { useEffect } from 'react'
import { useMemo, useRef, useState } from 'react'
import { useImmer } from 'use-immer'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { DAY, getCurrentTime } from 'app/constant'
import { usePost } from 'app/hooks/request'

import { getTVLTrends } from 'domains/data/NFTCollection/adapter/TVLTrends/request'
import type { TVLTrends, TVLTrendsChartProps } from 'domains/data/NFTCollection/adapter/TVLTrends/types'

import { usePageAnalytics } from '..'

const DayButtonList = [7, 14, 30, 90]
const useDayButton = () => {
  const [value, setValue] = useState(7)
  return {
    value,
    onChange: (event: MouseEvent<HTMLElement>, newValue: number) => {
      if (newValue === null) return
      setValue(newValue)
    },
    list: DayButtonList,
  }
}

export const useChart = () => {
  const { analytics } = usePageAnalytics()
  const lineChart = useRef({ width: 0, height: 0, gradient: undefined })
  const theme = useTheme()
  const dayButton = useDayButton()
  const { chainId } = useWallet()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const { post, cancel, loading } = usePost(getTVLTrends)
  const [sourceData, setSourceData] = useImmer<TVLTrends[]>([])

  useEffect(() => {
    const endTime = getCurrentTime()
    post({
      chainId,
      startTime: endTime - 90 * DAY,
      endTime: endTime,
    }).then((data) => setSourceData(() => data))

    return () => {
      cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId])

  const data = useMemo(() => {
    if (!sourceData.length) return []
    const getMapData = () => {
      const returnValue = cloneDeep(sourceData)
      const startTime = subDays(Date.now(), dayButton.value).getTime()
      return returnValue.filter((i) => i.createTime >= startTime)
    }

    const returnValue = getMapData()

    const targetDate = returnValue[returnValue.length - 1].createTime

    if (isSameDay(targetDate, new Date())) {
      returnValue[returnValue.length - 1].TVL = analytics.TVL
    } else {
      returnValue.push({
        createTime: Date.now(),
        TVL: analytics.TVL,
      } as any)
    }

    return returnValue.map(({ createTime, TVL }) => ({ x: createTime, TVL }))
  }, [analytics.TVL, dayButton.value, sourceData])

  const props = useMemo(
    () =>
      ({
        height: matches ? 300 : 150,
        data: {
          datasets: [
            {
              label: 'TVL',
              data: data.map((i) => ({ ...i, y: i.TVL })),
              tension: 0.3,
              backgroundColor: (context) => {
                const chart = context.chart
                const { ctx, chartArea } = chart
                if (!chartArea) return null
                const chartWidth = chartArea.right - chartArea.left
                const chartHeight = chartArea.bottom - chartArea.top
                if (!chartWidth) return null
                const { width, height } = lineChart.current
                let { gradient } = lineChart.current
                if (width !== chartWidth || height !== chartHeight) {
                  gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                  gradient.addColorStop(0, 'rgb(92, 225, 230, 0)')
                  gradient.addColorStop(0.5, 'rgba(92, 225, 230, 0.1)')
                  gradient.addColorStop(1, 'rgba(92, 225, 230, 0.2)')
                  lineChart.current = {
                    width: chartWidth,
                    height: chartHeight,
                    gradient,
                  }
                }
                return gradient
              },
              fill: 'start',
              borderColor: theme.palette.primary.main,
              pointBackgroundColor: theme.palette.primary.main,
              pointRadius: (context) => {
                return context.dataset.data.length > 14 ? 0 : 3
              },
              pointHoverRadius: 6,
              pointHoverBorderColor: '#fff',
              pointHoverBorderWidth: 2,
              yAxisID: 'y',
            },
          ],
        },
        options: {
          interaction: {
            intersect: false,
            mode: 'index',
          },
          plugins: {
            legend: {
              display: true,
              labels: {
                usePointStyle: true,
                pointStyle: 'line',
              },
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  switch (context.dataset.label) {
                    case 'TVL':
                      return `${context.dataset.label}: ${context.parsed.y.toFixed(2)} ETH`
                  }
                },
                title: (context) => {
                  return `${format((context[0].raw as any).x, 'yyyy-MM-dd')}`
                },
              },
            },
          },
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
              ticks: {
                color: theme.palette.text.secondary,
              },
              grid: {
                display: false,
              },
            },
            y: {
              position: 'left',
              grace: '15%',
              grid: {
                display: true,
                color: theme.palette.grey[200],
              },
              ticks: {
                color: theme.palette.text.secondary,
                padding: matches ? 0 : 20,
              },
            },
          },
        },
      } as TVLTrendsChartProps),
    [matches, data, theme.palette.primary.main, theme.palette.text.secondary, theme.palette.grey]
  )

  return {
    props,
    loading,
    dayButton,
    currentTVL: analytics.TVL,
  }
}
