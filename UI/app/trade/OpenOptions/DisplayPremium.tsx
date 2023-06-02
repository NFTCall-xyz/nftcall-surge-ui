import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'

import { usePageTradeOpenOptions } from '.'

const DisplayPremium: FC = () => {
  const { premium, tOpenCallOptions } = usePageTradeOpenOptions()

  return (
    <FlexBetween>
      <Span>{tOpenCallOptions('premium')}</Span>
      <Span>
        {premium.loading ? (
          'Loading...'
        ) : (
          <NumberDisplay value={premium.value} options="number" numberFormatOptions={{ maximumFractionDigits: 6 }} />
        )}
      </Span>
    </FlexBetween>
  )
}

export default DisplayPremium
