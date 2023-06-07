import Stack from '@mui/material/Stack'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTradeOpenOptions } from '.'

const DisplayBreakevenPrice: FC = () => {
  const { wETHBalance, tOpenCallOptions } = usePageTradeOpenOptions()

  return (
    <FlexBetween>
      <Span color="text.secondary">{tOpenCallOptions('yourBalance')}</Span>
      <Stack spacing={0.5} direction="row" alignItems="center" fontSize={14}>
        <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
        <NumberDisplay value={wETHBalance} />
      </Stack>
    </FlexBetween>
  )
}

export default DisplayBreakevenPrice
