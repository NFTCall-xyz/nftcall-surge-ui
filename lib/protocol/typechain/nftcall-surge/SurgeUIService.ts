import type { providers } from 'ethers'

import BaseService from '../commons/BaseService'
import type { tEthereumAddress } from '../commons/types'
import type { SurgeUI } from './typechain'
import { SurgeUI__factory } from './typechain'

interface BaseSurgeUIProps {
  SurgeUI: tEthereumAddress
}

export interface GetNFTCollectionsProps extends BaseSurgeUIProps {
  collectionAddresses: string[]
  oracleAddress: string
  vaultAddress: string
}

export interface GetNFTCollectionProps extends BaseSurgeUIProps {
  collectionAddress: string
  oracleAddress: string
  vaultAddress: string
}

export interface GetVaultProps extends BaseSurgeUIProps {
  lpTokenAddress: string
  vaultAddress: string
  userAddress?: string
}

export class SurgeUIService extends BaseService<SurgeUI> {
  provider: providers.Provider

  constructor(provider: providers.Provider) {
    super(provider, SurgeUI__factory)
    this.provider = provider
    this.getNFTCollections = this.getNFTCollections.bind(this)
    this.getNFTCollection = this.getNFTCollection.bind(this)
    this.getVault = this.getVault.bind(this)
  }

  public async getNFTCollections(props: GetNFTCollectionsProps) {
    const { SurgeUI, collectionAddresses, oracleAddress, vaultAddress } = props
    const SurgeUIContract = this.getContractInstance(SurgeUI)

    return await SurgeUIContract.getNFTCollections(collectionAddresses, oracleAddress, vaultAddress)
  }

  public async getNFTCollection(props: GetNFTCollectionProps) {
    const { SurgeUI, collectionAddress, oracleAddress, vaultAddress } = props
    const SurgeUIContract = this.getContractInstance(SurgeUI)

    return await SurgeUIContract.getNFTCollection(collectionAddress, oracleAddress, vaultAddress)
  }

  public async getVault(props: GetVaultProps) {
    const { SurgeUI, lpTokenAddress, vaultAddress, userAddress } = props
    const SurgeUIContract = this.getContractInstance(SurgeUI)
    if (userAddress) {
      return await SurgeUIContract.getVaultWithUser(vaultAddress, lpTokenAddress, userAddress)
    } else {
      return await SurgeUIContract.getVault(vaultAddress, lpTokenAddress)
    }
  }
}
