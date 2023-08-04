import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { H2, H4, Paragraph } from 'components/Typography'

import { useTranslation } from 'next-i18next'

const FAQ: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'faq' })
  const qa = t('qa', { returnObjects: true}) as any
  return (
    <Stack component="section" spacing={4} paddingX={4}>
      <Stack spacing={4} alignItems="center">
        <Stack spacing={2}>
          <H2 fontSize={36} textAlign={{ xs: 'center', md: 'left' }}>
            {t('title')}
          </H2>
        </Stack>
      </Stack>
      <Box>
        {qa.map((q: any, i: number) => (
          <Box
            component={Accordion}
            key={i}
            paddingY={1}
            elevation={0}
            sx={{
              '&:first-of-type': {
                borderTopLeftRadius: 1,
                borderTopRightRadius: 1,
              },
              '&:not(:first-of-type):before': {
                opacity: '1 !important',
                display: 'block !important',
              },
              '&.Mui-expanded': {
                margin: 0,
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
              padding={'0 !important'}
            >
              <Box paddingY={2}>
                <H4 fontSize={20}>{t(`qa.${i}.title`)}</H4>
              </Box>
            </Box>
            <AccordionDetails>
              {(t(`qa.${i}.text`, { returnObjects: true }) as any || []).map((line: string, i: number) => 
                <Paragraph color='text.secondary' key={i} marginBottom={1.5}>{line}</Paragraph>
              )}
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Stack>
  )
}

export default FAQ