import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export const grid = style({
    alignItems: 'center',
    textAlign: 'center'
});

export const card = style({
    backgroundColor: vars.color.blue,
    fontFamily: vars.fontFamily.body,
    color: 'white',
    padding: 10,
    margin: 50,
});
