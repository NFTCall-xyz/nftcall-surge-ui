import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React from 'react'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

import { H2, H3, Paragraph } from 'components/Typography'

import hedgeImg from '../images/hedge.svg'
import leverageImg from '../images/leverage.svg'
import speculateImg from '../images/speculate.svg'
import yieldImg from '../images/yield.svg'

type BenefitProps = {
  title: string
  desc: string
  image: any
}

const Benefit: React.FC<BenefitProps> = ({ title, desc, image }) => {
  const theme = useTheme()

  return (
    <Stack
      padding={6}
      spacing={4}
      sx={{
        '&:hover': {
          background: theme.palette.background.paper,
        },
        borderRadius: '20px',
        width: '100%',
      }}
    >
      <Image src={image} alt={title} width={100} />
      <H3 fontSize={20} color="primary.main">
        {title}
      </H3>
      <Paragraph fontSize={16} lineHeight={1.8} color="text.secondary">
        {desc}
      </Paragraph>
    </Stack>
  )
}

const Roadmap: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'why' })
  return (
    <Stack component="section" spacing={10} position="relative">
      <Stack spacing={{ xs: 2, md: 20 }} direction={{ xs: 'column', md: 'row' }} justifyContent="center">
        <H2 fontSize={36} textAlign={{ xs: 'center', md: 'left' }}>{t('title')}</H2>
      </Stack>
      <Grid spacing={2} container>
        {[speculateImg, hedgeImg, yieldImg, leverageImg].map((image, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Benefit title={t(`list.${index}.title`)} desc={t(`list.${index}.desc`)} image={image} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default Roadmap
