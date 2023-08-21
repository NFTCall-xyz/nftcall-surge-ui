import Image from 'next/image'
import { useRouter } from 'next/router'

import MaterialLink from '@mui/material/Link'
import { styled } from '@mui/material/styles'

import LogoImg from './images/logo.svg'
import type { LogoProps } from './types'
import Chip from '@mui/material/Chip'

const ROOT = styled(MaterialLink)`
  display: flex;
  align-items: center;
`

const Logo = (props: LogoProps) => {
  const router = useRouter()
  return (
    <ROOT
      onClick={() => {
        router.push(__DEV__ ? '/dev' : '/')
      }}
    >
      <Image src={props.imgSrc || LogoImg} height={40} alt="NFTCall Protocol" />
      <Chip label="Beta" color="primary" sx={{ ml: 2 }} />
    </ROOT>
  )
}

export default Logo
