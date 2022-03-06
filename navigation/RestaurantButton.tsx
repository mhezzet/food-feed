import React from 'react'
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg'

type Props = {
  focused: boolean
}

export const RestaurantButton: React.FC<Props> = ({ focused }) => {
  return (
    <Svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
      {focused && <Circle cx='20' cy='20' r='20' fill='url(#grad)' />}
      <Path
        x='12'
        y='12'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.8 6.3H6.4V0H8V6.3C8 8.289 6.568 9.9 4.8 9.9V18H3.2V9.9C1.432 9.9 0 8.289 0 6.3V0H1.6V6.3H3.2V0H4.8V6.3ZM10 10.8V3.6C10 2.016 12.24 0 15 0V18H13V10.8H10Z'
        fill={focused ? 'white' : 'url(#grad)'}
      />
      <Defs>
        <LinearGradient id='grad' x1='0' y1='0' x2='1' y2='1'>
          <Stop stopColor='#406AE7' stopOpacity='0.9' />
          <Stop offset='1' stopColor='#C63AD6' stopOpacity='0.9' />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
