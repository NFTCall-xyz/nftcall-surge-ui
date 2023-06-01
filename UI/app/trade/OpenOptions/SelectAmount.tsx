import Stack from '@mui/material/Stack'

import { Span, Tiny } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import { NumberInput } from 'lib/math/components/NumberInput'

import { usePageTradeOpenOptions } from '.'

const SelectAmount: FC = () => {
  const { amount, maximumOptionAmount, setAmount, tOpenCallOptions } = usePageTradeOpenOptions()
  return (
    <Stack spacing={1}>
      <FlexBetween>
        <Span>{tOpenCallOptions('size')}</Span>
        <Tiny color="text.secondary">
          <Span fontSize={12}>{`${tOpenCallOptions('limit')}: `}</Span>
          <NumberDisplay value={maximumOptionAmount} options="number" />
        </Tiny>
      </FlexBetween>
      <NumberInput
        value={amount}
        endAdornment={<Span color="text.secondary">{tOpenCallOptions('calls')}</Span>}
        onChange={(e: any) => {
          if (maximumOptionAmount && e.target.value > maximumOptionAmount.toNumber()) {
            setAmount(maximumOptionAmount.toNumber())
          } else {
            setAmount(e.target.value)
          }
        }}
      />
    </Stack>
  )
}
export default SelectAmount
