import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import { H1, Paragraph } from 'components/Typography'

import Content from './Content'
import PageProvider from './Provider'
import Stats from './Stats'

export const usePageEarn = PageProvider.createUseContext()

const Earn: FC = () => {
  const { t, usePageEffect } = usePageEarn()
  usePageEffect()

  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Stack spacing={1} marginBottom={2}>
          <H1>{t('title')}</H1>
          <Paragraph color="text.secondary">{t('subTitle')}</Paragraph>
        </Stack>
        <Stats />
        <Content />
      </Stack>
    </Container>
  )
}

export default PageProvider.withProvider(Earn)
