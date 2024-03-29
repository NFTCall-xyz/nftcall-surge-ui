import { format } from 'date-fns'
import type { TableCellRenderer } from 'react-virtualized'

import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'
import Tooltip from '@mui/material/Tooltip'

import { Paragraph } from 'components/Typography'
import LinkToAddress from 'components/button/LinkToAddress'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import type { TableHeaderRenderer } from '../BasicTable/types'

export const headerRenderer: TableHeaderRenderer = (props) => {
  if (props.tip) return headerWithTooltipRenderer(props)
  return (
    <TableCell align="center" component="div" variant="head">
      {props.label as any}
    </TableCell>
  )
}

const headerWithTooltipRenderer: TableHeaderRenderer = ({ label, tip }) => {
  return (
    <TableCell align="center" component="div" variant="head">
      <Tooltip title={tip}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <span>{label as any}</span>
          <HelpOutlinedIcon fontSize="inherit" />
        </Stack>
      </Tooltip>
    </TableCell>
  )
}

export const cellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      {cellData || '-'}
    </TableCell>
  )
}

export const tokenIconCellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={0.5} direction="row" alignItems="center">
        <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
        <NumberDisplay value={cellData} options="number" />
      </Stack>
    </TableCell>
  )
}

export const numberCellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      <NumberDisplay value={cellData} options="number" />
    </TableCell>
  )
}

export const numberRiseOrFallCellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      <RiseOrFall value={cellData}>
        <NumberDisplay value={cellData} options="number" numberFormatOptions={{ signDisplay: 'always' }} />
      </RiseOrFall>
    </TableCell>
  )
}

export const percentCellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      <NumberDisplay value={cellData} options="percent" />
    </TableCell>
  )
}

export const percentRiseOrFallCellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      <RiseOrFall value={cellData} fontSize={14}>
        <NumberDisplay value={cellData} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
      </RiseOrFall>
    </TableCell>
  )
}

export const dateCellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      <Paragraph fontSize={14} color="text.secondary">
        {format(cellData, 'MMM dd HH:mm')}
      </Paragraph>
    </TableCell>
  )
}

export const linkToAddressCellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      <LinkToAddress address={cellData} />
    </TableCell>
  )
}
