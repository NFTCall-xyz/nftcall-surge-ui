import { useWallet } from 'domains'
import { useMemo } from 'react'

import { isStage } from 'app/constant/envs'

// import { ChainId } from 'lib/wallet/constant/chains'

//   'https://gateway.testnet.thegraph.com/api/693f585e54ce023909dcce542bb2ef6a/subgraphs/id/8psvhQk9V2oy1FBh8hJ6eTCPth8ffaf2x18Vz3vU1nTN',

const getThegraphUrl = (chainId: number) => {
  switch (chainId) {
    default:
      return 'https://api.studio.thegraph.com/query/15757/nftcall-surge-blast-testnet/v0.0.3'
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
