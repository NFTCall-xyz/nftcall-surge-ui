import { createContextWithProvider } from 'app/utils/createContext'

import { usePageProgressController } from 'lib/nprogress/store/nprogress'

import { useSurgeUIController } from 'store/surgeUI/useSurgeUIController'
import { useThegraphController } from 'store/thegraph/useThegraphController'

export const useControllersService = () => {
  const pageProcess = usePageProgressController()
  const surgeUI = useSurgeUIController()
  const thegraph = useThegraphController()
  return { pageProcess, surgeUI, thegraph }
}

const { Provider: ControllersProvider, createUseContext } = createContextWithProvider(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
