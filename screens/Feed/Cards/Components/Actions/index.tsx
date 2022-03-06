import React from 'react'
import { StyleSheet, View } from 'react-native'
import CommentIcon from '../../../../../assets/images/feed/comment-icon.svg'
import LikeIcon from '../../../../../assets/images/feed/like-icon.svg'
import ShareIcon from '../../../../../assets/images/feed/share-icon.svg'
import { MontserratText } from '../../../../../components/Text'
import { colors } from '../../../../../constants/Colors'
import { Feed } from '../../../feed.dto'

type Props = {
  commentsCount: Feed['commentsCount']
  sharesCount: Feed['sharesCount']
  likesCount: Feed['likesCount']
  bottomBorder?: boolean
}

export const Actions: React.FC<Props> = ({
  commentsCount,
  likesCount,
  sharesCount,
  bottomBorder = true,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.ActionButtons,
          !bottomBorder && styles.ActionButtonsNoComments,
        ]}
      >
        <View style={styles.button}>
          <MontserratText style={styles.buttonText}>
            {likesCount}
          </MontserratText>
          <LikeIcon width={20} height={20} />
        </View>
        <View style={styles.button}>
          <MontserratText style={styles.buttonText}>
            {commentsCount}
          </MontserratText>
          <CommentIcon width={18} height={18} />
        </View>
        <View style={styles.button}>
          <MontserratText style={styles.buttonText}>
            {sharesCount}
          </MontserratText>
          <ShareIcon width={20} height={20} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  ActionButtons: {
    paddingVertical: 8.5,
    borderColor: colors.borderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ActionButtonsNoComments: {
    borderBottomWidth: 0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Montserrat-500',
    paddingEnd: 4,
  },
})
