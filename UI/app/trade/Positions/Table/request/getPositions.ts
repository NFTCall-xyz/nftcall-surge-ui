import { getAddresses, getNumber, getWeiToValueBN } from 'app/utils/get'

import type { OptionPositionBaseData, OptionPositionStatus } from 'lib/graphql/option-position'
import { toBN } from 'lib/math'
import type { OptionType } from 'lib/protocol/typechain/nftcall-surge'

export type OptionPosition = {
  status: OptionPositionStatus
  userAddress: string
  collectionAddress: string
  positionId: number
  optionType: OptionType
  spotPrice: BN
  strikePrice: BN
  amount: BN
  premium: BN
  excessPremium: BN
  returnedPremium: BN
  keeperFee: BN
  revenue: BN
  exerciseFee: BN
  PNL: BN
  PNLRate: BN
  expiration: number
  updateTimestamp: number
}
export const getPositions = (positions: OptionPositionBaseData[]) => {
  if (!positions) return []
  const returnValue = positions.map((t) => {
    const timestamps = getNumber(t, ['updateTimestamp', 'expiration'])
    const returnValue: OptionPosition = {
      ...t,
      ...timestamps,
      ...getAddresses(t, ['collectionAddress', 'userAddress']),
      ...getWeiToValueBN(
        t,
        [
          'amount',
          'premium',
          'strikePrice',
          'spotPrice',
          'returnedPremium',
          'revenue',
          'excessPremium',
          'keeperFee',
          'exerciseFee',
        ],
        18
      ),
      PNL: toBN(0),
      PNLRate: toBN(0),
    }

    return returnValue
  })

  return returnValue
}
