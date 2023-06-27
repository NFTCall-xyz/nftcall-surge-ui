import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

import Tabs from './Tabs'
import YourStats from './YourStats'

const Content: FC = () => {
  const minHeight = 'calc(100vh - 450px)'

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ minHeight }}>
            <CardContent>
              <YourStats />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card sx={{ minHeight }}>
            <CardContent>
              <Tabs />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Content
