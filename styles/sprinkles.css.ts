import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { vars } from './styles.css'

export const breakpoints: Record<string, string> = {
  mobile: '',
  tablet: 'screen and (min-width: 576px)',
  desktop: 'screen and (min-width: 768px)',
  wide: 'screen and (min-width: 1072px)',
};

// const responsiveProperties = defineProperties({
//   conditions: {

//   }
// })
