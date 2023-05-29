import { createContextWithProvider } from 'app/utils/createContext'

import { usePageProgressController } from 'lib/nprogress/store/nprogress'

import { useSurgeUIController } from 'store/surgeUI/useSurgeUIController'

export const useControllersService = () => {
  const pageProcess = usePageProgressController()
  const surgeUI = useSurgeUIController()
  return { pageProcess, surgeUI }
}

const { Provider: ControllersProvider, createUseContext } = createContextWithProvider(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
