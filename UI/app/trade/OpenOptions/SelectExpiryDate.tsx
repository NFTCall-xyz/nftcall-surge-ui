import { differenceInDays, differenceInHours } from 'date-fns'
import { useMemo } from 'react'

import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import { DAY, MINUTES } from 'app/constant'

import { Span } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import { usePageTradeOpenOptions } from '.'

const SelectExpiryDate: FC = () => {
  const {
    expiryDate: { value, set, setNow, min, max, tags, tagId, setTagId },
    tOpenCallOptions,
  } = usePageTradeOpenOptions()

  const expiryDiff = useMemo(() => {
    if (!value) return ''
    const startDate = new Date()
    const hoursDiff = differenceInHours(value, startDate)
    const daysDiff = differenceInDays(value, startDate)
    const result = `${daysDiff} days ${hoursDiff % 24} hrs later`
    return result
  }, [value])

  return (
    <Stack spacing={1}>
      <FlexBetween>
        <Span>{tOpenCallOptions('expiry')}</Span>
        <Span>{expiryDiff}</Span>
      </FlexBetween>
      <DateTimePicker
        value={value}
        ampm={false}
        format="yyyy-MM-dd HH:mm"
        onChange={(newValue) => {
          setTagId(null)
          set(newValue)
        }}
        minDate={new Date(min)}
        maxDate={new Date(max)}
      />

      <ToggleButtonGroup
        value={tagId}
        exclusive
        size="small"
        onChange={(e, value) => {
          const now = Date.now()
          let expiryDate = now + value * DAY
          if (value === 3) {
            expiryDate += MINUTES * 10
          }
          set(new Date(expiryDate))
          setNow(now)
          setTagId(value)
        }}
        color="primary"
        sx={{
          '& button': {
            flex: 1,
          },
        }}
      >
        {tags.map((i) => {
          return (
            <ToggleButton size="small" value={i} key={i}>
              {i} D
            </ToggleButton>
          )
        })}
      </ToggleButtonGroup>
    </Stack>
  )
}
export default SelectExpiryDate
