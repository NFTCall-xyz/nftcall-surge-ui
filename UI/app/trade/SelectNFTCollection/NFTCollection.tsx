import { useMemo } from 'react'

import { Card } from '@mui/material'
import Stack from '@mui/material/Stack'

import { Tiny } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import type { NFTCollection as Collection } from 'domains/data/NFTCollection'
import NFTCollectionTitle from 'domains/data/NFTCollection/components/NFTCollectionTitle'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import { usePageTrade } from '..'

type NFTCollectionProps = {
  collection: Collection
}
const NFTCollection: FC<NFTCollectionProps> = ({ collection }) => {
  const {
    collection: {
      collection: { address },
      setNFTCollectionAddress,
    },
    floorPrice24Change,
  } = usePageTrade()
  const isSelected = useMemo(() => collection.address.NFT === address.NFT, [address.NFT, collection.address.NFT])

  return (
    <Card
      variant="outlined"
      sx={{
        border: 'none',
        backgroundColor: isSelected ? 'primary.200' : 'action.disabledBackground',
        padding: 1.5,
        '&:hover': {
          backgroundColor: 'primary.200',
          cursor: 'pointer',
        },
      }}
      onClick={() => {
        setNFTCollectionAddress(collection.address.NFT)
      }}
    >
      <FlexBetween>
        <NFTCollectionTitle collection={collection} />
        <Stack spacing={1} alignItems="end">
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'ETH'} sx={{ width: 16, height: 16 }} />
            <NumberDisplay value={collection.data.price} abbreviate={{}} />
          </Stack>
          <RiseOrFall value={floorPrice24Change.value[collection.address.NFT]}>
            <Tiny color="unset">
              <NumberDisplay
                value={floorPrice24Change.value[collection.address.NFT]}
                abbreviate={{}}
                numberFormatOptions={{ signDisplay: 'always' }}
                options="percent"
              />
            </Tiny>
          </RiseOrFall>
        </Stack>
      </FlexBetween>
    </Card>
  )
}

export default NFTCollection
