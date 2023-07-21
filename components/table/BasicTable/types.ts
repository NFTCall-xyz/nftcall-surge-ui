import type { ColumnProps, TableHeaderProps, TableProps } from 'react-virtualized'
import type { Updater } from 'use-immer'

export interface BasicTableProps<D = any> {
  loading: boolean
  columns: TableColumnsProps[]
  rowKey?: string
  setData?: Updater<D>
  rowHeight?: number
  headerHeight?: number
  data: Array<D>
  dataFetcher?: (data: D) => Promise<any>
  tableProps?: Partial<TableProps>
  pagination?: {
    count: number
    page: number
    rowsPerPage: number
    onPageChange: (event: unknown, newPage: number) => void
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
  loadMore?: {
    end: boolean
    disabled: boolean
    onLoadMore: (event: unknown) => void
  }
}

export type TableColumnsProps = ColumnProps & {
  cellData?: string
  tip?: string
  isSelect?: boolean
  selectOptions?: Record<any, string>
  filters?: Array<(...args: any[]) => any>
}

export type TableHeaderRenderer = (
  props: TableHeaderProps & {
    tip?: string
  }
) => React.ReactNode
