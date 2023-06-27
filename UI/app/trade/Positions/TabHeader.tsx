import { useTranslation } from 'next-i18next'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'

import { usePageTrade } from '..'

const TabHeader: FCC = ({ children }) => {
  const { t: tOptionPositionsTabs } = useTranslation('app-trade', { keyPrefix: 'OptionPositions.tabs' })
  const {
    collections,
    positions: {
      filter: { collectionAddress, setCollectionAddress },
    },
  } = usePageTrade()
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      paddingTop={1}
      justifyContent={{ sm: 'space-between' }}
    >
      {children}
      <Stack spacing={1} direction="row" display="flex">
        <FormControl size="small" sx={{ width: '200px' }}>
          <InputLabel sx={{ fontSize: 14 }}>{tOptionPositionsTabs('collectionAddress')}</InputLabel>
          <Select
            value={collectionAddress}
            onChange={(e) => setCollectionAddress(e.target.value)}
            label={tOptionPositionsTabs('collectionAddress')}
          >
            <MenuItem value={''}>
              <ListItemText sx={{ margin: 0 }} primary="all" primaryTypographyProps={{ variant: 'body2' }} />
            </MenuItem>
            {collections.map((collection) => {
              return (
                <MenuItem value={collection.address.collection} key={collection.address.collection}>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={collection.id}
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  )
}

export default TabHeader
