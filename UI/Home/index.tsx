import Stack from '@mui/material/Stack'

import Features from './Features'
import CTA from './CTA'
import Hero from './Hero'
import Why from './Why'
import Layer2 from './Layer2'

const Home = () => {
  return (
    <Stack spacing={16}>
      <Hero />
      <Features />
      <Why />
      <Layer2 />
      <CTA />
    </Stack>
  )
}

export default Home
