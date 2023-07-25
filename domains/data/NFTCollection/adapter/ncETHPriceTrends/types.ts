import type { ChartProps } from 'react-chartjs-2'

export class UseTableProps {}
export type NcETHPriceTrendsProps = any
export type GetNcETHPriceTrendsProps = {
  chainId: number
  startTimestamp: number
  endTimestamp: number
}
export type NcETHPriceTrends = {
  chainId: number
  ncETHPrice: BN
  createTime: number
}
export type NcETHPriceTrendsChartProps = Omit<ChartProps<'line', any, any>, 'type'>
