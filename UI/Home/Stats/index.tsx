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
    <Stack component="section" direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={{ xs: 4, sm: 0 }}>
      {stats.map((stat) => (
        <Stack key={stat.label} direction={{ xs: 'column-reverse', sm: 'row' }} alignItems="center" spacing={{ xs: 0, sm: 2 }}>
          <H4 fontSize={32} fontWeight={500}>
            {stat.value}
          </H4>
          <Divider sx={{ display: { xs: 'none', sm: 'block' } }}/>
          <Span fontSize={18} color="primary.main" textTransform="uppercase">
            {t(`${stat.label}`)}
          </Span>
        </Stack>
      ))}
    </Stack>
  )
}

export default Stats
