import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { useNotification, useWallet } from 'domains'
import Link from 'next/link'
import { useEffect } from 'react'
import { type Updater, useImmer } from 'use-immer'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'
import Tooltip from '@mui/material/Tooltip'

import { getWeiToValueBN, safeGet } from 'app/utils/get'

import { Span, TooltipSpan } from 'components/Typography'

import { useNFTCollections, useOptionPosition } from 'domains/data'
import { ListeningType } from 'domains/notification/application/optionPosition'

import { OptionPositionStatus, getOptionPositionStatusByProtocol } from 'lib/graphql/option-position'

type OptionPositionStausProps = {
  rowData: OptionPosition
  setRowData: Updater<OptionPosition>
}
const OptionPositionStaus: FC<OptionPositionStausProps> = ({ rowData, setRowData }) => {
  const { status, positionId, collectionAddress } = rowData
  const [loading, setLoaidng] = useImmer(false)
  const { forceClosePendingPosition } = useOptionPosition()
  const { updateNFTCollections } = useNFTCollections()
  const { optionPosition } = useNotification()
  const { chainId } = useWallet()

  useEffect(() => {
    let isCancel = false
    if (status === OptionPositionStatus.Pending) {
      optionPosition.add(ListeningType.Pending, rowData, chainId).then(({ type, data, complete }) => {
        const finalStatus = safeGet(() => getOptionPositionStatusByProtocol(data.state)) || OptionPositionStatus.Failed
        complete(finalStatus)
        if (isCancel) return
        if (type === 'then') {
          setRowData((row) => ({
            ...row,
            ...getWeiToValueBN(data, ['premium'], 18),
            status: finalStatus,
          }))
        } else {
          setRowData((row) => ({
            ...row,
            status: OptionPositionStatus.Failed,
          }))
        }
      })
    }

    return () => {
      isCancel = true
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  if (status === OptionPositionStatus.Failed) {
    return (
      <TableCell align="center" component="div" sx={{ span: { fontSize: 14 } }}>
        <Tooltip
          title={
            <>
              <p>Failed to open the position due to the slippage.</p>
              <Link target="_blank" href="https://docs.nftcall.xyz/nftcall-surge/overview/options-trading#slippage">
                Learn More
              </Link>
            </>
          }
        >
          <Box>
            <TooltipSpan>{status}</TooltipSpan>
          </Box>
        </Tooltip>
      </TableCell>
    )
  } else if (status !== OptionPositionStatus.Pending) {
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
                collectionAddress: collectionAddress,
              })
                .then(() => {
                  setRowData((row) => {
                    row.status = OptionPositionStatus.Cancelled
                    return row
                  })
                  updateNFTCollections()
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
