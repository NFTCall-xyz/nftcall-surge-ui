import type { Theme } from '@mui/material'

import { lightTheme } from './constants'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    GreyOutlined: true
    dashed: true
    white: true
    autoHide: true
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    grey: true
  }
}

const components = (theme: Theme): any => {
  const { shadows } = theme
  const { error, divider, action, grey, primary, text, success } = theme.palette
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },
        body: {
          minWidth: '100%',
          minHeight: '100%',
        },
        a: { textDecoration: 'none', color: primary.main },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        '#nprogress .bar': {
          zIndex: '2000 !important',
          backgroundColor: primary.main,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        fallback: { height: '75%', width: '75%' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '7px',
          boxShadow: 'none',
          padding: '0.6rem 1.2rem',
          fontWeight: 600,
          minWidth: 84,
          '&.Mui-disabled': {
            backgroundColor: action.disabledBackground,
            color: text.disabled,
          },
          '&.MuiButton-containedError': {
            backgroundColor: error.main,
            color: 'white',
            boxShadow: 'none',
          },
          '&.MuiButton-containedSuccess': {
            color: 'white',
            '&:hover': { boxShadow: 'none', backgroundColor: success.main },
          },
          '& .MuiButton-startIcon .MuiSvgIcon-root': { fontSize: 16 },
          '&.MuiButton-containedPrimary': {
            color: theme.palette.background.default,
          },
        },
        containedPrimary: { color: 'white', '&:hover': { boxShadow: 'none' } },
      },
      variants: [
        {
          props: { variant: 'GreyOutlined' },
          style: {
            border: `1px solid ${divider}`,
            color: (theme: Theme) => (lightTheme(theme) ? text.primary : '#fff'),
            '&:hover': { backgroundColor: 'transparent' },
          },
        },
        {
          props: { variant: 'GreyOutlined', size: 'small' },
          style: { padding: '0.3rem 0.8rem' },
        },
        {
          props: { variant: 'text' },
          style: { padding: 0, '&:hover': { backgroundColor: 'transparent' } },
        },
        {
          props: { variant: 'autoHide' },
          style: { transition: 'opacity 0.3s', opacity: 0, '&:hover': { opacity: 1 } },
        },
        {
          props: { variant: 'white' },
          style: {
            padding: '12px 24px',
            backgroundColor: 'white',
            color: text.disabled,
          },
        },
        {
          props: { variant: 'dashed' },
          style: {
            height: 36,
            padding: 0,
            minWidth: 36,
            maxWidth: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px dashed ${divider}`,
            borderRadius: '50%',
            overflow: 'hidden',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            '&:hover': {
              color: theme.palette.primary.main,
            },
          },
        },
        {
          props: { size: 'large' },
          style: {
            fontSize: 16,
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: shadows[1],
          border: 'solid 1px',
          borderColor: theme.palette.divider,
          borderRadius: 8,
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: { minWidth: 'auto', marginRight: '16px' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: { backgroundColor: 'transparent', boxShadow: 'none' },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          minHeight: 0,
          '&.Mui-expanded': { minHeight: 'auto' },
          '.MuiAccordionSummary-content': { margin: 0 },
          '.MuiAccordionSummary-content.Mui-expanded': { margin: 0 },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: { paddingLeft: 0, paddingRight: 0 },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: { color: '#FFD600' },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: { borderColor: 'transparent' },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected:hover': { backgroundColor: 'transparent' },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root:last-of-type': {
            '& .MuiTableCell-root': { borderBottom: 0 },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          borderBottom: 0,
          '&:first-of-type': { paddingLeft: 0 },
          '&:last-of-type': { paddingRight: 0 },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: text.secondary,
          textTransform: 'none',
          fontSize: 14,
          fontWeight: 500,
          padding: 0,
          minWidth: 'auto',
          marginLeft: '1rem',
          marginRight: '1rem',
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiButtonBase-root:first-of-type': {
            marginLeft: 0,
          },
          '& .MuiButtonBase-root:last-of-type': {
            marginRight: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {},
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          '& .MuiPopover-paper': {
            // boxShadow: shadows[1],
            borderRadius: 4,
          },
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: { padding: 0 },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: { fontFamily: "'Poppins', sans-serif" },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 7,
          borderRadius: 14,
          backgroundColor: primary[100],
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: { padding: 0 },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        thumb: { backgroundColor: grey[200] },
        track: { opacity: 1, backgroundColor: action.disabledBackground },
        switchBase: {
          '&.Mui-checked .MuiSwitch-thumb': {
            color: '#2499EF !important',
            backgroundColor: primary.main,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': { opacity: 0.86, color: '#42526e' },
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined', color: 'grey' },
          style: {
            '& .MuiOutlinedInput-input': { fontSize: 12, fontWeight: 500 },
            '& .MuiOutlinedInput-notchedOutline': {
              border: `2px solid ${divider}`,
            },
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              border: `2px solid ${divider}`,
            },
            '& input::placeholder': { color: text.disabled },
          },
        },
      ],
    },

    MuiSvgIcon: {
      styleOverrides: { root: { '& .secondary': { opacity: 0.4 } } },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 10,
          border: `solid 1px ${theme.palette.divider}`,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: '7px 10px',
        },
        sizeSmall: {
          padding: '7px 4px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[700],
          fontSize: 12,
        },
      },
    },
  }
}

export default components
