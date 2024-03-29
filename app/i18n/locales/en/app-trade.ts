const locale = {
  nftCollections: {
    title: 'NFT Collections',
  },
  floorPriceTrends: {
    floorPrice: 'Floor Price',
    title: 'Floor Price Trends',
    change24h: '24h Change',
    days: 'D',
    loading: 'loading',
    volatility: 'Volatility',
  },
  OpenCallOptions: {
    call: 'Call',
    calls: 'Calls',
    put: 'Put',
    puts: 'Puts',
    contracts: 'Contracts',
    size: 'Size',
    type: 'Option Type',
    amount: 'Size',
    limit: 'Limit',
    strikePrice: 'Strike Price',
    expiry: 'Expiration Date',
    expiryDate: 'Expiration Date',
    premium: 'Premium',
    fees: 'Execution Fee',
    subtotal: 'Total Cost',
    allowedSlippage: 'Allowed Slippage',
    yourBalance: 'Your Balance',
    breakevenPrice: 'Breakeven Price',
    maxProfit: 'Max. Profit',
    maxLoss: 'Max. Loss',
    openOptions: 'Open Position',
    approve: 'Approve',
    oraclePrice: 'Oracle Price',
    adjustedVolatility: 'Adjusted Volatility',
    limitTip:
      'Due to the risk control settings of the vault, the size limit available for each NFT collection when opening a position is different.',
    maxProfitTip: 'The maximum profit is the amount you can make from the option position.',
    maxPayoutTip:
      'For call options, the vault only provides limited payout, which means that the maximum payout from the vault equals to the current floor price. In order to compensate traders, the protocol will adjust down the premium for buying call options.',
    breakevenPriceTip:
      'Breakeven price is the price at which the option cost is equal to the option value. In other words, it is the point at which there is neither profit nor loss.',
    maxLossTip: 'The maximum loss is the amount you pay for the option position, known as the premium.',
    premiumTip:
      'Premium is the total amount that you need to pay for an option position. The premium is higher for NFT collections with higher floor price volatility in the recent past.',
    slippageTip:
      'When opening a position, you will be asked to pay slightly higher than the calculated premium to guarantee the success rate of executing positions. The exceeding portion is determined by the slippage which is controlled by the user.',
    slippageSettingsTip:
      'The slippage amount can be configured under Settings, found by clicking on "Settings" icon at the top right of the page.',
    feesTip:
      'There are two transactions involved in opening a position: users send the first transaction to request open, keepers observe the blockchain for these requests then execute them. The cost of the transaction executed by the keepers is the "Execution Fee", which is currently set at 0.00005 WETH per position.',
    adjustedVolatilityTip:
      'Adjusted volatility is used to calculate the options premium in order to hedge the risks. When demand for options is high, the adjusted volatility increases; when supply is high, it decreases.',
    oraclePriceTip:
      'The floor price is quoted from the oracle. When the oracle price changes, the corresponding range of selectable strike price will also change accordingly. The oracle price may have a slight difference from the real-time price.',
  },
  OptionPositions: {
    tabs: {
      activePositions: 'Active Positions',
      history: 'History',
      collectionAddress: 'Collection',
    },
    table: {
      collectionAddress: 'Position ID',
      type: 'Type',
      size: 'Size',
      floorPrice: 'Floor Price',
      oraclePrice: 'Oracle Price',
      strikePrice: 'Strike Price',
      settlementPrice: 'Settlement Price',
      expiryDate: 'Expiration Date',
      premium: 'Premium',
      PNL: 'PNL',
      status: 'Status',
    },
  },
}

export default locale
