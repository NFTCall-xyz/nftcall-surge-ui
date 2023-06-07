import { useImmer } from 'use-immer'

import Stack from '@mui/material/Stack'

import { Span, Tiny } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import { NumberInput } from 'lib/math/components/NumberInput'

import { usePageTradeOpenOptions } from '.'

const SelectAmount: FC = () => {
  const { amount, tOpenCallOptions } = usePageTradeOpenOptions()
  const [error, setError] = useImmer('')
  return (
    <Stack spacing={1}>
      <FlexBetween>
        <Span>{tOpenCallOptions('size')}</Span>
        <Tiny color="text.secondary">
          <Span fontSize={12}>{`${tOpenCallOptions('limit')}: `}</Span>
          <NumberDisplay value={amount.max} options="number" />
        </Tiny>
      </FlexBetween>
      <NumberInput
        value={amount.value}
        endAdornment={<Span color="text.secondary">{tOpenCallOptions('calls')}</Span>}
        error={error}
        onChange={(e: any) => {
          const value = e.target.value
          setError(amount.checked(value))

          if (amount.max && e.target.value > amount.max.toNumber()) {
            amount.set(amount.max.toNumber())
          } else {
            amount.set(e.target.value)
          }
        }}
      />
    </Stack>
  )
}
export default SelectAmount
