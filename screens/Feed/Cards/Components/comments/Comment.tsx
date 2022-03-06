import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import CommentLikeIcon from '../../../../../assets/images/feed/comment-like-icon.svg'
import { MontserratText } from '../../../../../components/Text'
import { colors } from '../../../../../constants/Colors'
import { FeedComment } from '../../../feed.dto'

type Props = {
  comment: FeedComment
}

export const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={comment.avatar} />
      <View style={styles.mainContainer}>
        <View style={styles.commentContainer}>
          <MontserratText style={styles.userName}>
            {comment.userName}
          </MontserratText>
          <MontserratText style={styles.comment}>
            {comment.comment}
          </MontserratText>
        </View>
        <View style={styles.actions}>
          <MontserratText>{comment.postedTime}</MontserratText>
          <MontserratText style={styles.actionButton}>Like</MontserratText>
          <MontserratText style={styles.actionButton}>Replay</MontserratText>
          <View style={styles.likesContainer}>
            <MontserratText style={styles.likes}>
              {comment.likesCount}
            </MontserratText>
            <CommentLikeIcon />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    marginEnd: 8,
  },
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  commentContainer: {
    backgroundColor: colors.commentBackgroundColor,
    borderRadius: 13,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 130,
  },
  userName: {
    fontFamily: 'Montserrat-600',
  },
  comment: {},
  actions: {
    flexDirection: 'row',
    paddingTop: 2,
    paddingStart: 5,
    minWidth: 160,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionButton: {
    fontFamily: 'Montserrat-500',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    paddingEnd: 4,
    fontFamily: 'Montserrat-500',
  },
})
