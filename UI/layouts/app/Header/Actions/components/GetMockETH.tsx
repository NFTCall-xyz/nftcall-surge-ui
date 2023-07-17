import { useWallet } from 'domains'
import { useCallback, useMemo } from 'react'

import Button from '@mui/material/Button'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNetwork, useVault } from 'domains/data'

import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

const GetMockETH: FC = () => {
  const {
    address: { WETH: wETHAddress },
    contracts: { wETHService },
  } = useNetwork()
  const { account } = useWallet()
  const {
    vault: {
      lpToken: { wETHBalance },
    },
    updateVaults,
  } = useVault()
  const sendTransaction = useSendTransaction()

  const mint = useCallback(() => {
    return transaction({
      createTransaction: wETHService.mint({
        wETH: wETHAddress,
        userAddress: account,
        amount: '100',
      }),
      setStatus: () => {},
      sendTransaction,
      isOnlyApprove: false,
    }).finally(() => {
      updateVaults()
    })
  }, [account, sendTransaction, updateVaults, wETHAddress, wETHService])

  const disabled = useMemo(() => {
    if (!account || !wETHBalance) return true
    return wETHBalance.gt(10)
  }, [account, wETHBalance])

  return (
    <Button variant="outlined" disabled={disabled} onClick={mint}>
      Get Mock WETH
    </Button>
  )
}

export default GetMockETH
