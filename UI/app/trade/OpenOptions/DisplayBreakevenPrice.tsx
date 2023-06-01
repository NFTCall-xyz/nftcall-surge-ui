import { useMemo } from 'react'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

import { usePageTradeOpenOptions } from '.'

const DisplayBreakevenPrice: FC = () => {
  const { optionType, price, premium, tOpenCallOptions } = usePageTradeOpenOptions()
  const value = useMemo(() => {
    if (premium.loading) return 'Loading...'
    if (optionType === OptionType.LONG_CALL) {
      return <NumberDisplay value={price ? price.plus(premium.value) : 0} />
    } else {
      return <NumberDisplay value={price ? price.minus(premium.value) : 0} />
    }
  }, [optionType, premium.loading, premium.value, price])

  return (
    <FlexBetween>
      <Span>{tOpenCallOptions('breakevenPrice')}</Span>
      <Span>{value}</Span>
    </FlexBetween>
  )
}

export default DisplayBreakevenPrice
