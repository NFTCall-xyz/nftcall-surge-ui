import type { FC } from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import Logo from '../Header/Logo'
import Links from './Links'
import LogoImgDark from './images/logo-black.svg'

const ROOT = styled(Box)`
  ${({ theme }) => ({
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
  })}
`

const Content = styled('div')`
  ${({ theme }) => ({
    paddingTop: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      ['.copy-right']: {
        marginTop: '16px',
      },
    },
  })}
`

const CopyRight = styled(Typography)`
  ${({ theme }) => ({
    fontWeight: 'normal',
    fontSize: theme.typography.pxToRem(16),
  })}
`

const Footer: FC = () => {
  const currentDate = new Date()

  return (
    <ROOT component="footer">
      <Content>
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
          <Stack spacing={4} direction={{ xs: 'column', sm: 'row' }} alignItems="center">
            <Logo imgSrc={LogoImgDark} />
            <Links />
          </Stack>
        </Stack>
        <CopyRight className="copy-right" variant="caption" color="grey.400">
          {`Copyright Ⓒ ${currentDate.getFullYear()} NFTCall. All Rights Reserved.`}
        </CopyRight>
      </Content>
    </ROOT>
  )
}

export default Footer
