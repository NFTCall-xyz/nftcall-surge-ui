import { useEffect } from 'react'
import { useImmer } from 'use-immer'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { getTimestamp } from 'app/constant'

import { toBN } from 'lib/math'

import { usePageTradeOpenOptions } from '.'

const OpenOptionsAction: FC = () => {
  const pageTradeOpenOptions = usePageTradeOpenOptions()

  const { openOptions, strikePrice, optionType, premium, amount, expiryDate, tOpenCallOptions, init } =
    pageTradeOpenOptions

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

  return (
    <Stack spacing={1}>
      <Button
        variant="contained"
        disabled={!!error || premium.loading}
        onClick={() => {
          openOptions({
            optionType,
            amount: amount.value.toString(),
            strikePrice: strikePrice.value.toString(),
            expiry: getTimestamp(expiryDate.value.getTime()),
            premium: premium.value.toString(),
          })
        }}
      >
        {tOpenCallOptions('openOptions')}
      </Button>
      {error && <Alert severity="error">{error}</Alert>}
    </Stack>
  )
}
export default OpenOptionsAction
