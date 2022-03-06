import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bell from '../../assets/images/header/bell.svg'
import Cart from '../../assets/images/header/cart.svg'
import Logo from '../../assets/images/header/logo.svg'
import Search from '../../assets/images/header/search.svg'

export const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.shadowContainer}>
          <TouchableOpacity>
            <Logo height={15} width={60} />
          </TouchableOpacity>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <Search />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Bell />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Cart />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    paddingBottom: 5,
  },
  shadowContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 17,

    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4,

    elevation: 3,
  },
  actions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 116,
  },
  actionButton: {
    padding: 10,
  },
})
