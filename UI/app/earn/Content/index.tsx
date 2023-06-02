import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

import Tabs from './Tabs'
import YourStats from './YourStats'

const Content: FC = () => {
  const height = 'calc(100vh - 450px)'

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ height }}>
            <CardContent>
              <YourStats />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ height }}>
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
