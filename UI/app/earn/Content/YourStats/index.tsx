import { format } from 'date-fns'

import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

import { safeGet } from 'app/utils/get'

import { H3, Span, TooltipSpan } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import { Tooltip, Box, IconButton } from '@mui/material'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'

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
    yourStats: {
      your,
      vault,
      locked,
      traderPollingEmergency: { loading },
    },
    ncETH: { add },
  } = usePageEarn()
  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Title>{tYourStats('title')}</Title>
        <Text>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <Span color="text.secondary">{tYourStats('ncETHBalance')}</Span>
            <IconButton onClick={add} size='small'>
              <Tooltip title='add ncETH to wallet'>
                <AddCircleOutlineRoundedIcon />
              </Tooltip>
            </IconButton>
          </Stack>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'ncETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={your.ncETHBalance} />
          </Stack>
        </Text>
        <Text>
          <Span color="text.secondary">{tYourStats('lockedNcETHBalance')}</Span>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'ncETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={your.lockedNcETHBalance} />
          </Stack>
        </Text>
        <Text>
          <Tooltip title={tYourStats('totalValueTip')}>
            <Box>
              <TooltipSpan color="text.secondary">{tYourStats('totalValue')}</TooltipSpan>
            </Box>
          </Tooltip>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'WETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={your.totalValue} />
          </Stack>
        </Text>
        <Text>
          <Tooltip title={tYourStats('estimatedEarningsTip')}>
            <Box>
              <TooltipSpan color="text.secondary">{tYourStats('estimatedEarnings')}</TooltipSpan>
            </Box>
          </Tooltip>
          {loading ? (
            <CircularProgress size={16} />
          ) : (
            <Stack spacing={0.5} direction="row" alignItems="center">
              <TokenIcon symbol={'WETH'} sx={{ width: 16, height: 16 }} />
              <NumberDisplay value={your.estimatedEarnings} />
            </Stack>
          )}
        </Text>
      </Stack>
      <Stack spacing={1}>
        <Title>{tYourStats('vault.title')}</Title>
        <Text>
          <Span color="text.secondary">{tYourStats('vault.available')}</Span>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'WETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={vault.available} />
          </Stack>
        </Text>
      </Stack>
      <Stack spacing={1}>
        <Title>{tYourStats('locked.title')}</Title>
        <Text>
          <Span color="text.secondary">{tYourStats('locked.ncETHBalance')}</Span>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'ncETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={locked.lockedNcETHBalance} />
          </Stack>
        </Text>
        <Text>
          <Span color="text.secondary">{tYourStats('locked.until')}</Span>
          {locked.lockedNcETHBalance && locked.lockedNcETHBalance.gt(0) ? (
            <Span>{safeGet(() => format(locked.lockedUnitil, 'yyyy-MM-dd HH:mm'))}</Span>
          ) : (
            <Span>-</Span>
          )}
        </Text>
      </Stack>
    </Stack>
  )
}

export default YourStats
