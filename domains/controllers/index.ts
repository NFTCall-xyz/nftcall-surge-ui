import { createContextWithProvider } from 'app/utils/createContext'

import { usePageProgressController } from 'lib/nprogress/store/nprogress'

export const useControllersService = () => {
  const pageProcess = usePageProgressController()
  return { pageProcess }
}

const { Provider: ControllersProvider, createUseContext } = createContextWithProvider(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
