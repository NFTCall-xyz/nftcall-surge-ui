import { usePageTrade } from 'UI/app/trade'
import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { useMemo } from 'react'

import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { safeGet } from 'app/utils/get'

import { OptionPositionStatus } from 'lib/graphql/option-position'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

type OptionPositionPriceProps = {
  rowData: OptionPosition
}
const OptionPositionPrice: FC<OptionPositionPriceProps> = ({
  rowData: { collectionAddress, status, settlementPrice },
}) => {
  const { collections } = usePageTrade()

  const value = useMemo(() => {
    return status === OptionPositionStatus.Pending || status === OptionPositionStatus.Active
      ? safeGet(() => collections.find((collection) => collection.address.collection === collectionAddress).data.price)
      : settlementPrice
  }, [collectionAddress, collections, settlementPrice, status])

  return (
    <TableCell align="center" component="div" sx={{ span: { fontSize: 14 } }}>
      <Stack spacing={0.5} direction="row" alignItems="center">
        <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
        <NumberDisplay value={value} options="number" />
      </Stack>
    </TableCell>
  )
}

export default OptionPositionPrice
