import { useApp } from 'app'
import type { ReactNode } from 'react'

import SettingsIcon from '@mui/icons-material/Settings'
import IconButton from '@mui/material/IconButton'

import { Span } from 'components/Typography'
import FlexBox from 'components/flexbox/FlexBox'

import MotionDiv from 'lib/framer-motion/components/MotionDiv'

const SettingButton: FC<{ children?: ReactNode }> = ({ children }) => {
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
          {children && <Span color='text.primary' ml={1}>{children}</Span>}
        </IconButton>
      </MotionDiv>
    </FlexBox>
  )
}

export default SettingButton
