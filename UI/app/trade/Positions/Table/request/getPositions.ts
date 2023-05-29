import { getAddresses, getNumber, getWeiToValueBN } from 'app/utils/get'

import type { OptionPositionBaseData } from 'lib/graphql/option-position'
import { toBN } from 'lib/math'
import type { OptionType } from 'lib/protocol/typechain/nftcall-surge'

export type OptionPosition = {
  userAddress: string
  nftAddress: string
  positionId: number
  optionType: OptionType
  spotPrice: BN
  strikePrice: BN
  amount: BN
  premium: BN
  expiration: number
  updateTimestamp: number
}
export const getPositions = (positions: OptionPositionBaseData[]) => {
  if (!positions) return []
  const returnValue = positions.map((t) => {
    const timestamps = getNumber(t, ['updateTimestamp'])
    const strikeTimestamps = getNumber(t.strikeId, ['expiration'])
    const returnValue: OptionPosition = {
      ...t,
      ...timestamps,
      ...strikeTimestamps,
      ...getAddresses(t, ['nftAddress', 'userAddress']),
      ...getWeiToValueBN(t, ['amount'], 18),
      ...getWeiToValueBN(t.strikeId, ['strikePrice', 'spotPrice'], 18),
      premium: toBN(0),
    }
    return returnValue
  })

  return returnValue
}
