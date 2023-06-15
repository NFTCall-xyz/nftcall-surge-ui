import { useApp } from 'app'
import type { FC } from 'react'

import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

import { Span } from 'components/Typography'
import FormDialog from 'components/dialog/FormDialog'

import { NumberInput } from 'lib/math/components/NumberInput'

import { useForm } from './useForm'

const SettingDialog: FC = () => {
  const {
    setting: {
      allowedSlippage: { dialog },
    },
  } = useApp()

  const { formik } = useForm()

  return (
    <FormDialog {...dialog} title="Settings" submit={formik.submitForm} isSubmitting={formik.isSubmitting}>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          maxWidth: 400,
        }}
      >
        <Stack spacing={2}>
          <Span>Allowed Slippage</Span>
          <NumberInput
            name="allowedSlippage"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.allowedSlippage}
            endAdornment={<Span color="text.secondary">%</Span>}
            error={formik.touched.allowedSlippage && formik.errors.allowedSlippage}
          />
          <Alert severity="info">
            Note that a low allowed slippage, e.g. less than 0.5%, may result in failed orders if prices are volatile.
          </Alert>
        </Stack>
      </form>
    </FormDialog>
  )
}

export default SettingDialog
