import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { differenceInDays, differenceInHours, format } from 'date-fns'
import type { Updater } from 'use-immer'

import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { Span, Tiny } from 'components/Typography'

import NFTCollectionTableComponent from 'domains/data/NFTCollection/components/NFTCollectionTableComponent'
import OptionPositionPNL from 'domains/data/optionPosition/components/OptionPositionPNL'
import OptionPositionStaus from 'domains/data/optionPosition/components/OptionPositionStaus'

import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: OptionPosition
  setRowData: Updater<OptionPosition>
  rowIndex: number
}

export const PNLCellRenderer = (props: TableCellProps) => {
  return <OptionPositionPNL {...props} />
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

export const optionTypeRenderer = ({ rowData: { optionType } }: TableCellProps) => {
  if (optionType === OptionType.LONG_CALL) {
    return (
      <TableCell align="center" component="div">
        <Stack spacing={1}>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TrendingUpOutlinedIcon color="success" />
            <Span>CALL</Span>
          </Stack>
        </Stack>
      </TableCell>
    )
  } else if (optionType === OptionType.LONG_PUT) {
    return (
      <TableCell align="left" component="div">
        <Stack spacing={1}>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TrendingDownOutlinedIcon color="error" />
            <Span>PUT</Span>
          </Stack>
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

export const statusCellRenderer = (props: TableCellProps) => {
  return <OptionPositionStaus {...props} />
}

export const NFTCollectionRenderer = ({ cellData }: TableCellProps) => {
  return <NFTCollectionTableComponent nftAddress={cellData} />
}
