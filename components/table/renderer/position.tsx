import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import type { Updater } from 'use-immer'

import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { Span } from 'components/Typography'

import NFTCollectionTableComponent from 'domains/data/NFTCollection/components/NFTCollectionTableComponent'
import OptionPositionExpiryDate from 'domains/data/optionPosition/components/OptionPositionExpiryDate'
import OptionPositionPNL from 'domains/data/optionPosition/components/OptionPositionPNL'
import OptionPositionPrice from 'domains/data/optionPosition/components/OptionPositionPrice'
import OptionPositionStaus from 'domains/data/optionPosition/components/OptionPositionStaus'
import OptionPositionTrader from 'domains/data/optionPosition/components/OptionPositionTrader'

import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
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

export const PriceCellRenderer = (props: TableCellProps) => {
  return <OptionPositionPrice {...props} />
}

export const expiryDateRenderer = (props: TableCellProps) => {
  return <OptionPositionExpiryDate {...props} />
}

export const optionTypeRenderer = ({ rowData: { optionType } }: TableCellProps) => {
  if (optionType === OptionType.LONG_CALL) {
    return (
      <TableCell align="center" component="div">
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TrendingUpOutlinedIcon color="success" />
          <Span>CALL</Span>
        </Stack>
      </TableCell>
    )
  } else if (optionType === OptionType.LONG_PUT) {
    return (
      <TableCell align="center" component="div">
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TrendingDownOutlinedIcon color="error" />
          <Span>PUT</Span>
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

export const NFTCollectionRenderer = ({ cellData, rowData: { positionId } }: TableCellProps) => {
  return <NFTCollectionTableComponent collectionAddress={cellData} positionId={positionId} />
}

export const traderCellRenderer = (props: TableCellProps) => {
  return <OptionPositionTrader {...props} />
}

export const winrateCellRenderer = ({ cellData }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      {toBN(cellData).isZero() ? '0%' : <NumberDisplay value={cellData} options="percent" />}
    </TableCell>
  )
}
