import Stack from '@mui/material/Stack'

import { usePageTrade } from '..'
import NFTCollection from './NFTCollection'

const SelectNFTCollection: FC = () => {
  const { collections } = usePageTrade()
  return (
    <Stack spacing={4}>
      {collections.map((collection) => (
        <NFTCollection key={collection.address.NFT} collection={collection} />
      ))}
    </Stack>
  )
}

export default SelectNFTCollection
