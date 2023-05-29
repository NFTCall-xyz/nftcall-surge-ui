import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import theme from 'app/theme/store'

import nprogress from 'lib/nprogress/store/nprogress'

import surgeUI from './surgeUI'

export function makeStore() {
  return configureStore({
    reducer: {
      theme,
      nprogress,
      surgeUI,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store
