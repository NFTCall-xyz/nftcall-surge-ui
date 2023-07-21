import { useWallet } from 'domains'
import { useCallback, useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { usePost } from 'app/hooks/request'

import type { BasicTableProps, TableColumnsProps } from 'components/table/BasicTable/types'
import {
  cellRenderer,
  headerRenderer,
  percentCellRenderer,
  percentRiseOrFallCellRenderer,
  tokenIconCellRenderer,
} from 'components/table/renderer'
import { traderCellRenderer } from 'components/table/renderer/position'

import { useNetwork } from 'domains/data'

import { usePageLeaderboard } from '..'
import { request } from './request'
import type { Trader } from './request/getTraders'

const pageSize = 50

export const useTable = (): BasicTableProps => {
  const { tTable } = usePageLeaderboard()

  const [data, setData] = useImmer<Trader[]>([])
  const [pageIndex, setPageIndex] = useImmer(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useImmer(false)

  const { account } = useWallet()

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
            width: 200,
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
            cellRenderer: percentCellRenderer,
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
    return skip > data.length
  }, [data.length, noMoreSourceData, skip])
  const { thegraphUrl } = useNetwork()

  const onFetch = useCallback(() => {
    return dataFetcher
      .post({
        thegraphUrl,
        userAddress: account,
      })
      .then((rowData) => {
        if (rowData.length < pageSize) setNoMoreSourceData(true)
        setData((data) => data.concat(rowData))
      })
  }, [dataFetcher, thegraphUrl, account, setNoMoreSourceData, setData])

  const loadMore = useMemo(() => {
    return {
      end,
      disabled: dataFetcher.loading,
      onLoadMore: () => {
        if (!account) return setNoMoreSourceData(true)
        if (noMoreSourceData) return Promise.resolve()
        setPageIndex(pageIndex + 1)
        return onFetch()
      },
    }
  }, [account, dataFetcher.loading, end, noMoreSourceData, onFetch, pageIndex, setNoMoreSourceData, setPageIndex])

  useEffect(() => {
    if (!account) return
    setData([])
    setPageIndex(1)
    onFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  return {
    loading: dataFetcher.loading,
    columns,
    rowKey: 'id',
    data,
    loadMore,
  }
}
