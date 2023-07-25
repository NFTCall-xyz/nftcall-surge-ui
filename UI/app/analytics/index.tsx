import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import { H1, Paragraph } from 'components/Typography'

import NcETHPriceTrends from './NcETHPriceTrends'
import PageProvider from './Provider'
import Stats from './Stats'
import TVLTrends from './TVLTrends'
import Table from './Table'

export const usePageAnalytics = PageProvider.createUseContext()

const Analytics: FC = () => {
  const { t, usePageEffect } = usePageAnalytics()
  usePageEffect()

  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Stack spacing={1} marginBottom={2}>
          <H1>{t('title')}</H1>
          <Paragraph color="text.secondary">{t('subTitle')}</Paragraph>
        </Stack>
        <Stats />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TVLTrends />
            </Grid>
            <Grid item xs={12} md={6}>
              <NcETHPriceTrends />
            </Grid>
          </Grid>
        </Box>
        <Table />
      </Stack>
    </Container>
  )
}

export default PageProvider.withProvider(Analytics)
