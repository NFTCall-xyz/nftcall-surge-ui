import type { FC } from 'react'
import { Line } from 'react-chartjs-2'

import type { NcETHPriceTrendsChartProps } from 'domains/data/NFTCollection/adapter/ncETHPriceTrends/types'

const Chart: FC<NcETHPriceTrendsChartProps> = (props) => {
  return <Line {...props} />
}

export default Chart
