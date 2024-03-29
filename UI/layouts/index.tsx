import type { MyAppProps } from 'app'
import { useApp } from 'app'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { Fragment, useMemo } from 'react'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import SettingDialog from 'app/setting/components/SettingDialog'

import MotionDiv from 'lib/framer-motion/components/MotionDiv'
import NProgress from 'lib/nprogress/components/NProgress'
import ChainDialog from 'lib/wallet/components/ChainDialog'
import ConnectDialog from 'lib/wallet/components/ConnectDialog'

import AppLayout from './app'
import HomeLayout from './home'

const ROOT = styled(Box)`
  ${() => ({
    position: 'relative',
    overflow: 'hidden',
  })}
`

const ActiveLayout: FCC = (props) => {
  const {
    menu: { current },
  } = useApp()

  switch (current.key) {
    case 'Home':
      return <HomeLayout {...props} />
    default:
      return <AppLayout {...props} />
  }
}

const Layout: FC<MyAppProps> = ({ Component, pageProps }) => {
  const { t } = useTranslation()
  const {
    menu: { current },
  } = useApp()
  const seoTitle = 'NFTCall | Speculate, Hedge or Earn Premiums from NFT Options'
  const desc =
    'NFTCall Surge is an NFT options trading platform on Layer-2 that uses a peer-to-pool model and auto market making mechanism. It enables NFT investors to trade NFT options against liquidity pools, speculate or hedge against price fluctuations, while liquidity providers can earn premiums from auto market making.'
  const title = useMemo(
    () => (current.key === 'Home' ? seoTitle : `NFTCall | ${t('router:' + current.key)}`),
    [current.key, t]
  )

  const Page = useMemo(() => {
    const PageTransition: FC = () => (
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <Component {...pageProps} />
      </MotionDiv>
    )
    return PageTransition
  }, [Component, pageProps])

  return (
    <Fragment>
      <NProgress />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={seoTitle} />
        <meta property="og:image" content="https://nftcall.xyz/logo-square.jpg" />
        <meta property="og:description" content={desc} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:url" content="https://nftcall.xyz" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:site" content="@nftcall_xyz" />
      </Head>
      <ROOT>
        <ActiveLayout>
          <Page />
          <ChainDialog />
          <ConnectDialog />
          <SettingDialog />
        </ActiveLayout>
      </ROOT>
    </Fragment>
  )
}

export default Layout
