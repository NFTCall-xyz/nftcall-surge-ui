import type { FC } from 'react'

import { DialogCloseIconButton } from 'components/btn/IconButton'

import { usePageTradeOpenOptions } from '..'

const ConfirmOpenOptionDialogCloseIconButton: FC = () => {
  const {
    confirmOpenOptionDialog: { close },
  } = usePageTradeOpenOptions()

  return <DialogCloseIconButton onClick={close} />
}

export default ConfirmOpenOptionDialogCloseIconButton
