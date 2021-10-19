import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
    space: {
        none: '0',
        '0x': '0.25rem',
        '1x': '0.5rem',
        '2x': '0.75rem',
        '3x': '1rem',
        '4x': '1.5rem',
        '5x': '2rem',
        '6x': '3rem',
    },
    color: {
        white: '#fff',
        'green': '#71B684',
        'blue': '#067197',
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
});
