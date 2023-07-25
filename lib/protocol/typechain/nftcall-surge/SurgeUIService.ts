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

export interface GetNFTCollectionsStausProps extends BaseSurgeUIProps {
  collectionAddresses: string[]
  oracleAddress: string
  vaultAddress: string
  riskCacheAddress: string
}

export interface GetNFTCollectionProps extends BaseSurgeUIProps {
  collectionAddress: string
  oracleAddress: string
  vaultAddress: string
}

export interface GetVaultProps extends BaseSurgeUIProps {
  lpTokenAddress: string
  vaultAddress: string
  wETHAddress: string
  userAddress?: string
}

export interface GetPositionProps extends BaseSurgeUIProps {
  optionTokenAddress: string
  positionId: number
}

export interface GetAnalyticsProps extends BaseSurgeUIProps {
  vaultAddress: string
  lpTokenAddress: string
}

export class SurgeUIService extends BaseService<SurgeUI> {
  provider: providers.Provider

  constructor(provider: providers.Provider) {
    super(provider, SurgeUI__factory)
    this.provider = provider
    this.getNFTCollections = this.getNFTCollections.bind(this)
    this.getNFTCollection = this.getNFTCollection.bind(this)
    this.getVault = this.getVault.bind(this)
    this.getPosition = this.getPosition.bind(this)
    this.getAnalytics = this.getAnalytics.bind(this)
    this.getNFTCollectionsStaus = this.getNFTCollectionsStaus.bind(this)
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

  public async getNFTCollectionsStaus(props: GetNFTCollectionsStausProps) {
    const { SurgeUI, collectionAddresses, oracleAddress, vaultAddress, riskCacheAddress } = props
    const SurgeUIContract = this.getContractInstance(SurgeUI)

    return await SurgeUIContract.getNFTCollectionsStaus(
      collectionAddresses,
      oracleAddress,
      vaultAddress,
      riskCacheAddress
    )
  }

  public async getVault(props: GetVaultProps) {
    const { SurgeUI, lpTokenAddress, vaultAddress, wETHAddress, userAddress } = props
    const SurgeUIContract = this.getContractInstance(SurgeUI)
    if (userAddress) {
      return await SurgeUIContract.getVaultWithUser(vaultAddress, lpTokenAddress, wETHAddress, userAddress)
    } else {
      return await SurgeUIContract.getVault(vaultAddress, wETHAddress, lpTokenAddress)
    }
  }

  public async getPosition(props: GetPositionProps) {
    const { SurgeUI, optionTokenAddress, positionId } = props
    const SurgeUIContract = this.getContractInstance(SurgeUI)
    return await SurgeUIContract.getPosition(optionTokenAddress, positionId)
  }

  public async getAnalytics(props: GetAnalyticsProps) {
    const { SurgeUI, lpTokenAddress, vaultAddress } = props
    const SurgeUIContract = this.getContractInstance(SurgeUI)
    return await SurgeUIContract.getAnalytics(vaultAddress, lpTokenAddress)
  }
}
