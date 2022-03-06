import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import MenuIcon from '../../../../assets/images/feed/menu-icon.svg'
import UserVerify from '../../../../assets/images/feed/user-verfy-icon.svg'
import { MontserratText } from '../../../../components/Text'
import { UserShareItemsFeed } from '../../feed.dto'
import { Actions } from '../Components/Actions'
import { Comments } from '../Components/comments'

type Props = {
  feed: UserShareItemsFeed
}

export const UserShareItemsCard: React.FC<Props> = ({ feed }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerMainContainer}>
          <Image style={styles.userAvatar} source={feed.user.userAvatar} />
          <View>
            <View style={styles.headerRestaurantNameContainer}>
              <MontserratText style={styles.boldText}>
                {feed.user.userName}
              </MontserratText>
              {feed.user.verified && <UserVerify />}
            </View>
            <View style={styles.postedTimeContainer}>
              {feed.user.verified && (
                <>
                  <MontserratText style={styles.postedTime}>
                    Verified Buyer
                  </MontserratText>
                  <MontserratText style={styles.postedTimeDot}>
                    •
                  </MontserratText>
                </>
              )}
              <MontserratText style={styles.postedTime}>
                {feed.postedTime}
              </MontserratText>
            </View>
          </View>
        </View>
        <MenuIcon style={styles.menuIcon} />
      </View>
      <View style={styles.textContainer}>
        <MontserratText>{feed.text}</MontserratText>
      </View>
      <View style={styles.imageGrid}>
        <Image style={styles.image1} source={feed.images[0]} />
        <View style={styles.images23}>
          <Image style={styles.image23} source={feed.images[1]} />
          <Image style={styles.image23} source={feed.images[2]} />
        </View>
      </View>
      <View style={styles.restaurantInfoContainer}>
        <Image style={styles.restaurantAvatar} source={feed.restaurantLogo} />
        <View style={styles.restaurantInfoMain}>
          <MontserratText style={styles.boldText}>{feed.items}</MontserratText>
          <MontserratText>{feed.restaurantName}</MontserratText>
        </View>
      </View>

      <Actions
        commentsCount={feed.commentsCount}
        sharesCount={feed.sharesCount}
        likesCount={feed.likesCount}
        bottomBorder={!!feed.comments?.length}
      />
      <Comments comments={feed.comments} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 3,
    paddingTop: 12,
    paddingBottom: 8,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuIcon: {
    marginBottom: 15,
  },
  headerMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRestaurantNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postedTimeContainer: {
    flexDirection: 'row',
  },
  boldText: {
    fontFamily: 'Montserrat-600',
    fontSize: 14,
    marginEnd: 8,
  },
  postedTime: {
    opacity: 0.5,
  },
  postedTimeDot: {
    opacity: 0.5,
    marginHorizontal: 4,
  },
  userAvatar: {
    width: 40,
    height: 40,
    marginEnd: 8,
  },
  restaurantAvatar: {
    width: 40,
    height: 40,
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image1: {
    height: 192,
    flexBasis: '50%',
    resizeMode: 'contain',
    marginEnd: 2,
  },
  images23: {
    height: 192,
    flexDirection: 'column',
    flexBasis: '50%',
    justifyContent: 'space-between',
  },
  image23: {
    height: '49%',
    width: '100%',
    resizeMode: 'contain',
  },
  restaurantInfoContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 7.5,
    flexDirection: 'row',
  },
  restaurantInfoMain: {
    justifyContent: 'space-around',
    paddingStart: 8,
  },
})
