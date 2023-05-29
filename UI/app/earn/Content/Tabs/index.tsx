import Box from '@mui/material/Box'

import TabsComponent from 'components/tabs'

import { usePageEarn } from '../..'

const Tabs: FC = () => {
  const {
    tabs: { tabs },
    theme,
  } = usePageEarn()
  return (
    <Box>
      <TabsComponent
        tabs={tabs}
        sx={{
          [theme.breakpoints.up('sm')]: {
            flex: 1,
            '.MuiTabs-scroller': {
              justifyContent: { xs: 'center', sm: 'start' },
              alignItems: 'center',
              display: 'flex',
            },
            '.MuiButtonBase-root': {
              minWidth: 150,
            },
          },
        }}
      />
    </Box>
  )
}

export default Tabs
