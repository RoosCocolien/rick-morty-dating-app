import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/styles.css'

export const header = style({
  overflow: 'hidden',
  backgroundColor: vars.color.green,
  padding: vars.space['3x'],
  color: vars.color.white,
});

export const headerRight = style({
  float: 'right',
});

export const headerItem = style({
  padding: vars.space['1x']
})