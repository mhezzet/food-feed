import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import MenuIcon from '../../../../assets/images/feed/menu-icon.svg'
import RightArrowIcon from '../../../../assets/images/feed/right-arrow-icon.svg'
import UserVerify from '../../../../assets/images/feed/user-verfy-icon.svg'
import { MontserratText } from '../../../../components/Text'
import { colors } from '../../../../constants/Colors'
import { UserShareUserFeed } from '../../feed.dto'
import { Actions } from '../Components/Actions'
import { Comments } from '../Components/comments'

type Props = {
  feed: UserShareUserFeed
}

export const UserShareUserCard: React.FC<Props> = ({ feed }) => {
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
              <RightArrowIcon style={styles.rightArrow} />
              {feed.sharedFeed.restaurantName.split(' ').map((word, idx) => (
                <MontserratText key={idx} style={styles.boldText}>
                  {word}
                </MontserratText>
              ))}
            </View>
            <MontserratText style={styles.postedTime}>
              {feed.postedTime}
            </MontserratText>
          </View>
        </View>
        <MenuIcon style={styles.menuIcon} />
      </View>
      <View style={styles.textContainer}>
        <MontserratText>{feed.text}</MontserratText>
      </View>

      <View style={styles.sharedFeedContainer}>
        <View style={styles.sharedFeedHeaderContainer}>
          <View style={styles.headerMainContainer}>
            <Image
              style={styles.userAvatar}
              source={feed.sharedFeed.user.userAvatar}
            />
            <View>
              <View style={styles.sharedFeedheaderUserNameContainer}>
                <MontserratText style={styles.boldText}>
                  {feed.sharedFeed.user.userName}
                </MontserratText>
                {feed.sharedFeed.user.verified && <UserVerify />}
              </View>
              <View style={styles.postedTimeContainer}>
                {feed.sharedFeed.user.verified && (
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
                  {feed.sharedFeed.postedTime}
                </MontserratText>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sharedFeedTextContainer}>
          <MontserratText>{feed.sharedFeed.text}</MontserratText>
        </View>
        <Image style={styles.image} source={feed.sharedFeed.image} />
        <View style={styles.restaurantInfoContainer}>
          <Image
            style={styles.restaurantAvatar}
            source={feed.sharedFeed.restaurantLogo}
          />
          <View style={styles.restaurantInfoMain}>
            <MontserratText style={styles.boldText}>
              {feed.sharedFeed.items}
            </MontserratText>
            <MontserratText>{feed.sharedFeed.restaurantName}</MontserratText>
          </View>
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
  rightArrow: {
    marginEnd: 8,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sharedFeedHeaderContainer: {
    paddingHorizontal: 8,
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
    alignItems: 'flex-start',
    flex: 1,
  },
  headerRestaurantNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '90%',
    flexShrink: 1,
  },
  sharedFeedheaderUserNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantName: {
    fontFamily: 'Montserrat-600',
    fontSize: 14,
    marginEnd: 8,
  },
  postedTime: {
    opacity: 0.5,
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
  sharedFeedTextContainer: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  image: {
    height: 192,
    width: '100%',
    resizeMode: 'cover',
  },
  restaurantInfoContainer: {
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 7.5,
    flexDirection: 'row',
  },
  restaurantInfoMain: {
    justifyContent: 'space-around',
    paddingStart: 8,
  },
  ctaContainer: {
    paddingHorizontal: 16,
    paddingBottom: 7.5,
  },
  sharedFeedContainer: {
    marginHorizontal: 16,
    borderRadius: 7,
    borderColor: colors.sharedFeedBorder,
    borderWidth: 1,
    marginBottom: 9,
    paddingTop: 8,
  },
  boldText: {
    fontFamily: 'Montserrat-600',
    fontSize: 14,
    marginEnd: 8,
  },
  postedTimeContainer: {
    flexDirection: 'row',
  },
  postedTimeDot: {
    opacity: 0.5,
    marginHorizontal: 4,
  },
})
