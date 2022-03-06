import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FeedComment } from '../../../feed.dto'
import { Comment } from './Comment'

type Props = {
  comments?: FeedComment[]
}

export const Comments: React.FC<Props> = ({ comments }) => {
  if (!comments) return null

  return (
    <View style={styles.container}>
      {comments?.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12.5,
  },
})
