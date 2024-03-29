import { Trans, useTranslation } from 'next-i18next'
import Image from 'next/image'

import ArrowForward from '@mui/icons-material/ArrowForward'
// import PlayCircle from '@mui/icons-material/PlayCircleOutline'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { H1, H3, Span } from 'components/Typography'

// import Stats from '../Stats'
import ImageSrc from '../images/hero-pic.png'

const Hero: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'hero' })
  return (
    <Stack component="section" spacing={8}>
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={4}>
        <Stack spacing={4} paddingY={8} alignItems={{ xs: 'center', md: 'start' }} flex={1}>
          <Stack spacing={2}>
            <H1 fontSize={48} textAlign={{ xs: 'center', md: 'left' }}>
              <Trans
                i18nKey="title"
                t={t}
                components={{
                  NFTOptions: (
                    <Span color="primary.main" fontSize={48} fontWeight={600}>
                      {t('NFTOptions')}
                    </Span>
                  ),
                }}
              />
            </H1>
            <H3 color="text.secondary" fontWeight={400} textAlign={{ xs: 'center', md: 'left' }}>
              {t('subTitle')}
            </H3>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button variant="contained" size="large" endIcon={<ArrowForward />} href="/app">
              {t('tradeNow')}
            </Button>
            {/* <Button variant="outlined" size="large" startIcon={<PlayCircle />} href="https://youtu.be/nlgcXl5fpyw" target="_blank">
              {t('watchVideo')}
            </Button> */}
          </Stack>
        </Stack>
        <Box flex={1} position="relative" textAlign="center">
          <Image
            src={ImageSrc}
            alt={t('subTitle')}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Stack>
      {/* <Stats /> */}
    </Stack>
  )
}

export default Hero
