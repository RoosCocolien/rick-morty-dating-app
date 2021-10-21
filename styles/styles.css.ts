import { createTheme, style } from '@vanilla-extract/css'
import * as styles from './index'
import { hsl } from 'polished'

export const [themeClass, vars] = createTheme({
  space: {
    none: '0',
    'xxs': '0.25rem',
    'xs': '0.5rem',
    's': '0.75rem',
    'm': '1rem',
    'l': '1.5rem',
    'xl': '2rem',
    'xxl': '3rem',
    'auto': 'auto',
  },
  radius: {
    's': '5px',
    'm': '10px',
    'l': '15px',
  },
  shadow: {
    's': '5px',
    'm': '10px',
    'l': '15px',
  },
  color: {
    white: hsl(0, 0, 1),
    green: hsl(137, 0.32, 0.58),
    blue: hsl(196, 0.92, 0.31),
    blueHover: styles.color.foreground.card,
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSize: {
    '0x': '0.5rem',
    '1x': '1rem',
    '2x': '1.5rem',
    '3x': '2rem',
    '4x': '3rem',
    '5x': '6rem',
  },
})

export const container = style({
  alignItems: 'center',
  textAlign: 'center'
})

export const grid = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  textAlign: 'center',
  margin: '10px auto',
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
    }
  }
});

export const card = style({
  backgroundColor: vars.color.blue,
  ':hover': {
    backgroundColor: vars.color.blueHover,
  },
  color: vars.color.white,
  textDecoration: 'none',
  textAlign: 'left',
  maxWidth: '500px',
  padding: '1rem',
  margin: '1rem',
  borderRadius: '10px',
  boxShadow: `10px 5px 5px ${vars.color.blueHover}`
});
