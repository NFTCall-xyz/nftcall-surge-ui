import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'

import { usePageTradeOpenOptions } from '.'

const DisplayBreakevenPrice: FC = () => {
  const { wETHBalance, tOpenCallOptions } = usePageTradeOpenOptions()

  return (
    <FlexBetween>
      <Span>{tOpenCallOptions('yourBalance')}</Span>
      <Span>
        <NumberDisplay value={wETHBalance} />
      </Span>
    </FlexBetween>
  )
}

export default DisplayBreakevenPrice
