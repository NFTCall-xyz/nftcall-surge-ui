import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React from 'react'

import ArrowForward from '@mui/icons-material/ArrowForward'
import { Chip } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

import { H2, H3, Paragraph } from 'components/Typography'

import arbitrum from '../images/arbitrum.svg'
import zkSyncEra from '../images/zksync-era.svg'

type NetworkCardProps = {
  title: string
  image: any
  status: string
}

const NetworkCard: React.FC<NetworkCardProps> = ({ image, title, status }) => {
  const theme = useTheme()
  return (
    <Stack
      direction="row"
      alignItems="center"
      padding={2}
      spacing={2}
      sx={{
        background: theme.palette.background.paper,
        borderRadius: '20px',
        border: '1px solid',
        borderColor: theme.palette.divider,
      }}
    >
      <Image
        src={image}
        alt={title}
        style={{
          width: '100px',
          height: '100px',
        }}
      />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2 }}
        alignItems={{ xs: 'start', sm: 'center' }}
      >
        <H3 fontSize={24}>{title}</H3>
        <Chip label={status} color="primary" variant="outlined" />
      </Stack>
    </Stack>
  )
}

const networks = [{ image: arbitrum }, { image: zkSyncEra }]

const Layer2: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'layer2' })
  return (
    <Stack component="section" direction={{ xs: 'column', md: 'row' }} spacing={8}>
      <Stack spacing={4} paddingY={2} alignItems={{ xs: 'center', md: 'start' }} flex={1}>
        <Stack spacing={2}>
          <H2 fontSize={36} textAlign={{ xs: 'center', md: 'left' }}>
            {t('title')}
          </H2>
          <Paragraph color="text.secondary" textAlign={{ xs: 'center', md: 'left' }}>
            {t('subTitle')}
          </Paragraph>
        </Stack>
        <Box>
          <Button variant="contained" endIcon={<ArrowForward />} href="/app" size="large">
            {t('tradeNow')}
          </Button>
        </Box>
      </Stack>
      <Stack flex={1} spacing={4}>
        {networks.map(({ image }, index) => (
          <NetworkCard key={index} image={image} title={t(`list.${index}.title`)} status={t(`list.${index}.status`)} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Layer2
