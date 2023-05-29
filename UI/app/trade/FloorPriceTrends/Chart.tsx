import type { FC } from 'react'
import { Line } from 'react-chartjs-2'

import type { FloorPriceTrendsChartProps } from './types'

const Chart: FC<FloorPriceTrendsChartProps> = (props) => {
  return <Line {...props} />
}

export default Chart
