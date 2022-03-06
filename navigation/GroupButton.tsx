import React from 'react'
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg'

type Props = {
  focused: boolean
}

export const GroupButton: React.FC<Props> = ({ focused }) => {
  return (
    <Svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
      {focused && <Circle cx='20' cy='20' r='20' fill='url(#grad)' />}
      <Path
        x='7'
        y='11'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.58 3.5C11.58 5.43667 10.0258 7 8.08586 7C6.14596 7 4.58002 5.43667 4.58002 3.5C4.58002 1.56333 6.14596 0 8.08586 0C10.0258 0 11.58 1.56333 11.58 3.5ZM21.58 3.5C21.58 5.43667 20.0258 7 18.0859 7C16.146 7 14.58 5.43667 14.58 3.5C14.58 1.56333 16.146 0 18.0859 0C20.0258 0 21.58 1.56333 21.58 3.5ZM8.58002 9C5.91716 9 0.580017 10.365 0.580017 13.0833V16H16.58V13.0833C16.58 10.365 11.2429 9 8.58002 9ZM16.58 9.05833C16.9752 9.02333 17.3479 9 17.6754 9C20.3065 9 25.58 10.365 25.58 13.0833V16H18.8046V13.0833C18.8046 11.3567 17.8899 10.0383 16.58 9.05833Z'
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
