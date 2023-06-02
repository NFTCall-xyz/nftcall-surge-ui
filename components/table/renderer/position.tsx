import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { differenceInDays, differenceInHours, format } from 'date-fns'

import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { Span, Tiny } from 'components/Typography'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

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

export const expiryDateRenderer = ({ cellData }: TableCellProps) => {
  const expiryDiff = (() => {
    if (!cellData) return ''
    const startDate = new Date()
    const hoursDiff = differenceInHours(cellData, startDate)
    const daysDiff = differenceInDays(cellData, startDate)
    const result = `${daysDiff} days ${hoursDiff % 24} hrs later`
    return result
  })()

  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Span>{format(cellData, 'yyyy-MM-dd HH:mm')}</Span>
        <Tiny>{expiryDiff}</Tiny>
      </Stack>
    </TableCell>
  )
}

export const optionTypeRenderer = ({ rowData: { status, optionType } }: TableCellProps) => {
  if (optionType === OptionType.LONG_CALL) {
    return (
      <TableCell align="center" component="div">
        <Stack spacing={1}>
          <Span>CALL</Span>
          <Span>{status}</Span>
        </Stack>
      </TableCell>
    )
  } else if (optionType === OptionType.LONG_PUT) {
    return (
      <TableCell align="center" component="div">
        <Stack spacing={1}>
          <Span>PUT</Span>
          <Span>{status}</Span>
        </Stack>
      </TableCell>
    )
  } else {
    return (
      <TableCell align="center" component="div">
        -
      </TableCell>
    )
  }
}
