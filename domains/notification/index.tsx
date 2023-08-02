import { createContextWithProvider } from 'app/utils/createContext'

import { useOptionPosition } from './application/optionPosition'

const useNotificationService = () => {
  const optionPosition = useOptionPosition()
  return { optionPosition }
}
const { Provider: NotificationProvider, createUseContext } = createContextWithProvider(useNotificationService)

export const createNotificationContext = createUseContext

export default NotificationProvider
