import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { useEffect } from 'react'
import { type Updater, useImmer } from 'use-immer'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { SECONDS } from 'app/constant'
import { getWeiToValueBN } from 'app/utils/get'

import { Span } from 'components/Typography'

import { useNFTCollections, useNetwork, useOptionPosition } from 'domains/data'

import {
  OptionPositionStateProtocol,
  OptionPositionStatus,
  getOptionPositionStatusByProtocol,
} from 'lib/graphql/option-position'

type OptionPositionStausProps = {
  rowData: OptionPosition
  setRowData: Updater<OptionPosition>
}
const OptionPositionStaus: FC<OptionPositionStausProps> = ({
  rowData: { status, positionId, collectionAddress },
  setRowData,
}) => {
  const [loading, setLoaidng] = useImmer(false)
  const { forceClosePendingPosition } = useOptionPosition()
  const { collections, updateNFTCollections } = useNFTCollections()
  const {
    contracts: { surgeUIService },
    address: { SurgeUI },
  } = useNetwork()

  useEffect(() => {
    if (status !== OptionPositionStatus.Pending) return
    const collection = collections.find((collection) => collection.address.collection === collectionAddress)
    if (!collection || !collection.address.optionToken) return
    let nextRuntime = Date.now()
    let timer = 0
    let loading = false
    let isCancel = false

    const run = () => {
      timer = setTimeout(() => {
        if (isCancel) return
        if (!loading && nextRuntime <= Date.now()) {
          loading = true
          nextRuntime += SECONDS * 15
          surgeUIService
            .getPosition({
              SurgeUI,
              optionTokenAddress: collection.address.optionToken,
              positionId,
            })
            .then((data) => {
              if (isCancel) return
              console.log('OptionPositionStatus', {
                optionTokenAddress: collection.address.optionToken,
                positionId,
                data,
              })
              if (data.state === OptionPositionStateProtocol.PENDING) {
                run()
              } else {
                setRowData((row) => ({
                  ...row,
                  ...getWeiToValueBN(data, ['premium'], 18),
                  status: getOptionPositionStatusByProtocol(data.state),
                }))
              }
            })
            .catch(() => {
              if (isCancel) return
              setRowData((row) => ({
                ...row,
                status: OptionPositionStatus.Failed,
              }))
            })
            .finally(() => {
              loading = false
            })
        } else {
          run()
        }
      }, SECONDS) as any
    }

    run()

    return () => {
      isCancel = true
      clearTimeout(timer)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surgeUIService, status])

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
                collectionAddress: collectionAddress,
              })
                .then(() => {
                  setRowData((row) => {
                    row.status = OptionPositionStatus.Cancelled
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
