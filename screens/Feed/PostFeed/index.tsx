import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'

export const PostFeed: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../../../assets/images/feed/people-avatar-1.png')}
      />
      <TextInput
        style={styles.input}
        placeholder='Share your food experiences'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 13,
    backgroundColor: 'white',
  },
  avatar: {
    width: 40,
    height: 40,
    marginEnd: 15,
  },
  input: {
    height: 38,
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
})
