import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Card, Stack } from '@mui/material'

import { H2, Span } from 'components/Typography'

// root component interface
interface StatsCardProps {
  card: any
}

const StatsCard: FC<React.PropsWithChildren<StatsCardProps>> = ({ card }) => {
  const { title, price } = card
  const { t } = useTranslation('app-analytics', { keyPrefix: 'stats' })

  return (
    <Card>
      <Stack spacing={1} paddingY={2} paddingX={3}>
        <Span color="text.secondary">{t(title)}</Span>
        <H2>{price}</H2>
      </Stack>
    </Card>
  )
}

export default StatsCard
