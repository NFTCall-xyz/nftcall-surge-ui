import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'

import { usePageTrade } from '..'
import NFTCollection from './NFTCollection'
import { useTranslation } from 'next-i18next'

const SelectNFTCollection: FC = () => {
  const { collections } = usePageTrade()
  const { t } = useTranslation('app-trade', { keyPrefix: 'nftCollections' })
  return (
    <Card sx={{ flex: 1 }}>
      <CardHeader title={t('title')} />
      <CardContent>
        <Stack spacing={2}>
          {collections.map((collection) => (
            <NFTCollection key={collection.address.NFT} collection={collection} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default SelectNFTCollection
