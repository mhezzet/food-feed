import { ImageSourcePropType } from 'react-native'

export enum FeedType {
  Restaurant = 'restaurant',
  UserShareItems = 'user-share-items',
  UserShareUser = 'user-share-user',
}

type User = {
  userName: string
  verified: boolean
  userAvatar: ImageSourcePropType
}

export type FeedComment = {
  id: string
  userName: string
  avatar: ImageSourcePropType
  postedTime: string
  comment: string
  likesCount: string
}

export type Feed = {
  id: string
  feedType: FeedType
  postedTime: string
  text: string
  likesCount: string
  sharesCount: string
  commentsCount: string
  comments?: FeedComment[]
}

export type RestaurantFeed = Feed & {
  feedType: FeedType.Restaurant
  restaurantName: string
  type: string
  restaurantLogo: ImageSourcePropType
  image: ImageSourcePropType
}

export type UserShareItemsFeed = Feed & {
  feedType: FeedType.UserShareItems
  user: User
  images: ImageSourcePropType[]
  items: string
  restaurantName: string
  restaurantLogo: ImageSourcePropType
}

export type UserShareUserFeed = Feed & {
  feedType: FeedType.UserShareUser
  user: User
  sharedFeed: {
    user: User
    image: ImageSourcePropType
    text: string
    items: string
    restaurantName: string
    restaurantLogo: ImageSourcePropType
    postedTime: string
  }
}

export type Feeds = (RestaurantFeed | UserShareItemsFeed | UserShareUserFeed)[]
