import { useMemo } from 'react'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

import { usePageTradeOpenOptions } from '.'

const DisplayMaxProfit: FC = () => {
  const { optionType, price, premium, tOpenCallOptions } = usePageTradeOpenOptions()
  const value = useMemo(() => {
    if (optionType === OptionType.LONG_CALL) {
      return 'Limitless'
    }
    if (premium.loading) return 'Loading...'
    return <NumberDisplay value={price ? price.minus(premium.value) : 0} />
  }, [optionType, premium.loading, premium.value, price])

  return (
    <FlexBetween>
      <Span>{tOpenCallOptions('maxProfit')}</Span>
      <Span>{value}</Span>
    </FlexBetween>
  )
}

export default DisplayMaxProfit
