import { useWallet } from 'domains'
import { useMemo } from 'react'

import { ERC20Service } from 'lib/protocol/typechain/erc20'

export const useContracts = () => {
  const { provider } = useWallet()
  const contracts = useMemo(() => {
    return {
      erc20Service: new ERC20Service(provider),
    }
  }, [provider])

  // contracts.ChainlinkService.latestRound()

  return contracts
}
