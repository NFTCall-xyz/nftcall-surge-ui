import Stack from '@mui/material/Stack'

import CTA from './CTA'
import FAQ from './FAQ'
import Features from './Features'
import Hero from './Hero'
import Layer2 from './Layer2'
import Why from './Why'

const Home = () => {
  return (
    <Stack spacing={16}>
      <Hero />
      <Features />
      <Why />
      <Layer2 />
      <CTA />
      <FAQ />
    </Stack>
  )
}

export default Home
