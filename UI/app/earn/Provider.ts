import { useWallet } from 'domains'
import { useTranslation } from 'next-i18next'
import { useCallback, useMemo } from 'react'

import { useTheme } from '@mui/material/styles'

import { createContextWithProvider } from 'app/utils/createContext'
import { safeGet } from 'app/utils/get'

import type { TabsProps } from 'components/tabs'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNFTCollections, useNetwork, useVault } from 'domains/data'

import { toBN } from 'lib/math'
import { type SendTransaction, useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

import Deposit from './Content/Tabs/Deposit'
import Withdraw from './Content/Tabs/Withdraw'

const usePageEffect = () => {
  return {}
}

const useStats = () => {
  const {
    vault: { unrealizedPNL, unrealizedPremium, totalSupply },
    analytics: { TVL, ncETHPrice },
  } = useVault()
  const stats = useMemo(() => {
    const returnValue = {
      TVL,
      APY: safeGet(() => (unrealizedPremium.isZero() ? toBN(0) : unrealizedPNL.div(unrealizedPremium))),
      ncETHPrice,
      ncETHTotalSupply: totalSupply,
    }
    return returnValue
  }, [TVL, ncETHPrice, totalSupply, unrealizedPNL, unrealizedPremium])

  return stats
}
type UseYourStatsProps = {
  stats: ReturnType<typeof useStats>
}
const useYourStats = ({ stats }: UseYourStatsProps) => {
  const {
    vault: {
      lpToken: { balance, lockedBalance, releaseTime },
      totalAssets,
      totalLockedAssets,
    },
  } = useVault()
  const your = useMemo(() => {
    const returnValue = {
      ncETHBalance: balance,
      lockedNcETHBalance: lockedBalance,
      totalValue: safeGet(() => balance.plus(lockedBalance).times(stats.ncETHPrice)),
      estimatedEarnings: toBN(0), // TODO: calculate
    }
    return returnValue
  }, [balance, lockedBalance, stats.ncETHPrice])

  const vault = useMemo(() => {
    const returnValue = {
      available: safeGet(() => totalAssets.minus(totalLockedAssets)),
    }
    return returnValue
  }, [totalAssets, totalLockedAssets])

  const locked = useMemo(() => {
    const returnValue = {
      lockedNcETHBalance: lockedBalance,
      lockedUnitil: releaseTime,
    }
    return returnValue
  }, [lockedBalance, releaseTime])

  return { your, vault, locked }
}
type UseTabsProps = {
  stats: ReturnType<typeof useStats>
  tTabs: (key: string) => string
  sendTransaction: SendTransaction
}
const useTabs = ({ stats: { ncETHPrice }, tTabs, sendTransaction }: UseTabsProps) => {
  const {
    updateVaults,
    vault: {
      lpToken: { allowance, wETHBalance, wETHAllowance, maxWithdraw },
    },
  } = useVault()
  const { updateNFTCollections } = useNFTCollections()
  const tabs = useMemo(() => {
    const returnValue: TabsProps['tabs'] = [
      {
        title: 'deposit',
        children: {
          component: Deposit,
        },
      },
      {
        title: 'withdraw',
        children: {
          component: Withdraw,
        },
      },
    ]
    return returnValue.map((i) => {
      i.title = tTabs(`${i.title}.action`)
      return i
    })
  }, [tTabs])

  const {
    contracts: { vaultService, erc20Service },
    address: { Vault: vaultAddress, WETH: wETHAddress, LPToken: lpTokenAddress },
  } = useNetwork()
  const { account } = useWallet()

  const approveDeposit = useCallback(
    (amount: string) => {
      return transaction({
        createTransaction: vaultService.approveDeposit({
          Vault: vaultAddress,
          userAddress: account,
          wETHAddress,
          lpTokenAddress,
          amount,
          approveService: erc20Service,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: true,
      }).finally(() => {
        updateVaults()
      })
    },
    [account, erc20Service, lpTokenAddress, sendTransaction, updateVaults, vaultAddress, vaultService, wETHAddress]
  )

  const deposit = useCallback(
    (amount: string) => {
      return transaction({
        createTransaction: vaultService.deposit({
          Vault: vaultAddress,
          userAddress: account,
          wETHAddress,
          lpTokenAddress,
          amount,
          approveService: erc20Service,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      }).finally(() => {
        updateVaults()
        updateNFTCollections()
      })
    },
    [
      account,
      erc20Service,
      lpTokenAddress,
      sendTransaction,
      updateNFTCollections,
      updateVaults,
      vaultAddress,
      vaultService,
      wETHAddress,
    ]
  )

  const approveWithdraw = useCallback(
    (amount: string) => {
      return transaction({
        createTransaction: vaultService.approveWithdraw({
          Vault: vaultAddress,
          userAddress: account,
          lpTokenAddress,
          amount,
          approveService: erc20Service,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: true,
      }).finally(() => {
        updateVaults()
        updateNFTCollections()
      })
    },
    [
      account,
      erc20Service,
      lpTokenAddress,
      sendTransaction,
      updateNFTCollections,
      updateVaults,
      vaultAddress,
      vaultService,
    ]
  )
  const withdraw = useCallback(
    (amount: string) => {
      return transaction({
        createTransaction: vaultService.withdraw({
          Vault: vaultAddress,
          userAddress: account,
          lpTokenAddress,
          amount,
          approveService: erc20Service,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      }).finally(() => {
        updateVaults()
        updateNFTCollections()
      })
    },
    [
      account,
      erc20Service,
      lpTokenAddress,
      sendTransaction,
      updateNFTCollections,
      updateVaults,
      vaultAddress,
      vaultService,
    ]
  )

  return {
    tabs,
    approveDeposit,
    deposit,
    approveWithdraw,
    withdraw,
    allowance,
    wETHBalance,
    wETHAllowance,
    maxWithdraw,
    ncETHPrice,
  }
}

export default createContextWithProvider(() => {
  const theme = useTheme()
  const { t } = useTranslation('app-earn')
  const { t: tYourStats } = useTranslation('app-earn', { keyPrefix: 'YourStats' })
  const { t: tTabs } = useTranslation('app-earn', { keyPrefix: 'Tabs' })
  const sendTransaction = useSendTransaction()

  const stats = useStats()
  const yourStats = useYourStats({ stats })
  const tabs = useTabs({ stats, tTabs, sendTransaction })

  return {
    theme,
    t,
    tYourStats,
    tTabs,

    stats,
    yourStats,
    tabs,

    usePageEffect,
  }
})
