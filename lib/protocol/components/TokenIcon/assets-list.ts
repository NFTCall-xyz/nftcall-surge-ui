import icons from './images/icons'

export interface Asset {
  name: string
  symbol: string
  formattedSymbol?: string
  color?: string
  icon?: any
  symbolFormatted?: string
  symbolsArray?: string[]
  formattedName?: string
  shortSymbol?: string
}

export const assetsList: Asset[] = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    color: '#000000',
    icon: icons.eth,
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    color: '#2775ca',
    icon: icons.usdc,
  },
  {
    name: 'USDT Coin',
    symbol: 'USDT',
    color: '#4db196',
    icon: icons.usdt,
  },
]

export const getAssetInfoFactory =
  (_assetsList: Asset[]) =>
  (_assetSymbol: string): Asset => {
    const assetSymbol = _assetSymbol.toUpperCase()
    const asset = _assetsList.find((asset: Asset) => asset.symbol === assetSymbol)
    const symbolFormatted = (asset && asset.formattedSymbol) || (asset && asset.symbol)
    const symbolsArray = symbolFormatted?.split('_').filter((e) => String(e).trim())

    const isSymbolsArrayMoreThanOne = !!symbolsArray && symbolsArray.length > 1
    const formattedName = isSymbolsArrayMoreThanOne ? asset && asset.name : symbolFormatted

    if (asset) {
      return {
        ...asset,
        symbolFormatted,
        symbolsArray,
        formattedName,
      }
    }

    return {
      name: assetSymbol,
      symbol: assetSymbol,
    }
  }

export const getAssetInfo = getAssetInfoFactory(assetsList)
