import { useTranslation } from 'next-i18next'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack'

import { useIsMobile } from 'app/hooks/useIsMobile'

import { H3 } from 'components/Typography'

import { usePageTrade } from '..'
import NFTCollection from './NFTCollection'

const SelectNFTCollection: FC = () => {
  const { collections } = usePageTrade()
  const { t } = useTranslation('app-trade', { keyPrefix: 'nftCollections' })
  const isMobile = useIsMobile()
  if (isMobile) {
    return (
      <Stack spacing={4} padding={2}>
        <H3>{t('title')}</H3>
        <Stack spacing={2}>
          {collections.map((collection) => (
            <NFTCollection key={collection.address.collection} collection={collection} />
          ))}
        </Stack>
      </Stack>
    )
  }

  return (
    <Card>
      <CardHeader title={<H3>{t('title')}</H3>} />
      <CardContent sx={{ overflow: 'auto', height: '100%' }}>
        <Stack spacing={2}>
          {collections.map((collection) => (
            <NFTCollection key={collection.address.collection} collection={collection} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default SelectNFTCollection
