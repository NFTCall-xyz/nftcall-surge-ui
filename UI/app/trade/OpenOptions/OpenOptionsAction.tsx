import { useApp } from 'app'
import { useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { getTimestamp } from 'app/constant'
import { safeGet } from 'app/utils/get'

import { OptionPositionStatus } from 'lib/graphql/option-position'
import { toBN } from 'lib/math'

import { usePageTradeOpenOptions } from '.'

const OpenOptionsAction: FC = () => {
  const {
    setting: { allowedSlippage },
  } = useApp()
  const pageTradeOpenOptions = usePageTradeOpenOptions()

  const {
    openOptions,
    setSourceData,
    approveOpenPosition,
    wETHAllowance,
    strikePrice,
    optionType,
    premium,
    amount,
    expiryDate,
    tOpenCallOptions,
    init,
  } = pageTradeOpenOptions

  const [error, setError] = useImmer('')

  useEffect(() => {
    if (init) return setError(() => '')
    const keys: Array<'strikePrice' | 'amount' | 'expiryDate'> = ['strikePrice', 'amount', 'expiryDate']
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const { value, checked, min, max } = pageTradeOpenOptions[key]
      const error = checked(value)
      if (error) {
        return setError(() => tOpenCallOptions(key) + ' ' + error)
      }

      let temp: any = value
      if (typeof value === 'object') {
        temp = value.getTime()
      }

      const bnValue = toBN(temp)
      if (bnValue.lt(min)) {
        return setError(() => tOpenCallOptions(key) + ' too low')
      } else if (bnValue.gt(max)) {
        return setError(() => tOpenCallOptions(key) + ' too high')
      }
    }

    setError(() => '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [init, strikePrice.value, amount.value, expiryDate.value])

  const maximumPremium = useMemo(() => {
    return toBN(1 + allowedSlippage.value).multipliedBy(premium.value)
  }, [allowedSlippage.value, premium.value])

  const openOptionsAvailable = useMemo(() => {
    return safeGet(() => wETHAllowance.gt(maximumPremium))
  }, [wETHAllowance, maximumPremium])

  return (
    <Stack spacing={1}>
      {openOptionsAvailable ? (
        <Button
          variant="contained"
          disabled={!!error || premium.loading || safeGet(() => maximumPremium.isZero())}
          onClick={() => {
            openOptions({
              optionType,
              amount: amount.value.toString(),
              strikePrice: strikePrice.value.toString(),
              expiry: getTimestamp(expiryDate.value.getTime()),
              maximumPremium: maximumPremium.toString(),
            }).then((data) => {
              setSourceData((sourceData) => [
                {
                  ...data,
                  status: OptionPositionStatus.Pending,
                  expiration: data.expiry,
                  updateTimestamp: Date.now(),
                },
                ...sourceData,
              ])
            })
          }}
        >
          {tOpenCallOptions('openOptions')}
        </Button>
      ) : (
        <Button
          variant="contained"
          disabled={!!error || premium.loading || safeGet(() => maximumPremium.isZero())}
          onClick={() => {
            approveOpenPosition({
              optionType,
              amount: amount.value.toString(),
              strikePrice: strikePrice.value.toString(),
              expiry: getTimestamp(expiryDate.value.getTime()),
              maximumPremium: maximumPremium.toString(),
            })
          }}
        >
          {tOpenCallOptions('approve')}
        </Button>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </Stack>
  )
}
export default OpenOptionsAction
