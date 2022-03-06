import { LinearGradient } from 'expo-linear-gradient'
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { colors } from '../../constants/Colors'
import { MontserratText } from '../Text'

type Props = {
  onPress?: (event: GestureResponderEvent) => void
  colors?: string[]
  text?: string
}

export const LinearGradientButton: React.FC<Props> = ({
  colors = ['#cfd9f9', '#f1cdf5'],
  text = 'Button',
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={styles.button}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 1, y: 1 }}
        colors={colors}
      >
        <MontserratText style={styles.text}>{text}</MontserratText>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 32,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'Montserrat-500',
  },
})
