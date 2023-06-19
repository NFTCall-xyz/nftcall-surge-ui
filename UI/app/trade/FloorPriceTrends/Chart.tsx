import type { FC } from 'react'
import { Line } from 'react-chartjs-2'

import type { FloorPriceTrendsChartProps } from 'domains/data/NFTCollection/application/floorPrice24Change/types'

const Chart: FC<FloorPriceTrendsChartProps> = (props) => {
  return <Line {...props} />
}

export default Chart
