import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'

import type { ChainId } from 'lib/wallet/constant/chains'

export const getNotificationOptionPositionKeyObject = (
  { collectionAddress, positionId }: OptionPosition,
  chainId: ChainId
) => {
  return {
    key: `${chainId}-${collectionAddress}-${positionId}`,
    chainId,
    collectionAddress,
    positionId,
  }
}
