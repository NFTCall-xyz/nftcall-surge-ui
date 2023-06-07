import { useTranslation } from 'next-i18next'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import { H4, Span } from 'components/Typography'

const stats = [
  {
    label: 'tradingVolume',
    value: '$1.3B',
  },
  {
    label: 'openInterest',
    value: '$13.4M',
  },
  {
    label: 'tvl',
    value: '$34.1M',
  },
]

const Divider = styled(Box)`
  ${({ theme }) => ({
    borderLeft: `solid 1px ${theme.palette.divider}`,
    height: 10,
  })}
`

const Stats: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'stats' })
  return (
    <Stack component="section" direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
      {stats.map((stat) => (
        <Stack key={stat.label} direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
          <H4 fontSize={32} fontWeight={500}>
            {stat.value}
          </H4>
          <Divider />
          <Span fontSize={18} color="primary.main" textTransform="uppercase">
            {t(`${stat.label}`)}
          </Span>
        </Stack>
      ))}
    </Stack>
  )
}

export default Stats
