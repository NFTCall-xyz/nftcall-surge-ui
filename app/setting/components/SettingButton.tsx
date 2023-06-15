import { useApp } from 'app'

import SettingsIcon from '@mui/icons-material/Settings'
import IconButton from '@mui/material/IconButton'

import FlexBox from 'components/flexbox/FlexBox'

import MotionDiv from 'lib/framer-motion/components/MotionDiv'

const SettingButton: FC = () => {
  const {
    setting: {
      allowedSlippage: { dialog },
    },
  } = useApp()

  return (
    <FlexBox justifyContent="center" alignItems="center">
      <MotionDiv whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
        <IconButton onClick={() => dialog.open()}>
          <SettingsIcon />
        </IconButton>
      </MotionDiv>
    </FlexBox>
  )
}

export default SettingButton
