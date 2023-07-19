import { useWallet } from 'domains'
import { useMemo } from 'react'

import { ERC20Service } from 'lib/protocol/typechain/erc20'
import { NFTCallOracleService, SurgeUIService, VaultService, WETHService } from 'lib/protocol/typechain/nftcall-surge'

export const useContracts = () => {
  const { provider } = useWallet()
  const contracts = useMemo(() => {
    return {
      erc20Service: new ERC20Service(provider),
      surgeUIService: new SurgeUIService(provider),
      vaultService: new VaultService(provider),
      wETHService: new WETHService(provider),
      oracleService: new NFTCallOracleService(provider),
    }
  }, [provider])

  // contracts.ChainlinkService.latestRound()

  return contracts
}
