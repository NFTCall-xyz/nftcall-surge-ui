import { createContext, useContext } from 'react'

type ContextWithProvider<T> = {
  Context: React.Context<T>
  Provider: FCC
  createUseContext: () => () => T
  withProvider: (Component: FC) => FC
}

export function createContextWithProvider<T>(fn: (...args: any[]) => T, initialValue?: T): ContextWithProvider<T> {
  const Context = createContext(initialValue as T)
  const Provider: FCC = ({ children }) => <Context.Provider value={fn()}>{children}</Context.Provider>
  const createUseContext = (): (() => T) => () => useContext(Context)

  const withProvider = (Component: FC) =>
    function WithProvider() {
      return (
        <Provider>
          <Component />
        </Provider>
      )
    }

  return {
    Context,
    Provider,
    createUseContext,
    withProvider,
  }
}
