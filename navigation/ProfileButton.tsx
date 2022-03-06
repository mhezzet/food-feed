import React from 'react'
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg'

type Props = {
  focused: boolean
}

export const ProfileButton: React.FC<Props> = ({ focused }) => {
  return (
    <Svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
      {focused && <Circle cx='20' cy='20' r='20' fill='url(#grad)' />}
      <Path
        x='11'
        y='11'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.37 4C12.37 6.21 10.58 8 8.37 8C6.16 8 4.37 6.21 4.37 4C4.37 1.79 6.16 0 8.37 0C10.58 0 12.37 1.79 12.37 4ZM0.369995 14C0.369995 11.34 5.7 10 8.37 10C11.04 10 16.37 11.34 16.37 14V16H0.369995V14Z'
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
