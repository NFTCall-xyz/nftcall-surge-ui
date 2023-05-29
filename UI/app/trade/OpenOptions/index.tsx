import { differenceInDays, differenceInHours } from 'date-fns'
import { useTranslation } from 'next-i18next'
import { useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import { getTimestamp } from 'app/constant'
import { safeGet } from 'app/utils/get'

import { Span, Tiny } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import { toBN, valueToWei } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { NumberInput } from 'lib/math/components/NumberInput'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

import { usePageTrade } from '..'

export type OpenCallOptionsProps = {}
const OpenCallOptions: FC<OpenCallOptionsProps> = () => {
  const { t } = useTranslation('app-trade', { keyPrefix: 'open-call-options' })
  const theme = useTheme()

  const [optionType, setOptionType] = useImmer(OptionType.LONG_CALL)
  const {
    collection: {
      collection: {
        data: { maximumOptionAmount, price },
      },
      openOptions,
      getPremium,
    },
  } = usePageTrade()
  const [amount, setAmount] = useImmer(0)
  const [strikePrice, setStrikePrice] = useImmer(safeGet(() => price.toNumber()) || 0)
  const [expiry, setExpiry] = useImmer(new Date())
  const strikePricePercent = useMemo(() => toBN(strikePrice).div(price).minus(1), [price, strikePrice])
  const expiryDiff = useMemo(() => {
    const startDate = new Date()
    const hoursDiff = differenceInHours(expiry, startDate)
    const daysDiff = differenceInDays(expiry, startDate)
    const result = `${daysDiff} days ${hoursDiff % 24} hrs later`
    return result
  }, [expiry])

  useEffect(() => {
    setStrikePrice(safeGet(() => price.toNumber()) || 0)
  }, [price, setStrikePrice])

  useEffect(() => {
    const props = {
      optionType,
      spotPrice: valueToWei(price, 18).toString(),
      strikePrice: valueToWei(strikePrice, 18).toString(),
      expiry: getTimestamp(expiry.getTime()),
      duration: getTimestamp(expiry.getTime() - Date.now()),
    }
    console.log(props)
    getPremium({
      props,
      getPromise: (promise) =>
        promise
          .then((premium) => {
            console.log('premium', premium.toNumber())
          })
          .catch((e) => {
            console.log('premium error', e)
          }),
    })
  }, [expiry, getPremium, optionType, price, strikePrice])

  return (
    <Card sx={{ border: 'solid 1px', borderColor: theme.palette.divider, position: 'sticky', top: theme.spacing(4) }}>
      <CardContent>
        <Stack spacing={4}>
          <ToggleButtonGroup value={optionType} exclusive onChange={(e, value) => setOptionType(value)}>
            <ToggleButton value={OptionType.LONG_CALL}>{t('call')}</ToggleButton>
            <ToggleButton value={OptionType.LONG_PUT}>{t('put')}</ToggleButton>
          </ToggleButtonGroup>

          <Stack spacing={1}>
            <FlexBetween>
              <Span>{t('size')}</Span>
              <Tiny color="text.secondary">
                <Span>{`${t('limit')}: `}</Span>
                <NumberDisplay value={maximumOptionAmount} options="number" />
              </Tiny>
            </FlexBetween>
            <NumberInput
              value={amount}
              onChange={(e: any) => {
                if (e.target.value > maximumOptionAmount.toNumber()) {
                  setAmount(maximumOptionAmount.toNumber())
                } else {
                  setAmount(e.target.value)
                }
              }}
              onMax={() => {
                setAmount(maximumOptionAmount.toNumber())
              }}
            />
          </Stack>

          <Stack spacing={1}>
            <FlexBetween>
              <Span>{t('strikePrice')}</Span>
              <RiseOrFall value={strikePricePercent}>
                <NumberDisplay
                  value={strikePricePercent}
                  options="percent"
                  numberFormatOptions={{ signDisplay: 'always' }}
                />
              </RiseOrFall>
            </FlexBetween>
            <NumberInput
              value={strikePrice}
              onChange={(e: any) => {
                setStrikePrice(e.target.value)
              }}
            />
          </Stack>

          <Stack spacing={1}>
            <FlexBetween>
              <Span>{t('expiry')}</Span>
              <Span>{expiryDiff}</Span>
            </FlexBetween>
            <DateTimePicker value={expiry} onChange={(newValue) => setExpiry(newValue)} />
          </Stack>

          <Button
            variant="contained"
            onClick={() => {
              openOptions({
                optionType,
                amount: amount.toString(),
                strikePrice: strikePrice.toString(),
                expiry: getTimestamp(expiry.getTime()),
              })
            }}
          >
            {t('openOptions')}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default OpenCallOptions
