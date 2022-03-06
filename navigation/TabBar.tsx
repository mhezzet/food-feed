import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { NavigationHelpers, TabNavigationState } from '@react-navigation/native'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { RootTabParamList } from './navigation.types'

type Props = {
  state: TabNavigationState<RootTabParamList>
  navigation: NavigationHelpers<RootTabParamList>
}

export const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    // <View style={styles.container}>
    <View style={styles.shadowContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}
            key={index}
          >
            {options.tabBarIcon?.({
              focused: isFocused,
              color: options.tabBarActiveTintColor || 'blue',
              size: 14,
            })}
          </TouchableOpacity>
        )
      })}
    </View>
    // {/* </View> */}
  )
}

const styles = StyleSheet.create({
  // container: {
  //   overflow: 'hidden',
  //   backgroundColor: 'transparent',
  //   position: 'relative',
  //   paddingTop: 5,
  //   minHeight: 56,
  // },
  shadowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    minHeight: 56,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    paddingTop: 1,
    // position: 'absolute',

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,

    elevation: 6,
  },
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})
