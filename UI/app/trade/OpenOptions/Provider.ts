import { useApp } from 'app'
import { debounce } from 'lodash'
import { useTranslation } from 'next-i18next'
import { useCallback, useEffect, useMemo } from 'react'
import { type Updater, useImmer } from 'use-immer'

import { DAY, MINUTES, getTimestamp } from 'app/constant'
import { useDialog } from 'app/hooks/useDialog'
import { createContextWithProvider } from 'app/utils/createContext'

import { useNetwork } from 'domains/data'

import { toBN, valueToWei, weiToValue } from 'lib/math'
import { OptionType, type GetPremiumProps as ProtocolGetPremiumProps } from 'lib/protocol/typechain/nftcall-surge'

import { usePageTrade } from '..'

const useAmount = (setInit: Updater<boolean>) => {
  const {
    collection: {
      collection: {
        data: { maximumOptionAmount },
      },
    },
  } = usePageTrade()

  const [amount, setAmount] = useImmer<number>(0)
  const checked = useCallback((value: any) => {
    if (!/^[0-9]*[.,]?[0-9]*$/.test(value)) {
      return 'Illegal input format'
    } else if (!value) {
      return 'Cannot be empty'
    } else {
      return ''
    }
  }, [])

  const { min, max } = useMemo(() => {
    if (!maximumOptionAmount || maximumOptionAmount.isZero()) return {} as undefined
    const min = toBN(0)
    const max = maximumOptionAmount

    return {
      min,
      max,
    }
  }, [maximumOptionAmount])

  const set = useCallback((value: any) => {
    setInit(false)
    setAmount(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    value: amount,
    set,

    checked,
    min,
    max,
  }
}

const useStrikePrice = (optionType: OptionType, setInit: Updater<boolean>) => {
  const {
    collection: {
      collection: {
        data: { price },
      },
    },
  } = usePageTrade()
  const [strikePrice, setStrikePrice] = useImmer<number>(0)
  const checked = useCallback((value: any) => {
    if (!/^[0-9]*[.,]?[0-9]*$/.test(value)) {
      return 'Illegal input format'
    } else if (!value) {
      return 'Cannot be empty'
    } else {
      return ''
    }
  }, [])

  const { diffPercent, min, max, tags } = useMemo(() => {
    const tags: number[] =
      optionType === OptionType.LONG_CALL ? [0.1, 0.2, 0.3, 0.4, 0.5, 0.8, 1.1] : [-0.1, -0.2, -0.3, -0.4, -0.5, -0.6]

    if (!strikePrice || !price || price.isZero()) return { tags } as undefined
    const diffPercent = toBN(strikePrice).div(price).minus(1)
    let min = toBN(0)
    let max = toBN(0)
    if (optionType === OptionType.LONG_CALL) {
      min = price.multipliedBy(1.1)
      max = price.multipliedBy(2.1)
    } else {
      min = price.multipliedBy(0.4)
      max = price.multipliedBy(0.9)
    }

    return {
      diffPercent,
      min,
      max,
      tags,
    }
  }, [optionType, price, strikePrice])

  const set = useCallback((value: any) => {
    setInit(false)
    setStrikePrice(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    value: strikePrice,
    set,

    checked,
    diffPercent,
    min,
    max,
    tags,
  }
}
const useExpiryDate = (setInit: Updater<boolean>) => {
  const [expiry, setExpiry] = useImmer<Date>(null)
  const [now, setNow] = useImmer(Date.now())
  const [tagId, setTagId] = useImmer<number>(null)

  const checked = useCallback((value: any) => {
    if (!value) {
      return 'Cannot be empty'
    } else {
      return ''
    }
  }, [])

  const { min, max, tags } = useMemo(() => {
    const tags: number[] = [3, 7, 14, 21, 30]
    const min = now + MINUTES * 10
    const max = now + DAY * 30

    return {
      min,
      max,
      tags,
    }
  }, [now])

  const set = useCallback((value: any) => {
    setInit(false)
    setExpiry(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    value: expiry,
    set,

    setNow,
    checked,

    tagId,
    setTagId,

    min,
    max,
    tags,
  }
}

type UsePremiumProps = {
  amount: ReturnType<typeof useAmount>
  optionType: OptionType
  strikePrice: ReturnType<typeof useStrikePrice>
  expiryDate: ReturnType<typeof useExpiryDate>
}
const usePremium = ({ amount, optionType, strikePrice, expiryDate }: UsePremiumProps) => {
  const [value, setValue] = useImmer<number>(0)
  const [loading, setLoading] = useImmer<boolean>(false)

  const {
    collection: {
      collection: {
        address,
        data: { price },
      },
    },
  } = usePageTrade()
  const {
    address: { Vault },
    contracts: { vaultService },
  } = useNetwork()

  type GetPremiumProps = {
    props: Pick<ProtocolGetPremiumProps, 'optionType' | 'strikePrice' | 'expiry' | 'amount'>
    getPromise: (promise: Promise<BN>) => void
  }

  const getPremium = useMemo(
    () =>
      debounce(({ props: { optionType, strikePrice, expiry, amount }, getPromise }: GetPremiumProps) => {
        return getPromise(
          vaultService
            .getPremium({
              Vault,
              collection: address.NFT,
              optionType,
              strikePrice,
              expiry,
              amount,
            })
            .then((data) => weiToValue(data, 0))
        )
      }, 300),
    [Vault, address.NFT, vaultService]
  )

  useEffect(() => {
    if (!strikePrice.value || !expiryDate.value || !expiryDate.value.getTime()) {
      setLoading(() => false)
      return
    }
    setLoading(() => true)
    let isCancel = false
    getPremium({
      props: {
        optionType,
        strikePrice: valueToWei(strikePrice.value, 18).toString(),
        expiry: getTimestamp(expiryDate.value.getTime()),
        amount: valueToWei(amount.value, 18).toString(),
      },
      getPromise: (promise) =>
        promise
          .then((value) => {
            if (isCancel) return
            setValue(() => weiToValue(value, 18).toNumber())
          })
          .catch((e) => {
            console.log('premium error', e)
          })
          .finally(() => {
            if (isCancel) return
            setLoading(() => false)
          }),
    })

    return () => {
      isCancel = true
    }
  }, [amount.value, expiryDate.value, getPremium, optionType, setLoading, setValue, strikePrice.value])

  const returnValue = useMemo(() => {
    if (!amount.value || !value) return toBN(0)
    return toBN(value)
  }, [amount.value, value])

  const {
    setting: { allowedSlippage },
  } = useApp()
  const maximumPremium = useMemo(() => {
    return toBN(1 + allowedSlippage.value).multipliedBy(returnValue)
  }, [allowedSlippage.value, returnValue])

  return {
    value: returnValue,
    set: setValue,

    loading: loading,
    setLoading: setLoading,
    maximumPremium,
    allowedSlippage,
  }
}

const useConfirmOpenOptionDialog = () => {
  const dialog = useDialog()

  return dialog
}

export default createContextWithProvider(() => {
  const { t: tOpenCallOptions } = useTranslation('app-trade', { keyPrefix: 'OpenCallOptions' })
  const {
    collection: {
      collection: {
        id,
        data: { price },
        info: { name },
      },
      wETHBalance,
      wETHAllowance,
      openOptions,
      approveOpenPosition,
    },
    positions: { setSourceData },
    executionFee,
  } = usePageTrade()

  const confirmOpenOptionDialog = useConfirmOpenOptionDialog()
  const [init, setInit] = useImmer(true)
  const [optionType, setOptionType] = useImmer(OptionType.LONG_CALL)
  const strikePrice = useStrikePrice(optionType, setInit)
  const expiryDate = useExpiryDate(setInit)
  const amount = useAmount(setInit)
  const premium = usePremium({ amount, optionType, strikePrice, expiryDate })

  useEffect(() => {
    if (!id) return
    // setOptionType(() => OptionType.LONG_CALL)
    strikePrice.set(0)
    amount.set(0)
    expiryDate.set(null)
    expiryDate.setTagId(null)
    premium.set(0)

    setInit(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, optionType])

  return {
    tOpenCallOptions,
    confirmOpenOptionDialog,

    id,
    name,
    init,

    optionType,
    setOptionType,
    amount,
    strikePrice,
    expiryDate,
    approveOpenPosition,
    openOptions,
    setSourceData,
    price,
    premium,
    wETHBalance,
    wETHAllowance,
    executionFee,
  }
})
