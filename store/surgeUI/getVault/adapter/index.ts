import type { GetVaultProps, SurgeUIService } from 'lib/protocol/typechain/nftcall-surge'

import { getGetVaultBaseData } from './getGetVaultBaseData'

export type GetStoreVaultProps = {
  surgeUIService: SurgeUIService
} & GetVaultProps

export const getVaultRequest = ({ surgeUIService, ...props }: GetStoreVaultProps) => {
  return surgeUIService.getVault(props).then(getGetVaultBaseData)
}

export type GetVaultSliceState = Awaited<ReturnType<typeof getVaultRequest>>
