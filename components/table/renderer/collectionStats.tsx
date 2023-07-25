import type { CollectionStats } from 'UI/app/analytics/Provider'

import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import NFTCollectionTableComponent from 'domains/data/NFTCollection/components/NFTCollectionTableComponent'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import TokenIcon from 'lib/protocol/components/TokenIcon'

type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: CollectionStats
  rowIndex: number
}

export const NFTCollectionRenderer = ({ cellData }: TableCellProps) => {
  return <NFTCollectionTableComponent collectionAddress={cellData} />
}

export const floorPriceRenderer = ({ cellData, rowData: { floorPrice24Change } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
          <NumberDisplay value={cellData} options="number" />
        </Stack>
        <RiseOrFall value={floorPrice24Change} fontSize={14}>
          <NumberDisplay value={floorPrice24Change} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
        </RiseOrFall>
      </Stack>
    </TableCell>
  )
}
