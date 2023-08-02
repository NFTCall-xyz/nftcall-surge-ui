import type { OptionPosition } from 'UI/app/trade/Positions/Table/request/getPositions'
import { useRef } from 'react'

import { SECONDS } from 'app/constant'
import { createPromise } from 'app/utils/promise'

import { useNFTCollections, useNetwork } from 'domains/data'
import { getNotificationOptionPositionKeyObject } from 'domains/notification/adapter/getNotificationOptionPositionKey'

import { OptionPositionStateProtocol } from 'lib/graphql/option-position'
import type { OptionPositionStructOutput } from 'lib/protocol/typechain/nftcall-surge/typechain/contracts/SurgeUI'
import { toast } from 'lib/toastify'
import type { ChainId } from 'lib/wallet/constant/chains'

type OptionPositionListener = {
  promise: Promise<{
    type: string
    data: OptionPositionStructOutput
    complete: (finalStatus: string) => void
  }>
  cancel: () => void
}

type OptionPositionListeningData = {
  data: OptionPosition
  key: string
  collectionAddress: string
  positionId: number
  chainId: ChainId

  listener: OptionPositionListener
}

export enum ListeningType {
  Pending = 'pending',
  Active = 'active',
}

export const useOptionPosition = () => {
  const listeningRefMap = useRef(new Map<string, OptionPositionListeningData>())

  const {
    contracts: { surgeUIService },
    address: { SurgeUI },
  } = useNetwork()
  const { collections } = useNFTCollections()

  const createOptionPositionPendingListener = (
    { collectionAddress, positionId }: OptionPosition,
    complete: (state: string) => void
  ): OptionPositionListener => {
    let nextRuntime = Date.now()
    let timer = 0
    let loading = false
    let isCancel = false
    const { promise, reslove } = createPromise<{
      type: string
      data: OptionPositionStructOutput
      complete: (state: string) => void
    }>()

    const collection = collections.find((collection) => collection.address.collection === collectionAddress)
    if (!collection || !collection.address.optionToken) return

    const run = () => {
      timer = setTimeout(() => {
        if (isCancel) return
        if (!loading && nextRuntime <= Date.now()) {
          loading = true
          nextRuntime += SECONDS * 15
          surgeUIService
            .getPosition({
              SurgeUI,
              optionTokenAddress: collection.address.optionToken,
              positionId,
            })
            .then((data) => {
              if (isCancel) return
              if (data.state === OptionPositionStateProtocol.PENDING) {
                run()
              } else {
                reslove({
                  data,
                  type: 'then',
                  complete,
                })
              }
            })
            .catch(() => {
              if (isCancel) return
              reslove({
                data: undefined,
                type: 'catch',
                complete,
              })
            })
            .finally(() => {
              loading = false
            })
        } else {
          run()
        }
      }, SECONDS) as any
    }

    run()

    const cancel = () => {
      isCancel = true
      clearTimeout(timer)
    }

    return {
      promise,
      cancel,
    }
  }

  const createOptionPositionActiveListener = (
    { collectionAddress, positionId }: OptionPosition,
    complete: (state: string) => void
  ): OptionPositionListener => {
    let nextRuntime = Date.now()
    let timer = 0
    let loading = false
    let isCancel = false
    const { promise, reslove } = createPromise<{
      type: string
      data: OptionPositionStructOutput
      complete: (state: string) => void
    }>()

    const collection = collections.find((collection) => collection.address.collection === collectionAddress)
    if (!collection || !collection.address.optionToken) return

    const run = () => {
      timer = setTimeout(() => {
        if (isCancel) return
        if (!loading && nextRuntime <= Date.now()) {
          loading = true
          nextRuntime += SECONDS * 15
          surgeUIService
            .getPosition({
              SurgeUI,
              optionTokenAddress: collection.address.optionToken,
              positionId,
            })
            .then((data) => {
              if (isCancel) return
              if (data.state === OptionPositionStateProtocol.ACTIVE) {
                run()
              } else {
                reslove({
                  data,
                  type: 'then',
                  complete,
                })
              }
            })
            .catch(() => {
              if (isCancel) return
              reslove({
                data: undefined,
                type: 'catch',
                complete,
              })
            })
            .finally(() => {
              loading = false
            })
        } else {
          run()
        }
      }, SECONDS) as any
    }

    run()

    const cancel = () => {
      isCancel = true
      clearTimeout(timer)
    }

    return {
      promise,
      cancel,
    }
  }

  const add = (type: ListeningType, data: OptionPosition, chainId: ChainId) => {
    const keyObject = getNotificationOptionPositionKeyObject(data, chainId)
    const { key } = keyObject
    const listening = listeningRefMap.current.has(key)

    let isComplete = false
    const complete = (finalStatus: string) => {
      if (isComplete) return
      const {
        data: { positionId, status },
        collectionAddress,
      } = listeningRefMap.current.get(key)
      const collection = collections.find((collection) => collection.address.collection === collectionAddress)
      if (!collection) return

      isComplete = true

      const { id } = collection

      toast.success(`Position ${id}-${positionId} changed from ${status} to ${finalStatus}.`, {
        autoClose: false,
      })

      listeningRefMap.current.delete(key)
    }

    if (!listening) {
      let listener: OptionPositionListener

      switch (type) {
        case ListeningType.Pending:
          listener = createOptionPositionPendingListener(data, complete)
          break
        case ListeningType.Active:
          listener = createOptionPositionActiveListener(data, complete)
          break
      }

      listeningRefMap.current.set(key, {
        data,
        ...keyObject,
        listener,
      })
    }

    return listeningRefMap.current.get(key).listener.promise
  }

  return {
    add,
  }
}
