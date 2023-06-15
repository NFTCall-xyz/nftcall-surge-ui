import { useCallback } from 'react'
import { useImmer } from 'use-immer'

import { useDialog } from 'app/hooks/useDialog'
import { useMount } from 'app/hooks/useMount'
import { getItem, setItem } from 'app/utils/cache/localStorage'

type DisplayMode = 'card' | 'list'

const useDisplayMode = () => {
  const [displayMode, setDisplayModeInternal] = useImmer<DisplayMode>('card')
  const setDisplayMode = useCallback(
    (displayMode: DisplayMode) => {
      setDisplayModeInternal(displayMode)
      setItem('setting.displayMode', displayMode)
    },
    [setDisplayModeInternal]
  )

  useMount(() => {
    const cacheDisplayMode = getItem('setting.displayMode')
    if (cacheDisplayMode) setDisplayMode(cacheDisplayMode)
  })

  return {
    displayMode,
    setDisplayMode,
  }
}

const useAllowedSlippage = () => {
  const [allowedSlippage, setAllowedSlippage] = useImmer(0.05)
  const dialog = useDialog()

  return {
    value: allowedSlippage,
    set: setAllowedSlippage,
    dialog,
  }
}

export function useSetting() {
  const { displayMode, setDisplayMode } = useDisplayMode()
  const allowedSlippage = useAllowedSlippage()

  return {
    displayMode,
    setDisplayMode,

    allowedSlippage,
  }
}
