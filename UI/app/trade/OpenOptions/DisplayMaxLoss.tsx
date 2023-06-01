import { useMemo } from 'react'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'

import { usePageTradeOpenOptions } from '.'

const DisplayMaxLoss: FC = () => {
  const { premium, tOpenCallOptions } = usePageTradeOpenOptions()
  const value = useMemo(() => {
    if (premium.loading) return 'Loading...'
    return <NumberDisplay value={premium.value} />
  }, [premium.loading, premium.value])

  return (
    <FlexBetween>
      <Span>{tOpenCallOptions('maxLoss')}</Span>
      <Span>{value}</Span>
    </FlexBetween>
  )
}

export default DisplayMaxLoss
