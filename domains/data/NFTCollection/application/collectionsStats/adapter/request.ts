import { parseParams } from 'app/utils/url/params'

import { toBN, weiToValue } from 'lib/math'

import type { CollectionsStats, GetCollectionsStatsProps } from './types'

export const getCollectionsStats = (props: GetCollectionsStatsProps): Promise<CollectionsStats[]> => {
  const { chainId, NFTAddress } = props

  const fn = (): Promise<any> =>
    fetch(
      parseParams('https://api.nftcall.xyz/api/v1/collection/stats', {
        addresses: NFTAddress,
      }),
      {
        headers: {
          accept: 'application/json, multipart/mixed',
          'content-type': 'application/json',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
        },
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
      }
    ).then((data) => data.json())

  return fn().then(({ data }) =>
    Object.keys(data).map((key: any) => {
      const item = data[key]
      return {
        chainId,
        NFTAddress: '',
        MainNetworkNFT: key,
        floorPrice: weiToValue(item.price, 18),
        vol: weiToValue(item.vol, 18),
        changed: toBN(item.changed),
      }
    })
  )
}
