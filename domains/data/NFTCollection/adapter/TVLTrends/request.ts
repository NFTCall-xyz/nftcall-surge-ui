import { getNumber } from 'app/utils/get'
import { parseParams } from 'app/utils/url/params'

import { weiToValue } from 'lib/math'

import type { GetTVLTrendsProps, TVLTrends } from './types'

export const getTVLTrends = (props: GetTVLTrendsProps): Promise<TVLTrends[]> => {
  const { chainId, startTimestamp, endTimestamp } = props

  const fn = (): Promise<any> =>
    fetch(
      parseParams(`https://api.nftcall.xyz/api/v1/surge/tvl`, {
        chain_id: chainId,
        start: startTimestamp,
        end: endTimestamp,
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
    data.map((item: any) => {
      const timestamps = getNumber(item, ['time'])
      return {
        chainId,
        TVL: weiToValue(item.tvl, 18),
        createTime: timestamps.time,
      }
    })
  )
}
