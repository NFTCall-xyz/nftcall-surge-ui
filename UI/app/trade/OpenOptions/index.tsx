import { useTheme } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'

import ConfirmOpenOptionDialog from './ConfirmOpenOptionDialog'
import DisplayAdjustedVolatility from './DisplayAdjustedVolatility'
import DisplayBreakevenPrice from './DisplayBreakevenPrice'
import DisplayMaxLoss from './DisplayMaxLoss'
import DisplayMaxProfit from './DisplayMaxProfit'
import DisplayOraclePrice from './DisplayOraclePrice'
import DisplayPremium from './DisplayPremium'
import DisplayYourBalance from './DisplayYourBalance'
import OpenOptionsAction from './OpenOptionsAction'
import PageProvider from './Provider'
import SelectAmount from './SelectAmount'
import SelectExpiryDate from './SelectExpiryDate'
import SelectOptionType from './SelectOptionType'
import SelectStrikePrice from './SelectStrikePrice'

export const usePageTradeOpenOptions = PageProvider.createUseContext()

export type OpenOptionsProps = {}
const OpenOptions: FC<OpenOptionsProps> = () => {
  const theme = useTheme()

  return (
    <Card sx={{ position: 'sticky', top: theme.spacing(4), flex: 1 }}>
      <CardContent>
        <Stack spacing={3}>
          <SelectOptionType />
          <SelectAmount />
          <SelectStrikePrice />
          <SelectExpiryDate />
          <Stack spacing={1}>
            <DisplayOraclePrice />
            <DisplayAdjustedVolatility />
            <DisplayMaxProfit />
            <DisplayBreakevenPrice />
            <DisplayMaxLoss />
            <DisplayPremium />
            <DisplayYourBalance />
          </Stack>
          <OpenOptionsAction />
        </Stack>
      </CardContent>
      <ConfirmOpenOptionDialog />
    </Card>
  )
}

export default PageProvider.withProvider(OpenOptions)
