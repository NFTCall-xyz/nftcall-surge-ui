import { useWallet } from 'domains'
import { cloneDeep } from 'lodash'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useImmer } from 'use-immer'

import { getTimestamp } from 'app/constant'
import { usePost } from 'app/hooks/request'

import type { BasicTableProps, TableColumnsProps } from 'components/table/BasicTable/types'
import { cellRenderer, headerRenderer } from 'components/table/renderer'
import { tokenIconCellRenderer } from 'components/table/renderer'

import { useNetwork } from 'domains/data'

import { usePageTrade } from '../..'
import { request } from './request'
import type { OptionPosition } from './request/getPositions'

const pageSize = 5

type PositionsProps = {
  isActive: boolean
}
export const useTable = ({ isActive }: PositionsProps): BasicTableProps => {
  const { t: tOptionPositionsTable } = useTranslation('app-trade', { keyPrefix: 'OptionPositions.table' })
  const {
    collection: { collection },
  } = usePageTrade()
  const [pageIndex, setPageIndex] = useImmer(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useImmer(false)
  const [sourceData, setSourceData] = useImmer<OptionPosition[]>([])

  const { account } = useWallet()

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'type',
            width: 250,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'size',
            width: 250,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'floorPrice',
            width: 250,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'strikePrice',
            width: 250,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'premium',
            width: 250,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'PNL',
            width: 240,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'status',
            width: 300,
            headerRenderer,
            cellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = tOptionPositionsTable(column.dataKey)
        return column
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tOptionPositionsTable]
  )
  const skip = useMemo(() => pageIndex * pageSize, [pageIndex])
  const data = useMemo(() => {
    return sourceData.map((data) => {
      const i = cloneDeep(data)
      return {
        ...i,
      }
    })
  }, [sourceData])

  const end = useMemo(() => {
    if (!noMoreSourceData) return false
    return skip > data.length
  }, [data.length, noMoreSourceData, skip])
  const { thegraphUrl } = useNetwork()

  const onFetch = useCallback(
    (pageIndex: number) => {
      return dataFetcher
        .post({
          skip: pageIndex * pageSize,
          first: pageSize,
          userAddress: account,
          thegraphUrl,
          isActive,
          nftAddress: collection.address.NFT,
          currentTimestamp: getTimestamp(Date.now()),
        })
        .then((rowData) => {
          if (rowData.length < pageSize) setNoMoreSourceData(true)
          setSourceData((data) => data.concat(rowData))
        })
    },
    [dataFetcher, account, thegraphUrl, isActive, collection.address.NFT, setNoMoreSourceData, setSourceData]
  )

  const loadMore = useMemo(() => {
    return {
      end,
      disabled: dataFetcher.loading,
      onLoadMore: () => {
        if (!account) return setNoMoreSourceData(true)
        if (noMoreSourceData) return Promise.resolve()
        setPageIndex(pageIndex + 1)
        return onFetch(pageIndex)
      },
    }
  }, [account, dataFetcher.loading, end, noMoreSourceData, onFetch, pageIndex, setNoMoreSourceData, setPageIndex])

  useEffect(() => {
    if (!account) return
    setSourceData([])
    setPageIndex(1)
    onFetch(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  return {
    loading: dataFetcher.loading,
    columns,
    data,
    loadMore,
  }
}
