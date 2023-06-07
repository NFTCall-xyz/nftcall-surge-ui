import { useTranslation } from 'next-i18next'
import React from 'react'

import ArrowForward from '@mui/icons-material/ArrowForward'
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone'
import LocalDrinkTwoToneIcon from '@mui/icons-material/LocalDrinkTwoTone'
import SwapVerticalCircleTwoToneIcon from '@mui/icons-material/SwapVerticalCircleTwoTone'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

import { H2, H3, Paragraph } from 'components/Typography'

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  content: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content }) => {
  const theme = useTheme()
  return (
    <Stack
      padding={4}
      spacing={2}
      alignItems="center"
      height="450px"
      sx={{
        '&:hover': {
          background: theme.palette.background.paper,
        },
        borderRadius: '20px',
      }}
    >
      <IconButton
        color="primary"
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: '3rem',
          },
          cursor: 'default',
        }}
      >
        {icon}
      </IconButton>
      <Stack spacing={2} alignItems="center">
        <H3 fontSize={20}>{title}</H3>
        <Paragraph color="text.secondary">{content}</Paragraph>
      </Stack>
    </Stack>
  )
}

const featureIcons = [
  { icon: <LocalDrinkTwoToneIcon /> },
  { icon: <LocalAtmTwoToneIcon /> },
  { icon: <SwapVerticalCircleTwoToneIcon /> },
]

const Features: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'features' })
  return (
    <Stack component="section" spacing={4}>
      <Stack spacing={4} alignItems="center">
        <Stack spacing={2}>
          <H2 fontSize={36} textAlign={{ xs: 'center', md: 'left' }}>
            {t('title')}
          </H2>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        {featureIcons.map(({ icon }, index) => (
          <Grid item xs={12} md={4} key={index}>
            <FeatureCard icon={icon} title={t(`list.${index}.title`)} content={t(`list.${index}.subTitle`)} />
          </Grid>
        ))}
      </Grid>
      <Stack alignItems="center">
        <Button size="large" variant="contained" endIcon={<ArrowForward />} href="/app">
          {t('tradeNow')}
        </Button>
      </Stack>
    </Stack>
  )
}

export default Features
