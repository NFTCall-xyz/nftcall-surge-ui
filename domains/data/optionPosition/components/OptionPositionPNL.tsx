import { usePageTrade } from 'UI/app/trade'
import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { useEffect, useMemo } from 'react'
import { type Updater, useImmer } from 'use-immer'

import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { OptionPositionStatus } from 'lib/graphql/option-position'
import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'

type OptionPositionPNLProps = {
  rowData: OptionPosition
  setRowData: Updater<OptionPosition>
}
const OptionPositionPNL: FC<OptionPositionPNLProps> = ({
  rowData: { collectionAddress, positionId, status, premium, revenue },
}) => {
  const [PNLInner, setPNLInner] = useImmer<string>('')
  const [PNLRateInner, setPNLRateInner] = useImmer<string>('')
  const {
    positions: {
      hooks: { useGetPositionPNLWeightedDelta },
    },
  } = usePageTrade()

  const { post, cancel, loading } = useGetPositionPNLWeightedDelta()

  const { PNL, PNLRate } = useMemo(() => {
    if (PNLInner) return { PNL: toBN(PNLInner), PNLRate: toBN(PNLRateInner) }
    let PNL = toBN(0)
    let PNLRate = toBN(0)

    if (status === OptionPositionStatus.Exercised) {
      PNL = revenue.minus(premium)
      PNLRate = PNL.dividedBy(premium)
      return { PNL, PNLRate }
    } else if (status === OptionPositionStatus.Expired) {
      PNL = premium.multipliedBy(-1)
      PNLRate = PNL.dividedBy(premium)
      return { PNL, PNLRate }
    }

    return {} as undefined
  }, [PNLInner, PNLRateInner, premium, revenue, status])

  useEffect(() => {
    if (status !== OptionPositionStatus.Active) return

    post({
      collection: collectionAddress,
      positionId,
    }).then(({ unrealizePNL }) => {
      setPNLInner(() => unrealizePNL.toString())
      setPNLRateInner(() => unrealizePNL.dividedBy(premium).toString())
    })

    return () => {
      cancel()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  return (
    <TableCell align="center" component="div" sx={{ span: { fontSize: 14 } }}>
      {loading ? (
        <CircularProgress size={14} />
      ) : (
        <Stack spacing={1} alignItems="end">
          <RiseOrFall value={PNL}>
            <NumberDisplay value={PNL} abbreviate={{}} numberFormatOptions={{ signDisplay: 'always' }} />
          </RiseOrFall>
          <RiseOrFall value={PNLRate}>
            <NumberDisplay value={PNLRate} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
          </RiseOrFall>
        </Stack>
      )}
    </TableCell>
  )
}

export default OptionPositionPNL
