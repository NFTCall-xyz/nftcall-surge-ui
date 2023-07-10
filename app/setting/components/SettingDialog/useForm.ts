import { useApp } from 'app'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { toBN } from 'lib/math'

const validationSchema = yup.object({
  allowedSlippage: yup
    .string()
    .trim()
    .matches(/^[0-9.]*$/, 'allowedSlippage is not valid')
    .required('allowedSlippage is required.'),
})

export const useForm = () => {
  const {
    setting: { allowedSlippage },
  } = useApp()

  const formik = useFormik({
    initialValues: {
      allowedSlippage: toBN(allowedSlippage.value).times(100).toString(),
    },
    validationSchema,
    onSubmit: (values) => {
      allowedSlippage.set(toBN(values.allowedSlippage).dividedBy(100).toNumber())
      allowedSlippage.dialog.close()
      return Promise.resolve()
    },
  })

  return {
    formik,
  }
}
