import { getAddresses, getNumber, getWeiToValueBN } from 'app/utils/get'

import { type OptionPositionBaseData, OptionPositionStatus } from 'lib/graphql/option-position'
import { BN, toBN } from 'lib/math'
import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

export type OptionPosition = {
  status: OptionPositionStatus
  userAddress: string
  nftAddress: string
  positionId: number
  optionType: OptionType
  spotPrice: BN
  strikePrice: BN
  amount: BN
  premium: BN
  PNL: BN
  PNLRate: BN
  expiration: number
  updateTimestamp: number
}
export const getPositions = (positions: OptionPositionBaseData[], floorPrice: BN) => {
  if (!positions) return []
  const returnValue = positions.map((t) => {
    const timestamps = getNumber(t, ['updateTimestamp'])
    const strikeTimestamps = getNumber(t.strikeId, ['expiration'])
    const returnValue: OptionPosition = {
      ...t,
      ...timestamps,
      ...strikeTimestamps,
      ...getAddresses(t, ['nftAddress', 'userAddress']),
      ...getWeiToValueBN(t, ['amount', 'premium'], 18),
      ...getWeiToValueBN(t.strikeId, ['strikePrice', 'spotPrice'], 18),
      PNL: toBN(0),
      PNLRate: toBN(0),
    }

    if (returnValue.status === OptionPositionStatus.Active) {
      if (returnValue.expiration < Date.now()) {
        returnValue.status = OptionPositionStatus.Expired
      }
    }

    if (returnValue.status === OptionPositionStatus.Active) {
      let optionValue = toBN(0)
      if (returnValue.optionType === OptionType.LONG_CALL) {
        optionValue = floorPrice.minus(returnValue.strikePrice).multipliedBy(returnValue.amount)
      } else {
        optionValue = returnValue.strikePrice.minus(floorPrice).multipliedBy(returnValue.amount)
      }

      returnValue.PNL = BN.max(optionValue.minus(returnValue.premium), returnValue.premium.multipliedBy(-1))
    }

    returnValue.PNLRate = returnValue.PNL.dividedBy(returnValue.premium)

    return returnValue
  })

  return returnValue
}
