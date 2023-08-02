import { requestPositionId } from 'UI/app/trade/Positions/Table/request'
import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { differenceInDays, differenceInHours, differenceInMinutes, format } from 'date-fns'
import { useNotification, useWallet } from 'domains'
import { useEffect } from 'react'
import { type Updater, useImmer } from 'use-immer'

import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { SECONDS } from 'app/constant'
import { usePost } from 'app/hooks/request'

import { Span, Tiny } from 'components/Typography'

import { useNetwork } from 'domains/data'
import { ListeningType } from 'domains/notification/application/optionPosition'

import { OptionPositionStatus } from 'lib/graphql/option-position'

type OptionPositionExpiryDateProps = {
  rowData: OptionPosition
  setRowData: Updater<OptionPosition>
}
const OptionPositionExpiryDate: FC<OptionPositionExpiryDateProps> = ({ rowData, setRowData }) => {
  const { expiration, status } = rowData
  const expiryDiff = (() => {
    if (!expiration) return ''
    const startDate = new Date()
    if (status === OptionPositionStatus.Active || status === OptionPositionStatus.Pending) {
      if (new Date(expiration).getTime() < startDate.getTime()) {
        return 'Pending'
      } else {
        const hoursDiff = differenceInHours(expiration, startDate)
        const daysDiff = differenceInDays(expiration, startDate)
        const result = `${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ${hoursDiff % 24} ${
          hoursDiff % 24 === 1 ? 'hr' : 'hrs'
        } later`

        if (!daysDiff) return '-1'
        return result
      }
    } else {
      return ''
    }
  })()

  if (expiryDiff === '-1') {
    return <OptionPositionExpiryDateCountDown rowData={rowData} expiration={expiration} setRowData={setRowData} />
  }

  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Span>{format(expiration, 'yyyy-MM-dd HH:mm')}</Span>
        <Tiny>{expiryDiff}</Tiny>
      </Stack>
    </TableCell>
  )
}

const OptionPositionExpiryDateCountDown: FC<{
  expiration: number
  rowData: OptionPosition
  setRowData: Updater<OptionPosition>
}> = ({ expiration, rowData, setRowData }) => {
  const [expiryDiff, setExpiryDiff] = useImmer('')
  const { optionPosition } = useNotification()
  const { chainId } = useWallet()
  const { thegraphUrl } = useNetwork()
  const dataFetcher = usePost(requestPositionId)
  useEffect(() => {
    let isCancel = false
    let timer = 0

    const run = () => {
      const startDate = new Date()
      if (new Date(expiration).getTime() < startDate.getTime()) {
        clearInterval(interval)
        optionPosition.add(ListeningType.Active, rowData, chainId).then(({ complete }) => {
          let nextRuntime = Date.now()
          let loading = false
          const run = () => {
            timer = setTimeout(() => {
              if (isCancel) return
              if (!loading && nextRuntime <= Date.now()) {
                loading = true
                nextRuntime += SECONDS * 2
                dataFetcher
                  .post({
                    positionId: rowData.positionId,
                    collectionAddress: rowData.collectionAddress,
                    thegraphUrl,
                  })
                  .then((data) => {
                    if (!data) return
                    if (data.status !== OptionPositionStatus.Active) {
                      const finalStatus = data.status
                      setRowData((row) => ({
                        ...row,
                        status: finalStatus,
                      }))
                      setExpiryDiff('')
                      complete(finalStatus)
                    } else {
                      run()
                    }
                  })
                  .finally(() => {
                    loading = false
                  })
              } else {
                run()
              }
            }, SECONDS * 2) as any
          }

          run()
        })
        setExpiryDiff('Pending')
      } else {
        const hoursDiff = differenceInHours(expiration, startDate)
        const minutesDiff = differenceInMinutes(expiration, startDate)
        const result = `${hoursDiff % 24} ${hoursDiff % 24 === 1 ? 'hr' : 'hrs'} ${minutesDiff % 60} ${
          minutesDiff % 60 === 1 ? 'min' : 'mins'
        } later`

        setExpiryDiff(result)
      }
    }

    run()

    const interval = setInterval(run, SECONDS * 30)
    return () => {
      isCancel = true
      clearInterval(interval)
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expiration, setExpiryDiff])

  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Span>{format(expiration, 'yyyy-MM-dd HH:mm')}</Span>
        <Tiny>{expiryDiff}</Tiny>
      </Stack>
    </TableCell>
  )
}

export default OptionPositionExpiryDate
