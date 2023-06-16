import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { type Updater, useImmer } from 'use-immer'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { Span } from 'components/Typography'

import { useOptionPosition } from 'domains/data'

import { OptionPositionStatus } from 'lib/graphql/option-position'

type OptionPositionStausProps = {
  rowData: OptionPosition
  setRowData: Updater<OptionPosition>
}
const OptionPositionStaus: FC<OptionPositionStausProps> = ({
  rowData: { status, positionId, nftAddress },
  setRowData,
}) => {
  const [loading, setLoaidng] = useImmer(false)
  const { forceClosePendingPosition } = useOptionPosition()
  if (status !== OptionPositionStatus.Pending) {
    return (
      <TableCell align="center" component="div" sx={{ span: { fontSize: 14 } }}>
        <Span color="text.secondary">{status}</Span>
      </TableCell>
    )
  } else {
    return (
      <TableCell align="center" component="div" sx={{ span: { fontSize: 14 } }}>
        <Stack spacing={1}>
          <Span color="text.secondary">Pending</Span>
          <Button
            disabled={loading}
            onClick={() => {
              setLoaidng(true)
              forceClosePendingPosition({
                positionId,
                collectionAddress: nftAddress,
              })
                .then(() => {
                  setRowData((row) => {
                    row.status = OptionPositionStatus.Closed
                  })
                })
                .finally(() => {
                  setLoaidng(false)
                })
            }}
          >
            Cancel
          </Button>
        </Stack>
      </TableCell>
    )
  }
}

export default OptionPositionStaus
