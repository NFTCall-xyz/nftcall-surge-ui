import type { GraphqlVaultBaseData, ResponseType } from 'lib/graphql/vault'

export type VaultBaseData = GraphqlVaultBaseData

export const getVaultBaseData = ({ vaults }: ResponseType): VaultBaseData => {
  return vaults[0]
}
