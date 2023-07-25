import type { ChartProps } from 'react-chartjs-2'

export class UseTableProps {}
export type TVLTrendsProps = any
export type GetTVLTrendsProps = {
  chainId: number
  startTimestamp: number
  endTimestamp: number
}
export type TVLTrends = {
  chainId: number
  TVL: BN
  createTime: number
}
export type TVLTrendsChartProps = Omit<ChartProps<'line', any, any>, 'type'>
