import { useWallet } from 'domains'
import { useTranslation } from 'next-i18next'
import { useCallback, useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { useTheme } from '@mui/material/styles'

import { DAY, getCurrentTimestamp, getTimestamp } from 'app/constant'
import { usePost } from 'app/hooks/request'
import { createContextWithProvider } from 'app/utils/createContext'
import { safeGet } from 'app/utils/get'

import type { TabsProps } from 'components/tabs'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNFTCollections, useNetwork, useVault } from 'domains/data'
import { getNcETHPriceTrends } from 'domains/data/NFTCollection/adapter/ncETHPriceTrends/request'
import type { NcETHPriceTrends } from 'domains/data/NFTCollection/adapter/ncETHPriceTrends/types'

import { toBN } from 'lib/math'
import { type SendTransaction, useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

import Deposit from './Content/Tabs/Deposit'
import Withdraw from './Content/Tabs/Withdraw'

const usePageEffect = () => {
  return {}
}

const useStatsAPY = () => {
  const { post, cancel, loading } = usePost(getNcETHPriceTrends)
  const [sourceData, setSourceData] = useImmer<NcETHPriceTrends[]>([])
  const { chainId } = useWallet()
  const { analytics } = useVault()

  useEffect(() => {
    post({
      chainId,
      startTimestamp: getCurrentTimestamp() - getTimestamp(7 * DAY),
      endTimestamp: getCurrentTimestamp() - getTimestamp(6 * DAY),
    }).then((data) => setSourceData(() => data))

    return () => {
      cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId])

  const value = useMemo(() => {
    const currentNcETHPrice = analytics.ncETHPrice
    if (!currentNcETHPrice) return
    const ncETHPrice7DaysAgo = safeGet(() => sourceData[0].ncETHPrice) || toBN(1)
    return currentNcETHPrice.minus(ncETHPrice7DaysAgo).div(ncETHPrice7DaysAgo).div(7).multipliedBy(365)
  }, [analytics.ncETHPrice, sourceData])

  return {
    loading,
    value,
  }
}

const useStats = () => {
  const {
    vault: { totalSupply },
    analytics: { TVL, ncETHPrice },
  } = useVault()
  const stats = useMemo(() => {
    const returnValue = {
      TVL,
      ncETHPrice,
      ncETHTotalSupply: totalSupply,
    }
    return returnValue
  }, [TVL, ncETHPrice, totalSupply])

  const APY = useStatsAPY()

  return {
    ...stats,
    APY,
  }
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
    trader,
  } = useVault()
  const your = useMemo(() => {
    const returnValue = {
      ncETHBalance: balance,
      lockedNcETHBalance: lockedBalance,
      totalValue: safeGet(() => balance.plus(lockedBalance).times(stats.ncETHPrice)) || toBN(0),
      estimatedEarnings: toBN(0),
    }

    returnValue.estimatedEarnings = returnValue.totalValue.minus(safeGet(() => trader.depositAmount) || toBN(0))
    return returnValue
  }, [balance, lockedBalance, stats.ncETHPrice, trader?.depositAmount])

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
      lpToken: { allowance, wETHBalance, wETHAllowance, maxRedeem },
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
    maxRedeem,
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
