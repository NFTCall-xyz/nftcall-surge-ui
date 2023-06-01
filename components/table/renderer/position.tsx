import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'

import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'

type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: OptionPosition
  rowIndex: number
}

export const PNLCellRenderer = ({ rowData: { PNL, PNLRate } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div" sx={{ span: { fontSize: 14 } }}>
      <Stack spacing={1}>
        <RiseOrFall value={PNL}>
          <NumberDisplay value={PNL} abbreviate={{}} symbol={'ETH'} numberFormatOptions={{ signDisplay: 'always' }} />
        </RiseOrFall>
        <RiseOrFall value={PNLRate}>
          <NumberDisplay value={PNLRate} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
        </RiseOrFall>
      </Stack>
    </TableCell>
  )
}
