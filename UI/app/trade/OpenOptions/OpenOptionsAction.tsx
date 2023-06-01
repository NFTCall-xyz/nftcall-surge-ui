import Button from '@mui/material/Button'

import { getTimestamp } from 'app/constant'

import { usePageTradeOpenOptions } from '.'

const OpenOptionsAction: FC = () => {
  const { openOptions, strikePrice, optionType, premium, amount, expiryDate, tOpenCallOptions } =
    usePageTradeOpenOptions()
  return (
    <Button
      variant="contained"
      onClick={() => {
        openOptions({
          optionType,
          amount: amount.toString(),
          strikePrice: strikePrice.value.toString(),
          expiry: getTimestamp(expiryDate.value.getTime()),
          premium: premium.value.toString(),
        })
      }}
    >
      {tOpenCallOptions('openOptions')}
    </Button>
  )
}
export default OpenOptionsAction
