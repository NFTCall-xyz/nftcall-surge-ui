import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import { Span } from 'components/Typography'

import { OptionType } from 'lib/protocol/typechain/nftcall-surge'

import { usePageTradeOpenOptions } from '.'

const SelectOptionType: FC = () => {
  const { optionType, setOptionType, tOpenCallOptions } = usePageTradeOpenOptions()
  return (
    <ToggleButtonGroup
      value={optionType}
      exclusive
      onChange={(e, newValue) => {
        if (newValue === null) return
        setOptionType(newValue)
      }}
      color="primary"
      sx={{
        '& button': {
          flex: 1,
        },
      }}
    >
      <ToggleButton value={OptionType.LONG_CALL}>
        <TrendingUpOutlinedIcon />
        <Span marginLeft={1}>{tOpenCallOptions('call')}</Span>
      </ToggleButton>
      <ToggleButton value={OptionType.LONG_PUT}>
        <TrendingDownOutlinedIcon />
        <Span marginLeft={1}>{tOpenCallOptions('put')}</Span>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
export default SelectOptionType
