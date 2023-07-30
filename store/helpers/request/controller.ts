import type { AsyncThunk } from '@reduxjs/toolkit'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useImmer } from 'use-immer'

import { useLatest } from 'app/hooks/useLatest'
import { useObjectMemo } from 'app/hooks/useValues'
import { safeGet } from 'app/utils/get'

import { useAppDispatch } from 'store/helpers'

import type { RequestActions } from './reducers'
import type { RequestSelect } from './select'
import type { RequestSliceState } from './state'
import { REQUEST_STATUS } from './state'

type CreateUseRequestControllerProps<SliceState extends RequestSliceState, Returned, ThunkArg> = {
  request: AsyncThunk<Returned, ThunkArg, {}>
  select: RequestSelect<SliceState>
  actions: RequestActions
}

export const createUseRequestController = <SliceState extends RequestSliceState, Returned, ThunkArg>(
  props: CreateUseRequestControllerProps<SliceState, Returned, ThunkArg>
) => {
  const {
    request,
    select: { selectStatus, selectData },
    actions: { setStatus: setStatusAction },
  } = props

  const useStatus = () => {
    const status = useSelector(selectStatus)
    const dispatch = useAppDispatch()
    const statusRef = useLatest(status)
    const setStatus = useCallback(
      (status: REQUEST_STATUS) => {
        dispatch(setStatusAction(status))
        statusRef.current = status
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dispatch]
    )
    const getStatus = useCallback(() => {
      return statusRef.current
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
      setStatus,
      getStatus,
    }
  }

  const usePolling = () => {
    const dispatch = useAppDispatch()
    const { setStatus, getStatus } = useStatus()
    const abortFnRef = useRef<() => void>()
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const propsRef = useRef<{ ms: number; props: ThunkArg }>({} as any)
    const run = useCallback(
      (props: ThunkArg, ms = 5000) => {
        propsRef.current = { ms, props }
        const status = getStatus()
        if (status !== REQUEST_STATUS.ready) return Promise.reject({ name: 'RunningError', message: 'Polling' })
        setStatus(REQUEST_STATUS.polling)

        const fn = () => {
          const promise = dispatch(request(props))
          abortFnRef.current = () => promise.abort()
          return promise.then((action: any) => {
            if (action.error?.name === 'AbortError') return
            timerRef.current = setTimeout(() => fn(), ms)
          })
        }

        fn()

        return Promise.resolve()
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dispatch]
    )

    const stop = useCallback(() => {
      const status = getStatus()
      if (status !== REQUEST_STATUS.polling) return

      setStatus(REQUEST_STATUS.ready)
      if (abortFnRef.current) abortFnRef.current()
      clearTimeout(timerRef.current)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    const restart = useCallback((props?: ThunkArg, ms?: number, delay = 0) => {
      const status = getStatus()
      if (status !== REQUEST_STATUS.polling) return
      stop()

      if (delay) {
        timerRef.current = setTimeout(() => {
          run(props || propsRef.current.props, ms || propsRef.current.ms)
        }, delay)
      } else {
        run(props || propsRef.current.props, ms || propsRef.current.ms)
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const returnValue = useObjectMemo({
      run,
      stop,
      restart,

      propsRef,
    })

    // useWhyDidYouUpdate('usePolling', returnValue)
    return returnValue
  }

  const createUseAutoPolling = (polling: ReturnType<typeof usePolling>) => {
    const useAutoPolling = (query: ThunkArg, isStop: (query: ThunkArg) => boolean, ms: number, delay = 500) => {
      useEffect(() => {
        if (isStop(query)) return
        const timer = setTimeout(() => {
          polling.run(query, ms)
        }, delay)
        return () => {
          clearTimeout(timer)
          polling.stop()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [query])
    }
    return useAutoPolling
  }

  const createUsePollingEmergency = (polling: ReturnType<typeof usePolling>) => {
    const usePollingEmergency = (
      checkData: (oldData: SliceState['data'], newData: SliceState['data']) => boolean,
      ms = 1000
    ) => {
      const data = useSelector(selectData)
      const dispatch = useAppDispatch()
      const dataRef = useLatest(data)

      const { setStatus, getStatus } = useStatus()
      const [loading, setLoading] = useImmer(false)
      const abortFnRef = useRef<() => void>()
      const timerRef = useRef<ReturnType<typeof setTimeout>>()

      const stop = useCallback(
        (props?: ThunkArg, ms?: number, delay = polling.propsRef.current.ms) => {
          const status = getStatus()
          if (status !== REQUEST_STATUS.pollingEmergency) return

          if (abortFnRef.current) abortFnRef.current()
          clearTimeout(timerRef.current)

          setStatus(REQUEST_STATUS.polling)

          polling.restart(props, ms || polling.propsRef.current.ms, delay)

          setLoading(false)
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dispatch]
      )

      const run = useCallback(
        (props = polling.propsRef.current.props) => {
          const status = getStatus()
          if (status !== REQUEST_STATUS.polling) {
            return Promise.reject({ name: 'RunningError', message: 'Polling Emergency' })
          }
          setLoading(true)
          polling.stop()
          setStatus(REQUEST_STATUS.pollingEmergency)

          const fn = () => {
            const oldData = dataRef.current
            const promise = dispatch(request(props))
            abortFnRef.current = () => promise.abort()
            return promise.then((action: any) => {
              if (action.error?.name === 'AbortError') return
              if (!checkData(oldData, action.payload)) {
                timerRef.current = setTimeout(() => fn(), ms)
              } else {
                stop()
              }
            })
          }

          fn()

          return Promise.resolve()
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dispatch]
      )

      return {
        loading,
        run,
        stop,
      }
    }
    return usePollingEmergency
  }

  const useSingle = () => {
    const { setStatus, getStatus } = useStatus()
    const dispatch = useAppDispatch()
    const abortFnRef = useRef<() => void>()

    const run = useCallback(
      (props: ThunkArg) => {
        const status = getStatus()
        if (status !== REQUEST_STATUS.ready) return Promise.reject({ name: 'RunningError', message: 'Single' })
        setStatus(REQUEST_STATUS.single)
        const promise = dispatch(request(props))
        abortFnRef.current = () => promise.abort()
        return promise
          .then((action: any) => {
            if (action.error) return Promise.reject(action)
            return safeGet(() => action.payload.data || action.payload)
          })
          .finally(() => {
            setStatus(REQUEST_STATUS.ready)
          })
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dispatch]
    )

    const stop = useCallback(() => {
      const status = getStatus()
      if (status !== REQUEST_STATUS.single) return

      setStatus(REQUEST_STATUS.ready)
      if (abortFnRef.current) abortFnRef.current()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    const returnValue = useObjectMemo({
      run,
      stop,
    })

    // useWhyDidYouUpdate('useSingle', returnValue)
    return returnValue
  }

  const useRequestController = () => {
    const polling = usePolling()
    const single = useSingle()

    const useAutoPolling = useMemo(
      () => createUseAutoPolling(polling),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    )

    const usePollingEmergency = useMemo(
      () => createUsePollingEmergency(polling),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    )

    const returnValue = useObjectMemo({
      polling,
      single,
      usePolling: useAutoPolling,
      usePollingEmergency,
    })
    return returnValue
  }

  return useRequestController
}
