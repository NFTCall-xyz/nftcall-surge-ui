import { format } from 'date-fns'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { safeGet } from 'app/utils/get'

import { H3, Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageEarn } from '../..'

const Title: FCC = ({ children }) => {
  return <H3>{children}</H3>
}

const Text: FCC = ({ children }) => {
  return <FlexBetween>{children}</FlexBetween>
}

const YourStats: FC = () => {
  const {
    tYourStats,
    yourStats: { your, vault, locked },
  } = usePageEarn()
  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Title>{tYourStats('title')}</Title>
        <Text>
          <Span>{tYourStats('ncETHBalance')}</Span>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'nETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={your.ncETHBalance} />
          </Stack>
        </Text>
        <Text>
          <Span>{tYourStats('lockedNcETHBalance')}</Span>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'nETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={your.lockedNcETHBalance} />
          </Stack>
        </Text>
        <Text>
          <Span>{tYourStats('totalValue')}</Span>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'ETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={your.totalValue} />
          </Stack>
        </Text>
        <Text>
          <Span>{tYourStats('estimatedEarnings')}</Span>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'ETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={your.estimatedEarnings} />
          </Stack>
        </Text>
      </Stack>
      <Stack spacing={1}>
        <Title>{tYourStats('vault.title')}</Title>
        <Text>
          <Span>{tYourStats('vault.available')}</Span>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'ETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={vault.available} />
          </Stack>
        </Text>
      </Stack>
      <Stack spacing={1}>
        <Title>{tYourStats('locked.title')}</Title>
        <Text>
          <Span>{tYourStats('locked.ncETHBalance')}</Span>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'nETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={locked.lockedNcETHBalance} />
          </Stack>
        </Text>
        <Text>
          <Span>{tYourStats('locked.ncETHBalance')}</Span>
          <Span>{safeGet(() => format(locked.lockedUnitil, 'MMM dd HH:mm'))}</Span>
        </Text>

        <Button
          variant="contained"
          size="small"
          disabled={locked.claim.disabled}
          onClick={() => {
            locked.claim.action()
          }}
          sx={{ padding: '5px' }}
        >
          {tYourStats('locked.claim')}
        </Button>
      </Stack>
    </Stack>
  )
}

export default YourStats
