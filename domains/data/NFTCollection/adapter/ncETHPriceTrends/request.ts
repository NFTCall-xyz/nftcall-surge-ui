import { getNumber } from 'app/utils/get'
import { parseParams } from 'app/utils/url/params'

import { weiToValue } from 'lib/math'

import type { GetNcETHPriceTrendsProps, NcETHPriceTrends } from './types'

export const getNcETHPriceTrends = (props: GetNcETHPriceTrendsProps): Promise<NcETHPriceTrends[]> => {
  const { chainId, startTimestamp, endTimestamp } = props

  const fn = (): Promise<any> =>
    fetch(
      parseParams(`https://api.nftcall.xyz/api/v1/surge/price`, {
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
        ncETHPrice: weiToValue(item.price, 18),
        createTime: timestamps.time,
      }
    })
  )
}
