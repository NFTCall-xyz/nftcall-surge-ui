import { useWallet } from 'domains'
import { useCallback } from 'react'

import { createContextWithProvider } from 'app/utils/createContext'

import { transaction } from 'domains/controllers/adapter/transaction'

import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { ForceClosePendingPositionProps } from 'lib/protocol/typechain/nftcall-surge'

import { useNetwork } from '..'

const useOptionPositionService = () => {
  const {
    address: { Vault: vaultAddress },
    contracts: { vaultService },
  } = useNetwork()
  const { account } = useWallet()

  const sendTransaction = useSendTransaction()
  const forceClosePendingPosition = useCallback(
    (props: Pick<ForceClosePendingPositionProps, 'positionId' | 'collectionAddress'>) => {
      return transaction({
        createTransaction: vaultService.forceClosePendingPosition({
          Vault: vaultAddress,
          userAddress: account,
          ...props,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [account, sendTransaction, vaultAddress, vaultService]
  )

  return { forceClosePendingPosition }
}
const { Provider: OptionPositionProvider, createUseContext } = createContextWithProvider(useOptionPositionService)
export const createOptionPositionContext = createUseContext

export default OptionPositionProvider
