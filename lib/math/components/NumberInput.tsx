import { Fragment } from 'react'
import { useImmer } from 'use-immer'

import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import OutlinedInput from '@mui/material/OutlinedInput'
import { useTheme } from '@mui/material/styles'

export function NumberInput({
  value,
  onChange,
  disabled,
  onBlur,
  error,
  helperText,
  onMax,
  name,
  endAdornment,
  startAdornment,
}: any) {
  const theme = useTheme()
  const [init, setInit] = useImmer(true)

  return (
    <FormControl error={!!error} variant="standard">
      <OutlinedInput
        disabled={disabled}
        name={name}
        aria-describedby="helper-text"
        value={init && value == '0' ? '' : value}
        onChange={(e) => {
          let newValue = e.target.value

          const nonNumeric = /[^0-9.]/g
          if (nonNumeric.test(newValue)) {
            newValue = newValue.replace(nonNumeric, '')
          }

          if (newValue.startsWith('.')) {
            newValue = '0' + newValue
          }

          if (newValue != '0' && !newValue.startsWith('0.')) {
            newValue = newValue.replace(/^0+/, '')
          }

          if (!newValue) {
            setInit(() => true)
          } else {
            setInit(() => false)
          }

          e.target.value = newValue || '0'
          onChange(e)
        }}
        onBlur={onBlur}
        sx={{ flex: 1 }}
        placeholder="0.00"
        inputProps={{ 'aria-label': 'input number', pattern: '^[0-9]*[.]?[0-9]*$' }}
        startAdornment={startAdornment}
        endAdornment={
          onMax ? (
            <Fragment>
              <Button disabled={disabled} onClick={onMax} sx={{ color: theme.palette.primary.main, minWidth: '50px' }}>
                Max
              </Button>
              {endAdornment && (
                <>
                  <Divider sx={{ height: 28, ml: 0.5, mr: 1.5 }} orientation="vertical" />
                  {endAdornment}
                </>
              )}
            </Fragment>
          ) : (
            endAdornment
          )
        }
      />
      <FormHelperText id="helper-text">{helperText || error}</FormHelperText>
    </FormControl>
  )
}
