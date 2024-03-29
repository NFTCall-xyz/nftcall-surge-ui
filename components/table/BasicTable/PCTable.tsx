import clsx from 'clsx'
import type { FC } from 'react'
import { useCallback, useEffect } from 'react'
import { useMemo } from 'react'
import { type Updater, useImmer } from 'use-immer'

import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'

import type { BasicTableProps } from './types'
import { getCellData } from './utils'

const Tr = (props: any) => <Card component="tr" {...props} />
const DataFetcher: FC<{
  rowIndex: any
  onRowClick: any
  row: any
  columns: any[]
  dataFetcher: (data: any) => Promise<any>
  setData?: Updater<any[]>
  rowKey?: string
  keyData?: string
}> = ({ rowIndex, onRowClick, dataFetcher, row, columns, setData, rowKey, keyData }) => {
  const [internalRowData, setInternalRowData] = useImmer(row)
  useEffect(() => {
    if (!dataFetcher) {
      setInternalRowData(row)
      return
    } else {
      dataFetcher(row).then((data) => setInternalRowData(data))
    }
  }, [dataFetcher, row, setInternalRowData])

  const setRowData = useCallback(
    (data: any) => {
      if (setData && rowKey) {
        setData((draft) => {
          const index = draft.findIndex((i) => i[rowKey] === keyData)
          if (index === -1) return
          if (typeof data === 'function') {
            draft[index] = data(draft[index])
          } else {
            draft[index] = data
          }
        })
      }

      setInternalRowData(data)
    },
    [keyData, rowKey, setData, setInternalRowData]
  )

  return (
    <TableRow
      component={Tr}
      className={clsx(['ReactVirtualized__Table__row'], {
        clickable: !!onRowClick,
      })}
      onClick={(e: any) =>
        onRowClick &&
        onRowClick({
          rowData: internalRowData,
          index: rowIndex,
          event: e,
        })
      }
    >
      {columns.map((column, columnIndex) => (
        <td
          key={rowIndex + column.dataKey}
          className="ReactVirtualized__Table__rowColumn"
          role="gridcell"
          style={{
            overflow: 'hidden',
            flex: `0 1 ${column.width}px`,
          }}
        >
          {column.cellRenderer({
            cellData: getCellData(internalRowData, column),
            columnData: column,
            columnIndex,
            dataKey: column.dataKey,
            isScrolling: false,
            rowData: internalRowData,
            setRowData,
            rowIndex,
          })}
        </td>
      ))}
    </TableRow>
  )
}

const PCTable: FC<BasicTableProps> = (props) => {
  const { columns, data, dataFetcher, rowKey, setData } = props
  const { onRowClick } = props.tableProps || {}

  const table = useMemo(() => {
    return {
      head: columns.map((column) => (
        <td
          key={column.dataKey}
          className="ReactVirtualized__Table__headerColumn"
          role="columnheader"
          style={{
            overflow: 'hidden',
            flex: `0 1 ${column.width}px`,
          }}
        >
          {column.headerRenderer(column)}
        </td>
      )),
      body: data.map((row, rowIndex) => {
        const keyData = rowKey ? row[rowKey] : rowIndex
        return (
          <DataFetcher
            key={keyData}
            {...{ rowIndex, onRowClick, dataFetcher, row, columns, setData, rowKey, keyData }}
          />
        )
      }),
    }
  }, [columns, data, dataFetcher, onRowClick, rowKey, setData])

  return (
    <ROOT className="table basic-table">
      <Table>
        <TableHead>
          <TableRow className={clsx({ ReactVirtualized__Table__headerRow: true, clickable: !!onRowClick })}>
            {table.head}
          </TableRow>
        </TableHead>
        <Stack component={TableBody} spacing={0}>
          {table.body}
        </Stack>
      </Table>
    </ROOT>
  )
}

export const ROOT = styled('div')`
  height: 100%;
  width: 100%;
  .MuiTable-root,
  .MuiTableHead-root,
  .MuiTableBody-root {
    display: block;
  }
  .ReactVirtualized__Table__headerRow,
  .ReactVirtualized__Table__rowColumn {
    display: flex;
  }
  .ReactVirtualized__Table__headerRow {
    align-items: center;
    border-bottom: solid 1px;
    ${({ theme }) => ({
      borderColor: theme.palette.divider,
    })}
  }
  .MuiTableCell-root {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    flex: 1;
  }

  .MuiTableCell-alignCenter {
    justify-content: center;
  }

  .ReactVirtualized__Table__row {
    display: flex;
    will-change: transform;
    margin-bottom: 1px;
    border: none;
    border-bottom: solid 1px;
    border-radius: 0;
    ${({ theme }) => ({
      borderColor: theme.palette.divider,
    })}
    &:hover {
      ${({ theme }) => ({
        backgroundColor: theme.palette.action.hover,
      })}
    }
    &.clickable {
      cursor: pointer;
    }
  }

  .ReactVirtualized__Table__headerColumn div {
    ${({ theme }) => ({
      color: theme.palette.text.secondary,
      fontSize: 13,
    })}
  }
`

export default PCTable
