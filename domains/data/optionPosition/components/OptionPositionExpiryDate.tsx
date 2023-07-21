import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { differenceInDays, differenceInHours, differenceInMinutes, format } from 'date-fns'
import { useEffect } from 'react'
import { useImmer } from 'use-immer'

import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { SECONDS } from 'app/constant'

import { Span, Tiny } from 'components/Typography'

import { OptionPositionStatus } from 'lib/graphql/option-position'

type OptionPositionExpiryDateProps = {
  rowData: OptionPosition
}
const OptionPositionExpiryDate: FC<OptionPositionExpiryDateProps> = ({ rowData: { expiration, status } }) => {
  const expiryDiff = (() => {
    if (!expiration) return ''
    const startDate = new Date()
    if (status === OptionPositionStatus.Active || status === OptionPositionStatus.Pending) {
      if (new Date(expiration).getTime() < startDate.getTime()) {
        return 'Pending'
      } else {
        const hoursDiff = differenceInHours(expiration, startDate)
        const daysDiff = differenceInDays(expiration, startDate)
        const result = `${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ${hoursDiff % 24} ${hoursDiff % 24 === 1 ? 'hr' : 'hrs'} later`

        if (!daysDiff) return '-1'
        return result
      }
    } else {
      return ''
    }
  })()

  if (expiryDiff === '-1') return <OptionPositionExpiryDateCountDown expiration={expiration} />

  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Span>{format(expiration, 'yyyy-MM-dd HH:mm')}</Span>
        <Tiny>{expiryDiff}</Tiny>
      </Stack>
    </TableCell>
  )
}

const OptionPositionExpiryDateCountDown: FC<{ expiration: number }> = ({ expiration }) => {
  const [expiryDiff, setExpiryDiff] = useImmer('')
  useEffect(() => {
    const startDate = new Date()
    if (new Date(expiration).getTime() < startDate.getTime()) {
      return setExpiryDiff('Pending')
    }

    const run = () => {
      const startDate = new Date()
      const hoursDiff = differenceInHours(expiration, startDate)
      const minutesDiff = differenceInMinutes(expiration, startDate)
      const result = `${hoursDiff % 24} ${hoursDiff % 24 === 1 ? 'hr' : 'hrs'} ${minutesDiff % 60} ${minutesDiff % 60 === 1 ? 'min' : 'mins'} later`

      setExpiryDiff(result)
    }

    run()

    const interval = setInterval(run, SECONDS * 30)
    return () => clearInterval(interval)
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
