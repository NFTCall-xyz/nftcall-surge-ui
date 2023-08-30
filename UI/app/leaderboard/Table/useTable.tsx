import { useCallback, useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { usePost } from 'app/hooks/request'

import type { BasicTableProps, TableColumnsProps } from 'components/table/BasicTable/types'
import {
  cellRenderer,
  headerRenderer,
  percentRiseOrFallCellRenderer,
  tokenIconCellRenderer,
} from 'components/table/renderer'
import { traderCellRenderer, winrateCellRenderer } from 'components/table/renderer/position'

import { useNetwork } from 'domains/data'

import type { TraderData } from 'store/thegraph/trader/adapter/getTraderData'

import { usePageLeaderboard } from '..'
import { request } from './request'

const pageSize = 50

export const useTable = (): BasicTableProps => {
  const { tTable, trader } = usePageLeaderboard()

  const [sourceData, setData] = useImmer<TraderData[]>([])
  const [pageIndex, setPageIndex] = useImmer(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useImmer(false)

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'rank',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'trader',
            cellData: 'id',
            width: 250,
            headerRenderer,
            cellRenderer: traderCellRenderer,
          },
          {
            dataKey: 'trades',
            cellData: 'totalTrades',
            width: 200,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'totalVolume',
            width: 200,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'totalPremium',
            width: 200,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'winrate',
            width: 200,
            headerRenderer,
            cellRenderer: winrateCellRenderer,
          },
          {
            dataKey: 'relativePNL',
            cellData: 'PNLRate',
            width: 200,
            headerRenderer,
            cellRenderer: percentRiseOrFallCellRenderer,
          },
          {
            dataKey: 'PNL',
            width: 200,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = tTable(column.dataKey)
        return column
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tTable]
  )
  const skip = useMemo(() => pageIndex * pageSize, [pageIndex])

  const end = useMemo(() => {
    if (!noMoreSourceData) return false
    return skip > sourceData.length
  }, [sourceData.length, noMoreSourceData, skip])
  const { thegraphUrl } = useNetwork()

  const onFetch = useCallback(() => {
    return dataFetcher
      .post({
        thegraphUrl,
      })
      .then((rowData) => {
        if (rowData.length < pageSize) setNoMoreSourceData(true)
        setData((data) => data.concat(rowData))
      })
  }, [dataFetcher, thegraphUrl, setNoMoreSourceData, setData])

  const loadMore = useMemo(() => {
    return {
      end,
      disabled: dataFetcher.loading,
      onLoadMore: () => {
        if (noMoreSourceData) return Promise.resolve()
        setPageIndex(pageIndex + 1)
        return onFetch()
      },
    }
  }, [dataFetcher.loading, end, noMoreSourceData, onFetch, pageIndex, setPageIndex])

  useEffect(() => {
    setData([])
    setPageIndex(1)
    onFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const data = useMemo(() => {
    if (trader) {
      const findUser = sourceData.find((t) => t.id === trader.id)
      if (!findUser) {
        return [
          ...sourceData,
          {
            ...trader,
            rank: 0,
          },
        ]
      }
    }
    return sourceData
  }, [sourceData, trader])

  return {
    loading: dataFetcher.loading,
    columns,
    rowKey: 'id',
    data,
    loadMore,
  }
}
