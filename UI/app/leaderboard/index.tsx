import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import { H1, Paragraph } from 'components/Typography'

import PageProvider from './Provider'
import Table from './Table'

export const usePageLeaderboard = PageProvider.createUseContext()

const Leaderboard: FC = () => {
  const { t, usePageEffect } = usePageLeaderboard()
  usePageEffect()

  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Stack spacing={2}>
          <H1>{t('title')}</H1>
          <Paragraph color="text.secondary">{t('subTitle')}</Paragraph>
        </Stack>

        <Card>
          <CardContent>
            <Table />
          </CardContent>
        </Card>
      </Stack>
    </Container>
  )
}

export default PageProvider.withProvider(Leaderboard)
