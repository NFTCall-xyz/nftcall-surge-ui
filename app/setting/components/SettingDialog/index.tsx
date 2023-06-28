import { useApp } from 'app'
import type { FC } from 'react'

import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

import { Span, TooltipSpan } from 'components/Typography'
import FormDialog from 'components/dialog/FormDialog'

import { NumberInput } from 'lib/math/components/NumberInput'

import { useForm } from './useForm'
import { useTranslation } from 'next-i18next'
import { Box, Tooltip } from '@mui/material'
import Link from 'next/link'


const SettingDialog: FC = () => {
  const {
    setting: {
      allowedSlippage: { dialog },
    },
  } = useApp()

  const { formik } = useForm()
  const { t } = useTranslation('app-trade', { keyPrefix: 'OpenCallOptions'})

  return (
    <FormDialog {...dialog} title="Settings" submit={formik.submitForm} isSubmitting={formik.isSubmitting}>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          maxWidth: 400,
        }}
      >
        <Stack spacing={2}>
          <Tooltip title={
              <>
                <p>{t('slippageTip')}</p>
                <br />
                <Link target="_blank" href="https://docs.nftcall.xyz/nftcall-surge/overview/options-trading#slippage">Learn More</Link>
              </>
            }>
            <Box>
              <TooltipSpan color="text.secondary">{t('allowedSlippage')}</TooltipSpan>
            </Box>
          </Tooltip>          
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
