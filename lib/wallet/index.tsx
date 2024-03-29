import { useWeb3React } from '@web3-react/core'
import { useMemo } from 'react'
import { useImmer } from 'use-immer'

import { useMount } from 'app/hooks/useMount'
import { createContextWithProvider } from 'app/utils/createContext'

import { defaultMarket } from 'lib/protocol/market'

import UseWalletProvider from './UseWalletProvider'
import { useWalletDialogs } from './application/dialogs'
import { useENS } from './application/ens'
import { WalletStatus } from './constant'
import { ChainId, getChainInformationByChainId } from './constant/chains'
import { getProvider } from './provider'

const useWalletService = () => {
  const [defalutChainId, setDefalutChainId] = useImmer(defaultMarket.chainId)
  const dialogs = useWalletDialogs()
  const {
    connector,
    chainId: walletChainId,
    accounts,
    isActivating,
    isActive,
    provider: walletProvider,
    account: walletAccount,
  } = useWeb3React()

  const chainId = useMemo(() => walletChainId || defalutChainId, [walletChainId, defalutChainId])

  const provider = useMemo(() => {
    if (!walletProvider || !walletChainId) return getProvider(chainId)
    return walletProvider
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, walletChainId, walletProvider])

  const mainnetProvider = useMemo(() => {
    return getProvider(ChainId.ethereum)
  }, [])

  const status = useMemo(() => {
    if (isActivating) {
      return WalletStatus.connecting
    } else if (isActive) {
      return WalletStatus.connected
    }
    return WalletStatus.disconnected
  }, [isActivating, isActive])

  const network = useMemo(() => {
    if (chainId === ChainId.ethereum) return
    return getChainInformationByChainId(chainId)
  }, [chainId])

  useMount(() => {
    try {
      ;(connector.connectEagerly() as Promise<any>).catch((e) => {
        console.error('[wallet][connectEagerly]', e)
      })
    } catch (error) {}
  })

  const ens = useENS(mainnetProvider)

  const account = useMemo(() => {
    if (!network) return
    return walletAccount
  }, [network, walletAccount])

  return {
    connector,
    dialogs,
    chainId,
    network,
    accounts,
    isActivating,
    isActive,
    provider,
    account,
    walletAccount,
    status,

    setDefalutChainId,

    ens,
  }
}

export const {
  Context,
  Provider: WalletProvider,
  createUseContext: createWalletContext,
} = createContextWithProvider(useWalletService)

export const Provider: FCC = (props) => {
  return (
    <UseWalletProvider>
      <WalletProvider>{props.children}</WalletProvider>
    </UseWalletProvider>
  )
}

export default Provider
