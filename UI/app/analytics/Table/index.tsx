import { CardHeader, CardContent } from '@mui/material'
import Card from '@mui/material/Card'

import { H3 } from 'components/Typography'
import BasicTable from 'components/table/BasicTable'

import { usePageAnalytics } from '..'
import { useTable } from './useTable'

type PositionsProps = {}
const Positions: FC<PositionsProps> = () => {
  const table = useTable()
  const { tCollectionStats } = usePageAnalytics()

  return (
    <Card>
      <CardHeader title={<H3>{tCollectionStats('title')}</H3>} />
      <CardContent sx={{ paddingX: 3, paddingY: 0 }}>
        <BasicTable {...table} />
      </CardContent>
    </Card>
  )
}

export default Positions
