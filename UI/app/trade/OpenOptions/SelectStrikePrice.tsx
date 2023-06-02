import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import { safeGet } from 'app/utils/get'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { NumberInput } from 'lib/math/components/NumberInput'
import RiseOrFall from 'lib/math/components/RiseOrFall'

import { usePageTradeOpenOptions } from '.'
import { usePageTrade } from '..'

const SelectStrikePrice: FC = () => {
  const {
    collection: {
      collection: {
        data: { price },
      },
    },
  } = usePageTrade()
  const {
    strikePrice: { value, set, tags, diffPercent, min, max },
    tOpenCallOptions,
  } = usePageTradeOpenOptions()

  return (
    <Stack spacing={1}>
      <FlexBetween>
        <Span>{tOpenCallOptions('strikePrice')}</Span>
        <RiseOrFall value={diffPercent}>
          <NumberDisplay value={diffPercent} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
        </RiseOrFall>
      </FlexBetween>
      <NumberInput
        value={value}
        endAdornment={<Span color="text.secondary">ETH</Span>}
        onChange={(e: any) => set(e.target.value)}
        onBlur={() => {
          const valueBN = toBN(value)
          if (valueBN.lt(min)) {
            set(min.toNumber())
          } else if (valueBN.gt(max)) {
            set(max.toNumber())
          }
        }}
      />

      <ToggleButtonGroup
        value={value}
        exclusive
        size="small"
        onChange={(e, value) => set(value)}
        color="primary"
        sx={{
          '& button': {
            flex: 1,
          },
        }}
      >
        {tags.map((i) => {
          return (
            <ToggleButton size="small" value={safeGet(() => price.multipliedBy(i + 1).toNumber()) || i} key={i}>
              <NumberDisplay value={i} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
            </ToggleButton>
          )
        })}
      </ToggleButtonGroup>
    </Stack>
  )
}
export default SelectStrikePrice
