import { useWallet } from 'domains'
import { useFormik } from 'formik'
import { useEffect, useMemo } from 'react'
import * as yup from 'yup'

import { safeGet } from 'app/utils/get'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNetwork } from 'domains/data'

import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

import { useDevNFTCallOracle } from '.'

const validationSchema = yup.object({
  price: yup.string().trim().required('price is required.'),
  vol: yup.string().trim().required('vol is required.'),
})

const initialValues = {
  price: '',
  vol: '',
}

export const useForm = () => {
  const { account } = useWallet()
  const {
    address: { NFTCallOracle },
    contracts: { oracleService },
  } = useNetwork()
  const sendTransaction = useSendTransaction()

  const { collection, updateNFTCollections } = useDevNFTCallOracle()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      return transaction({
        createTransaction: oracleService.setAssetPrice({
          oracle: NFTCallOracle,
          collection: collection.address.collection,
          userAddress: account,
          ...values,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      }).then(() => {
        updateNFTCollections()
      })
    },
  })

  const form = useMemo(
    () => ({
      onSubmit: formik.handleSubmit,
      fields: {
        ...initialValues,
      },
    }),
    [formik]
  )

  useEffect(() => {
    if (!collection) return
    formik.setFieldValue(
      'price',
      safeGet(() => collection.data.price.toString())
    )
    formik.setFieldValue(
      'vol',
      safeGet(() => collection.data.vol.toString())
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeGet(() => collection.address.collection), safeGet(() => collection.data.price.toString())])

  return {
    formik,
    form,
  }
}
