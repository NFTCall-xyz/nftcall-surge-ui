import { useWallet } from 'domains'
import { cloneDeep } from 'lodash'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useImmer } from 'use-immer'

import { usePost } from 'app/hooks/request'

import type { BasicTableProps, TableColumnsProps } from 'components/table/BasicTable/types'
import { headerRenderer } from 'components/table/renderer'
import { numberCellRenderer, tokenIconCellRenderer } from 'components/table/renderer'
import {
  NFTCollectionRenderer,
  PNLCellRenderer,
  PriceCellRenderer,
  expiryDateRenderer,
  optionTypeRenderer,
  statusCellRenderer,
} from 'components/table/renderer/position'

import { useNetwork } from 'domains/data'

import { usePageTrade } from '../..'
import { request } from './request'

const pageSize = 5

type PositionsProps = {
  isActive: boolean
}
export const useTable = ({ isActive }: PositionsProps): BasicTableProps => {
  const { t: tOptionPositionsTable } = useTranslation('app-trade', { keyPrefix: 'OptionPositions.table' })
  const {
    positions: {
      setSourceData,
      sourceData,
      filter: { collectionAddress },
    },
  } = usePageTrade()

  const [pageIndex, setPageIndex] = useImmer(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useImmer(false)

  const { account } = useWallet()

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'collectionAddress',
            width: 350,
            headerRenderer,
            cellRenderer: NFTCollectionRenderer,
          },
          {
            dataKey: 'type',
            cellData: 'optionType',
            width: 200,
            headerRenderer,
            cellRenderer: optionTypeRenderer,
          },
          {
            dataKey: 'status',
            cellData: 'status',
            width: 200,
            headerRenderer,
            cellRenderer: statusCellRenderer,
          },
          {
            dataKey: 'size',
            cellData: 'amount',
            width: 200,
            headerRenderer,
            cellRenderer: numberCellRenderer,
          },
          {
            dataKey: 'strikePrice',
            width: 200,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: isActive ? 'oraclePrice' : 'settlementPrice',
            width: 200,
            headerRenderer,
            cellRenderer: PriceCellRenderer,
          },
          {
            dataKey: 'expiryDate',
            cellData: 'expiration',
            width: 350,
            headerRenderer,
            cellRenderer: expiryDateRenderer,
          },
          {
            dataKey: 'premium',
            width: 200,
            headerRenderer,
            cellRenderer: tokenIconCellRenderer,
          },
          {
            dataKey: 'PNL',
            width: 200,
            headerRenderer,
            cellRenderer: PNLCellRenderer,
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
          collectionAddress: collectionAddress,
          thegraphUrl,
          isActive,
        })
        .then((rowData) => {
          if (rowData.length < pageSize) setNoMoreSourceData(true)
          setSourceData((data) => data.concat(rowData))
        })
    },
    [dataFetcher, account, collectionAddress, thegraphUrl, isActive, setNoMoreSourceData, setSourceData]
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
  }, [account, collectionAddress])

  return {
    loading: dataFetcher.loading,
    columns,
    data,
    loadMore,
    rowKey: 'id',
    setData: setSourceData,
  }
}
