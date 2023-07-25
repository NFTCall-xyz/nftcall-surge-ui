import { useMemo } from 'react'

import type { BasicTableProps, TableColumnsProps } from 'components/table/BasicTable/types'
import {
  headerRenderer,
  numberCellRenderer,
  numberRiseOrFallCellRenderer,
  percentCellRenderer,
} from 'components/table/renderer'
import { NFTCollectionRenderer, floorPriceRenderer } from 'components/table/renderer/collectionStats'

import { usePageAnalytics } from '..'

export const useTable = (): BasicTableProps => {
  const {
    tCollectionStats,
    collectionStats: { data },
  } = usePageAnalytics()

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'collectionAddress',
            width: 400,
            headerRenderer,
            cellRenderer: NFTCollectionRenderer,
          },
          {
            dataKey: 'openInterest',
            width: 200,
            headerRenderer,
            cellRenderer: numberCellRenderer,
          },
          {
            dataKey: 'floorPrice',
            width: 200,
            headerRenderer,
            cellRenderer: floorPriceRenderer,
          },
          {
            dataKey: 'volatility',
            width: 200,
            headerRenderer,
            cellRenderer: percentCellRenderer,
          },
          {
            dataKey: 'delta',
            width: 200,
            headerRenderer,
            cellRenderer: numberCellRenderer,
          },
          {
            dataKey: 'utilizationRate',
            width: 200,
            headerRenderer,
            cellRenderer: percentCellRenderer,
          },
          {
            dataKey: 'leverage',
            width: 200,
            headerRenderer,
            cellRenderer: numberCellRenderer,
          },
          {
            dataKey: 'unrealizedPnL',
            width: 200,
            headerRenderer,
            cellRenderer: numberRiseOrFallCellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = tCollectionStats('table.' + column.dataKey)
        return column
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tCollectionStats]
  )

  return {
    loading: false,
    rowKey: 'collectionAddress',
    columns,
    data,
  }
}
