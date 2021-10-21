import { sprinkles } from '../sprinkles.css'

export const container = sprinkles({
  alignItems: 'center',
  textAlign: 'center',
})

export const grid = sprinkles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: 'auto',

  flexDirection: {
    mobile: 'column',
    tablet: 'column',
    desktop: 'column',
  }
})

export const card = sprinkles({
  backgroundColor: 'blue',
  color: 'white',
  textDecoration: 'none',
  textAlign: 'left',
  padding: 'm',
  margin: 'm',
  borderRadius: 'm',
})

export const buttonDiv = sprinkles({
  textAlign: 'center',
})

export const button = sprinkles({
  backgroundColor: 'green',
  alignSelf: 'right',
  margin: 'xs',
  paddingX: 's',
  paddingY: 'xxs',
})