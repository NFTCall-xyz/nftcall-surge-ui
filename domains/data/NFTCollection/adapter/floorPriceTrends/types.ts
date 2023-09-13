import type { CollectionName } from 'lib/api'
import type { ChartProps } from 'react-chartjs-2'

export class UseTableProps {}
export type FloorPriceTrendsProps = any
export type GetFloorPriceTrendsProps = {
  chainId: number
  collectionName: CollectionName
  startTime: number
  endTime: number
}
export type FloorPriceTrends = {
  chainId: number
  collectionName: CollectionName
  floorPrice: BN
  vol: BN
  createTime: number
}
export type FloorPriceTrendsChartProps = Omit<ChartProps<'line', any, any>, 'type'>
