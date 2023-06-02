import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useMemo } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'

import Table from './Table'

const Positions: FC = () => {
  const { t: tOptionPositions } = useTranslation('app-trade', { keyPrefix: 'OptionPositions' })
  const theme = useTheme()
  const tabs = useMemo(() => {
    const returnValue: TabsProps['tabs'] = [
      {
        title: 'activePositions',
        children: {
          component: Table,
          props: {
            isActive: true,
          },
        },
      },
      {
        title: 'history',
        children: {
          component: Table,
        },
      },
    ]
    return returnValue.map((i) => {
      i.title = tOptionPositions(`tabs.${i.title}`)
      return i
    })
  }, [tOptionPositions])

  return (
    <Card sx={{ flex: 1 }}>
      <CardContent sx={{ paddingX: 3, paddingY: 0 }}>
        <Grid container>
          <Grid item xs={12}>
            <Tabs
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Positions
