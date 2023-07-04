import { usePageTrade } from 'UI/app/trade'
import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { useMemo } from 'react'
import { type Updater } from 'use-immer'

import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { OptionPositionStatus } from 'lib/graphql/option-position'
import { BN, toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

type OptionPositionPNLProps = {
  rowData: OptionPosition
  setRowData: Updater<OptionPosition>
}
const OptionPositionPNL: FC<OptionPositionPNLProps> = ({
  rowData: { optionType, status, strikePrice, amount, premium, exerciseFee },
}) => {
  const {
    collection: {
      collection: {
        data: { price: floorPrice },
      },
    },
  } = usePageTrade()

  const { PNL, PNLRate } = useMemo(() => {
    let PNL = toBN(0)
    let PNLRate = toBN(0)

    if (!floorPrice || floorPrice.isZero() || status !== OptionPositionStatus.Active) return {} as undefined

    let optionValue = toBN(0)
    if (optionType === OptionType.LONG_CALL) {
      optionValue = floorPrice.minus(strikePrice).multipliedBy(amount)
    } else {
      optionValue = strikePrice.minus(floorPrice).multipliedBy(amount)
    }

    PNL = BN.max(optionValue.minus(exerciseFee).minus(premium), premium.multipliedBy(-1))
    PNLRate = PNL.dividedBy(premium)

    return { PNL, PNLRate }
  }, [amount, exerciseFee, floorPrice, optionType, premium, status, strikePrice])

  return (
    <TableCell align="center" component="div" sx={{ span: { fontSize: 14 } }}>
      <Stack spacing={1} alignItems="end">
        <RiseOrFall value={PNL}>
          <NumberDisplay value={PNL} abbreviate={{}} numberFormatOptions={{ signDisplay: 'always' }} />
        </RiseOrFall>
        <RiseOrFall value={PNLRate}>
          <NumberDisplay value={PNLRate} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
        </RiseOrFall>
      </Stack>
    </TableCell>
  )
}

export default OptionPositionPNL
