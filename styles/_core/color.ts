import { hsl } from 'polished';

const palette = {
  'black': hsl(0, 0, 0),
  'grey-100': hsl(0, 0, 0.96),
  'grey-300': hsl(0, 0, 0.89),
  'grey-500': hsl(0, 0, 0.46),
  'grey-800': hsl(214, 0.04, 0.34),
  'grey-900': hsl(0, 0, 0.21),
  'white': hsl(0, 0, 1),
  'orange-400': hsl(26, 1, 0.46),
  'orange-500': hsl(25, 1, 0.5),
  'blue-400': hsl(217, 0.8, 0.45),
  'blue-500': hsl(216, 0.94, 0.65),
  'blue-roos': hsl(196, 0.92, 0.31),
  'blue-dark-roos': hsl(196, 0.92, 0.25),
  'green-roos': hsl(137, 0.32, 0.58),
};

export const color = {
  foreground: {
    heading: palette['grey-900'],
    body: palette['grey-800'],
    display: palette['orange-400'],
    link: palette['blue-400'],
    button: palette['white'],
    buttonHover: palette['blue-400'],
    quiet: palette['grey-500'],
    border: palette['grey-300'],
    borderAction: palette['blue-400'],
    brand: palette['orange-400'],
    card: palette['blue-roos'],
    cardHover: palette['blue-dark-roos'],
    header: palette['green-roos'],
  },
  background: {
    button: palette['blue-400'],
    buttonHover: palette['white'],
    brand: palette['orange-400'],
    well: palette['grey-100'],
    shadow: palette['grey-900'],
  },
};