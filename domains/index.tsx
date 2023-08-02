import WalletProvider, { createWalletContext } from 'lib/wallet'

import ControllersProvider, { createControllersContext } from './controllers'
import DataProvider from './data'
import NotificationProvider, { createNotificationContext } from './notification'
import UtilsProvider from './utils'

const Provider: FCC = ({ children }) => {
  return (
    <WalletProvider>
      <UtilsProvider>
        <ControllersProvider>
          <DataProvider>
            <NotificationProvider>{children}</NotificationProvider>
          </DataProvider>
        </ControllersProvider>
      </UtilsProvider>
    </WalletProvider>
  )
}

export default Provider

export const useWallet = createWalletContext()
export const useControllers = createControllersContext()
export const useNotification = createNotificationContext()
