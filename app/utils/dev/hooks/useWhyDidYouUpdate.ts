import { isEmpty, noop } from 'lodash'
import { useEffect, useRef } from 'react'

import { getStringObj, log } from '..'

export type IProps = Record<string, any>

function diffArrays(prevProps: any[] = [], props: any[] = []): any {
  const changedProps: IProps = {}
  const maxLength = Math.max(prevProps.length, props.length)

  for (let index = 0; index < maxLength; index++) {
    if (Object.is(prevProps[index], props[index])) continue

    const returnValue = diffObjects(prevProps[index], props[index])
    if (isEmpty(returnValue)) continue
    changedProps[index] = returnValue
  }
  return changedProps
}

function diffObjects(prevProps: IProps = {}, props: IProps = {}): any {
  const allKeys = Object.keys({ ...prevProps, ...props })
  const changedProps: IProps = {}

  for (const key of allKeys) {
    const prevValue = prevProps[key]
    const propValue = props[key]

    if (Object.is(prevValue, propValue) || prevValue === propValue) continue

    const isPrevObject = typeof prevValue == 'object'
    const isPropObject = typeof propValue == 'object'

    let returnValue

    if (isPrevObject && prevValue instanceof Array) {
      returnValue = diffArrays(prevValue, propValue)
    } else if (isPrevObject && prevValue._isBigNumber) {
      if (prevValue.toString && prevValue.toString() === propValue.toString()) continue
      returnValue = { from: prevValue, to: propValue }
    } else if (isPrevObject && isPropObject) {
      returnValue = diffObjects(prevValue, propValue)
    } else {
      returnValue = { from: prevValue, to: propValue }
    }

    if (!isEmpty(returnValue)) {
      changedProps[key] = returnValue
    }
  }

  return changedProps
}

export const useWhyDidYouUpdate = __DEV__
  ? (componentName: string, props: any) => {
      const prevProps = useRef<IProps>({})

      useEffect(() => {
        if (prevProps.current && !props) {
          log(componentName, 'removed')
        } else if (prevProps.current) {
          const changedProps: IProps =
            prevProps.current instanceof Array
              ? diffArrays(prevProps.current, props)
              : diffObjects(prevProps.current, props)
          if (!isEmpty(changedProps)) {
            log(componentName, changedProps)
          }
        }

        prevProps.current = props
        try {
          ;(window as any)[componentName] = getStringObj(props)
        } catch (error) {}
      })
    }
  : (noop as undefined)
