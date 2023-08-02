import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Card, Stack, Tooltip } from '@mui/material'

import { H2, Span, TooltipSpan } from 'components/Typography'

// root component interface
interface StatsCardProps {
  card: any
}

const StatsCard: FC<React.PropsWithChildren<StatsCardProps>> = ({ card }) => {
  const { title, data, tip } = card
  const { t } = useTranslation('app-earn', { keyPrefix: 'stats' })

  return (
    <Card>
      <Stack spacing={1} paddingY={2} paddingX={3}>
        {tip ? (
          <Tooltip title={t(tip)}>
            <Box>
              <TooltipSpan color="text.secondary">{t(title)}</TooltipSpan>
            </Box>
          </Tooltip>
        ) : (
          <Span color="text.secondary">{t(title)}</Span>
        )}
        <H2>{data}</H2>
      </Stack>
    </Card>
  )
}

export default StatsCard
