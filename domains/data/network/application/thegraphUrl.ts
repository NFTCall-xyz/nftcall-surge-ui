import { useWallet } from 'domains'
import { useMemo } from 'react'

import { isStage } from 'app/constant/envs'

// import { ChainId } from 'lib/wallet/constant/chains'

//   'https://gateway.testnet.thegraph.com/api/693f585e54ce023909dcce542bb2ef6a/subgraphs/id/8psvhQk9V2oy1FBh8hJ6eTCPth8ffaf2x18Vz3vU1nTN',

const getThegraphUrl = (chainId: number) => {
  switch (chainId) {
    default:
      return 'https://api.thegraph.com/subgraphs/name/nftcall-xyz/nftcall-surge'
  }
}

export const useThegraphUrl = () => {
  const { chainId } = useWallet()
  const address = useMemo(() => {
    const url = getThegraphUrl(chainId)
    return isStage ? `${url}-stage` : url
  }, [chainId])

  return address
}
