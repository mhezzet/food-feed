import { StyleSheet, View } from 'react-native'
import { Cards } from './Cards'
import { PostFeed } from './PostFeed'

export const Feed: React.FC = () => {
  return (
    <View style={styles.container}>
      <PostFeed />
      <Cards />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
})
