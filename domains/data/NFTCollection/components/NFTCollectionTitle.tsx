import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

import { H3, H5, Paragraph, Tiny } from 'components/Typography'

import type { NFTCollection } from '..'

type NFTCollectionTitleProps = {
  collection: NFTCollection
}
const NFTCollectionTitle: FC<NFTCollectionTitleProps> = ({
  collection: {
    id,
    info: { name, imageUrl },
  },
}) => {
  return (
    <Stack spacing={1} direction="row">
      <Avatar sx={{ width: 40 }} src={imageUrl} />
      <Stack spacing={1}>
        <H5>{id}</H5>
        <Tiny ellipsis maxWidth="100px">
          {name}
        </Tiny>
      </Stack>
    </Stack>
  )
}

export default NFTCollectionTitle
