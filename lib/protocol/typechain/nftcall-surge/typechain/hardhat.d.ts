/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { FactoryOptions, HardhatEthersHelpers as HardhatEthersHelpersBase } from '@nomiclabs/hardhat-ethers/types'
import { ethers } from 'ethers'

import * as Contracts from '.'

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'Ownable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>
    getContractFactory(
      name: 'IERC4626',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4626__factory>
    getContractFactory(
      name: 'Pausable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>
    getContractFactory(
      name: 'ERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>
    getContractFactory(
      name: 'IERC20Permit',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>
    getContractFactory(
      name: 'ERC4626',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC4626__factory>
    getContractFactory(
      name: 'IERC20Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>
    getContractFactory(
      name: 'IERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>
    getContractFactory(
      name: 'ERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>
    getContractFactory(
      name: 'ERC721Enumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>
    getContractFactory(
      name: 'IERC721Enumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>
    getContractFactory(
      name: 'IERC721Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>
    getContractFactory(
      name: 'IERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>
    getContractFactory(
      name: 'IERC721Receiver',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>
    getContractFactory(
      name: 'ERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>
    getContractFactory(
      name: 'IERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>
    getContractFactory(
      name: 'AssetRiskCache',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetRiskCache__factory>
    getContractFactory(
      name: 'BackstopPool',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BackstopPool__factory>
    getContractFactory(
      name: 'KeeperHelper',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KeeperHelper__factory>
    getContractFactory(
      name: 'IAssetRiskCache',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAssetRiskCache__factory>
    getContractFactory(
      name: 'ILPToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILPToken__factory>
    getContractFactory(
      name: 'IOptionToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOptionToken__factory>
    getContractFactory(
      name: 'IOracle',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracle__factory>
    getContractFactory(
      name: 'IPremium',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPremium__factory>
    getContractFactory(
      name: 'IPricer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPricer__factory>
    getContractFactory(
      name: 'IVault',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVault__factory>
    getContractFactory(
      name: 'BlackScholes',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BlackScholes__factory>
    getContractFactory(
      name: 'FixedPointMathLib',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FixedPointMathLib__factory>
    getContractFactory(
      name: 'SimpleInitializable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleInitializable__factory>
    getContractFactory(
      name: 'MintableERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintableERC20__factory>
    getContractFactory(
      name: 'MintableERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintableERC721__factory>
    getContractFactory(
      name: 'NFTCallOracle',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTCallOracle__factory>
    getContractFactory(
      name: 'OptionPricer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OptionPricer__factory>
    getContractFactory(
      name: 'Reserve',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reserve__factory>
    getContractFactory(
      name: 'SurgeUI',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SurgeUI__factory>
    getContractFactory(
      name: 'DecimalMath',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DecimalMath__factory>
    getContractFactory(
      name: 'SignedDecimalMath',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SignedDecimalMath__factory>
    getContractFactory(
      name: 'LPToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPToken__factory>
    getContractFactory(
      name: 'OptionToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OptionToken__factory>
    getContractFactory(
      name: 'Vault',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vault__factory>

    getContractAt(name: 'Ownable', address: string, signer?: ethers.Signer): Promise<Contracts.Ownable>
    getContractAt(name: 'IERC4626', address: string, signer?: ethers.Signer): Promise<Contracts.IERC4626>
    getContractAt(name: 'Pausable', address: string, signer?: ethers.Signer): Promise<Contracts.Pausable>
    getContractAt(name: 'ERC20', address: string, signer?: ethers.Signer): Promise<Contracts.ERC20>
    getContractAt(name: 'IERC20Permit', address: string, signer?: ethers.Signer): Promise<Contracts.IERC20Permit>
    getContractAt(name: 'ERC4626', address: string, signer?: ethers.Signer): Promise<Contracts.ERC4626>
    getContractAt(name: 'IERC20Metadata', address: string, signer?: ethers.Signer): Promise<Contracts.IERC20Metadata>
    getContractAt(name: 'IERC20', address: string, signer?: ethers.Signer): Promise<Contracts.IERC20>
    getContractAt(name: 'ERC721', address: string, signer?: ethers.Signer): Promise<Contracts.ERC721>
    getContractAt(
      name: 'ERC721Enumerable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>
    getContractAt(
      name: 'IERC721Enumerable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>
    getContractAt(name: 'IERC721Metadata', address: string, signer?: ethers.Signer): Promise<Contracts.IERC721Metadata>
    getContractAt(name: 'IERC721', address: string, signer?: ethers.Signer): Promise<Contracts.IERC721>
    getContractAt(name: 'IERC721Receiver', address: string, signer?: ethers.Signer): Promise<Contracts.IERC721Receiver>
    getContractAt(name: 'ERC165', address: string, signer?: ethers.Signer): Promise<Contracts.ERC165>
    getContractAt(name: 'IERC165', address: string, signer?: ethers.Signer): Promise<Contracts.IERC165>
    getContractAt(name: 'AssetRiskCache', address: string, signer?: ethers.Signer): Promise<Contracts.AssetRiskCache>
    getContractAt(name: 'BackstopPool', address: string, signer?: ethers.Signer): Promise<Contracts.BackstopPool>
    getContractAt(name: 'KeeperHelper', address: string, signer?: ethers.Signer): Promise<Contracts.KeeperHelper>
    getContractAt(name: 'IAssetRiskCache', address: string, signer?: ethers.Signer): Promise<Contracts.IAssetRiskCache>
    getContractAt(name: 'ILPToken', address: string, signer?: ethers.Signer): Promise<Contracts.ILPToken>
    getContractAt(name: 'IOptionToken', address: string, signer?: ethers.Signer): Promise<Contracts.IOptionToken>
    getContractAt(name: 'IOracle', address: string, signer?: ethers.Signer): Promise<Contracts.IOracle>
    getContractAt(name: 'IPremium', address: string, signer?: ethers.Signer): Promise<Contracts.IPremium>
    getContractAt(name: 'IPricer', address: string, signer?: ethers.Signer): Promise<Contracts.IPricer>
    getContractAt(name: 'IVault', address: string, signer?: ethers.Signer): Promise<Contracts.IVault>
    getContractAt(name: 'BlackScholes', address: string, signer?: ethers.Signer): Promise<Contracts.BlackScholes>
    getContractAt(
      name: 'FixedPointMathLib',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FixedPointMathLib>
    getContractAt(
      name: 'SimpleInitializable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleInitializable>
    getContractAt(name: 'MintableERC20', address: string, signer?: ethers.Signer): Promise<Contracts.MintableERC20>
    getContractAt(name: 'MintableERC721', address: string, signer?: ethers.Signer): Promise<Contracts.MintableERC721>
    getContractAt(name: 'NFTCallOracle', address: string, signer?: ethers.Signer): Promise<Contracts.NFTCallOracle>
    getContractAt(name: 'OptionPricer', address: string, signer?: ethers.Signer): Promise<Contracts.OptionPricer>
    getContractAt(name: 'Reserve', address: string, signer?: ethers.Signer): Promise<Contracts.Reserve>
    getContractAt(name: 'SurgeUI', address: string, signer?: ethers.Signer): Promise<Contracts.SurgeUI>
    getContractAt(name: 'DecimalMath', address: string, signer?: ethers.Signer): Promise<Contracts.DecimalMath>
    getContractAt(
      name: 'SignedDecimalMath',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SignedDecimalMath>
    getContractAt(name: 'LPToken', address: string, signer?: ethers.Signer): Promise<Contracts.LPToken>
    getContractAt(name: 'OptionToken', address: string, signer?: ethers.Signer): Promise<Contracts.OptionToken>
    getContractAt(name: 'Vault', address: string, signer?: ethers.Signer): Promise<Contracts.Vault>

    // default types
    getContractFactory(name: string, signerOrOptions?: ethers.Signer | FactoryOptions): Promise<ethers.ContractFactory>
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>
    getContractAt(nameOrAbi: string | any[], address: string, signer?: ethers.Signer): Promise<ethers.Contract>
  }
}
