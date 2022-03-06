import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import MenuIcon from '../../../../assets/images/feed/menu-icon.svg'
import RestaurantIconTag from '../../../../assets/images/feed/restaurant-icon-tag.svg'
import RestaurantVerify from '../../../../assets/images/feed/restaurant-verify.svg'
import { LinearGradientButton } from '../../../../components/LinearGradientButton'
import { MontserratText } from '../../../../components/Text'
import { RestaurantFeed } from '../../feed.dto'
import { Actions } from '../Components/Actions'
import { Comments } from '../Components/comments'

type Props = {
  feed: RestaurantFeed
}

export const RestaurantCard: React.FC<Props> = ({ feed }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerMainContainer}>
          <Image style={styles.avatar} source={feed.restaurantLogo} />
          <View>
            <View style={styles.headerRestaurantNameContainer}>
              <MontserratText style={styles.restaurantName}>
                {feed.restaurantName}
              </MontserratText>
              <RestaurantVerify />
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
      <Image style={styles.image} source={feed.image} />
      <View style={styles.restaurantInfoContainer}>
        <RestaurantIconTag />
        <View style={styles.restaurantInfoMain}>
          <MontserratText style={styles.restaurantName}>
            {feed.restaurantName}
          </MontserratText>
          <MontserratText>{feed.type}</MontserratText>
        </View>
      </View>
      <View style={styles.ctaContainer}>
        <LinearGradientButton text='View Menu' />
      </View>
      <Actions
        commentsCount={feed.commentsCount}
        sharesCount={feed.sharesCount}
        likesCount={feed.likesCount}
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
  restaurantName: {
    fontFamily: 'Montserrat-600',
    fontSize: 14,
    marginEnd: 8,
  },
  postedTime: {
    opacity: 0.5,
  },
  avatar: {
    width: 40,
    height: 40,
    marginEnd: 8,
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  image: {
    height: 192,
    width: '100%',
    resizeMode: 'cover',
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
  ctaContainer: {
    paddingHorizontal: 16,
    paddingBottom: 7.5,
  },
})
