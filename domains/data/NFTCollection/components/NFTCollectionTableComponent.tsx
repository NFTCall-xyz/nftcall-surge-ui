import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { H5, Tiny } from 'components/Typography'

import { useNFTCollections } from 'domains/data'

type NFTCollectionTableComponentProps = {
  collectionAddress: string
  positionId: number
}
const NFTCollectionTableComponent: FC<NFTCollectionTableComponentProps> = ({ collectionAddress, positionId }) => {
  const { collections } = useNFTCollections()
  const collection = collections.find((collection) => collection.address.collection === collectionAddress)
  const {
    id,
    info: { name, imageUrl },
  } = collection

  return (
    <TableCell component="div">
      <Stack spacing={1} direction="row">
        <Avatar sx={{ width: 40 }} src={imageUrl} />
        <Stack spacing={1}>
          <H5>
            {id}-{positionId}
          </H5>
          <Tiny ellipsis maxWidth="150px">
            {name}
          </Tiny>
        </Stack>
      </Stack>
    </TableCell>
  )
}

export default NFTCollectionTableComponent
