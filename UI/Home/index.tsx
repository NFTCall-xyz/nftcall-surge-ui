import Stack from '@mui/material/Stack'

import CTA from './CTA'
import Features from './Features'
import Hero from './Hero'
import Layer2 from './Layer2'
import Why from './Why'
import FAQ from './FAQ'

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
