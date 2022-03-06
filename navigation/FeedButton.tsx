import React from 'react'
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg'

type Props = {
  focused: boolean
}

export const FeedButton: React.FC<Props> = ({ focused }) => {
  return (
    <Svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
      {focused && <Circle cx='20' cy='20' r='20' fill='url(#grad)' />}
      <Path
        x='8.5'
        y='8.5'
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M9.41177 20V12.9412H14.1176V20H20V10.5882H23.5294L11.7647 0L0 10.5882H3.52941V20H9.41177Z'
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
