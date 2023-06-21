import { format } from 'date-fns'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import { getTimestamp } from 'app/constant'
import { safeGet } from 'app/utils/get'

import { H3, Span, Tiny } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import { OptionPositionStatus } from 'lib/graphql/option-position'
import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

import { usePageTradeOpenOptions } from '..'
import DisplayBreakevenPrice from '../DisplayBreakevenPrice'
import DisplayMaxLoss from '../DisplayMaxLoss'
import DisplayMaxProfit from '../DisplayMaxProfit'
import ConfirmOpenOptionDialogCloseIconButton from './ConfirmOpenOptionDialogCloseIconButton'

const ConfirmOpenOptionDialog: FC = () => {
  const {
    tOpenCallOptions,
    confirmOpenOptionDialog: { visible, close },

    id,
    name,

    amount,
    optionType,
    expiryDate,
    strikePrice,
    premium,
    executionFee,

    openOptions,
    setSourceData,
  } = usePageTradeOpenOptions()

  return (
    <Dialog open={visible} onClose={close}>
      <DialogTitle>Open position</DialogTitle>
      <ConfirmOpenOptionDialogCloseIconButton />
      <DialogContent sx={{ width: 450 }}>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <H3>
              <Stack spacing={1} direction="row" justifyContent="center">
                <NumberDisplay value={amount.value} />
                <span>{id}</span>
                <Stack spacing={0.5} direction="row" alignItems="center" fontSize={18}>
                  <TokenIcon symbol="ETH" sx={{ width: 18, height: 18 }} />
                  <NumberDisplay value={strikePrice.value} />
                </Stack>
                <span>{optionType === OptionType.LONG_CALL ? tOpenCallOptions('call') : tOpenCallOptions('put')}</span>
              </Stack>
              <Stack spacing={1} direction="row" justifyContent="center">
                <span>expires on</span>
                <span>{safeGet(() => format(expiryDate.value, 'yyyy-MM-dd HH:mm'))}</span>
              </Stack>
            </H3>
            <Tiny textAlign="center">
              You think the floor price of {name} will rise above {<NumberDisplay value={strikePrice.value} />} ETH on{' '}
              {safeGet(() => format(expiryDate.value, 'yyyy-MM-dd HH:mm'))}
            </Tiny>
          </Stack>
          <Stack spacing={2}>
            <FlexBetween>
              <Span color="text.secondary">{tOpenCallOptions('type')}</Span>
              <Span>{optionType === OptionType.LONG_CALL ? tOpenCallOptions('call') : tOpenCallOptions('put')}</Span>
            </FlexBetween>
            <FlexBetween>
              <Span color="text.secondary">{tOpenCallOptions('size')}</Span>
              <Span>
                <NumberDisplay value={amount.value} />
              </Span>
            </FlexBetween>
            <FlexBetween>
              <Span color="text.secondary">{tOpenCallOptions('strikePrice')}</Span>
              <Span>
                <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
                  <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
                  <NumberDisplay value={strikePrice.value} />
                </Stack>
              </Span>
            </FlexBetween>
            <FlexBetween>
              <Span color="text.secondary">{tOpenCallOptions('expiry')}</Span>
              <Span>{safeGet(() => format(expiryDate.value, 'yyyy-MM-dd HH:mm'))}</Span>
            </FlexBetween>

            <Divider />

            <DisplayMaxProfit />
            <DisplayBreakevenPrice />
            <DisplayMaxLoss />

            <Divider />

            <FlexBetween>
              <Span color="text.secondary">{tOpenCallOptions('premium')}</Span>
              <Span>
                <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
                  <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
                  <NumberDisplay value={premium.value} />
                </Stack>
              </Span>
            </FlexBetween>
            <FlexBetween>
              <Span color="text.secondary">{tOpenCallOptions('allowedSlippage')}</Span>
              <Span>
                <NumberDisplay value={premium.allowedSlippage.value} options="percent" />
              </Span>
            </FlexBetween>
            <FlexBetween>
              <Span color="text.secondary">{tOpenCallOptions('fees')}</Span>
              <Span>
                <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
                  <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
                  <NumberDisplay value={executionFee} numberFormatOptions={{ maximumFractionDigits: 5 }} />
                </Stack>
              </Span>
            </FlexBetween>
            <FlexBetween>
              <Span color="text.secondary">{tOpenCallOptions('subtotal')}</Span>
              <Span>
                <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
                  <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
                  <NumberDisplay value={safeGet(() => executionFee.plus(premium.maximumPremium))} />
                </Stack>
              </Span>
            </FlexBetween>
          </Stack>

          <Button
            variant="contained"
            onClick={() => {
              close()
              openOptions({
                optionType,
                amount: amount.value.toString(),
                strikePrice: strikePrice.value.toString(),
                expiry: getTimestamp(expiryDate.value.getTime()),
                maximumPremium: premium.maximumPremium.toString(),
              }).then((data) => {
                setSourceData((sourceData) => [
                  {
                    ...data,
                    status: OptionPositionStatus.Pending,
                    expiration: toBN(data.expiry).multipliedBy(Math.pow(10, 3)).toNumber(),
                    updateTimestamp: Date.now(),
                  },
                  ...sourceData,
                ])
              })
            }}
          >
            Confirm
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmOpenOptionDialog
