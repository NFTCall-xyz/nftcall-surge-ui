import { useWallet } from 'domains'
import { useTranslation } from 'next-i18next'
import { useCallback, useMemo } from 'react'

import { useTheme } from '@mui/material/styles'

import { createContextWithProvider } from 'app/utils/createContext'
import { safeGet } from 'app/utils/get'

import type { TabsProps } from 'components/tabs'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNetwork, useVault } from 'domains/data'

import { toBN } from 'lib/math'
import { type SendTransaction, useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

import Deposit from './Content/Tabs/Deposit'
import Withdraw from './Content/Tabs/Withdraw'

const usePageEffect = () => {
  return {}
}

const useStats = () => {
  const {
    vault: { totalAssets, unrealizedPNL, unrealizedPremium, totalSupply },
  } = useVault()
  const stats = useMemo(() => {
    const returnValue = {
      TVL: totalAssets,
      APY: safeGet(() => (unrealizedPremium.isZero() ? toBN(0) : unrealizedPNL.div(unrealizedPremium))),
      ncETHPrice: safeGet(() => (totalSupply.isZero() ? toBN(1) : totalAssets.div(totalSupply))),
      ncETHTotalSupply: totalSupply,
    }
    return returnValue
  }, [totalAssets, totalSupply, unrealizedPNL, unrealizedPremium])

  return stats
}
type UseYourStatsProps = {
  stats: ReturnType<typeof useStats>
  sendTransaction: SendTransaction
}
const useYourStats = ({ stats, sendTransaction }: UseYourStatsProps) => {
  const {
    vault: {
      lpToken: { balance, lockedBalance, releaseTime },
      totalAssets,
      totalLockedAssets,
    },
    updateVaults,
  } = useVault()
  const your = useMemo(() => {
    const returnValue = {
      ncETHBalance: balance,
      lockedNcETHBalance: lockedBalance,
      totalValue: safeGet(() => balance.plus(lockedBalance).multipliedBy(stats.ncETHPrice)),
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

  const {
    contracts: { vaultService },
    address: { Vault: vaultAddress },
  } = useNetwork()
  const { account } = useWallet()
  const claim = useCallback(() => {
    return transaction({
      createTransaction: vaultService.claimLPToken({
        Vault: vaultAddress,
        userAddress: account,
      }),
      setStatus: () => {},
      sendTransaction,
      isOnlyApprove: false,
    }).finally(() => {
      updateVaults()
    })
  }, [account, sendTransaction, updateVaults, vaultAddress, vaultService])

  const locked = useMemo(() => {
    const returnValue = {
      lockedNcETHBalance: lockedBalance,
      lockedUnitil: releaseTime,
      claim: {
        disabled: safeGet(() => releaseTime > Date.now() || !account || lockedBalance.isZero()),
        action: claim,
      },
    }
    return returnValue
  }, [account, claim, lockedBalance, releaseTime])

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
      lpToken: { wETHBalance, maxWithdraw },
    },
  } = useVault()
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
      })
    },
    [account, erc20Service, lpTokenAddress, sendTransaction, updateVaults, vaultAddress, vaultService, wETHAddress]
  )

  const withdraw = useCallback(
    (amount: string) => {
      return transaction({
        createTransaction: vaultService.withdraw({
          Vault: vaultAddress,
          userAddress: account,
          amount,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      }).finally(() => {
        updateVaults()
      })
    },
    [account, sendTransaction, updateVaults, vaultAddress, vaultService]
  )

  return { tabs, deposit, withdraw, wETHBalance, maxWithdraw, ncETHPrice }
}

export default createContextWithProvider(() => {
  const theme = useTheme()
  const { t } = useTranslation('app-earn')
  const { t: tYourStats } = useTranslation('app-earn', { keyPrefix: 'YourStats' })
  const { t: tTabs } = useTranslation('app-earn', { keyPrefix: 'Tabs' })
  const sendTransaction = useSendTransaction()

  const stats = useStats()
  const yourStats = useYourStats({ stats, sendTransaction })
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
