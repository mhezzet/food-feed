import React from 'react'
import { FlatList } from 'react-native'
import { MontserratText } from '../../../components/Text'
import { FeedType } from '../feed.dto'
import { useFeed } from '../hooks/useFeed'
import { RestaurantCard } from './RestaurantCard'
import { SkeletonCard } from './SkeletonCard'
import { UserShareItemsCard } from './UserShareItemsCard'
import { UserShareUserCard } from './UserShareUserCard'

export const Cards: React.FC = () => {
  const { feeds, error, loading } = useFeed()

  if (loading)
    return (
      <FlatList
        data={Array.from({ length: 5 }).map((_, idx) => ({ id: idx }))}
        renderItem={() => <SkeletonCard />}
      />
    )

  if (error) return <MontserratText>error</MontserratText>

  return (
    <FlatList
      data={feeds}
      renderItem={feed => {
        switch (feed.item.feedType) {
          case FeedType.Restaurant:
            return <RestaurantCard feed={feed.item} />
          case FeedType.UserShareItems:
            return <UserShareItemsCard feed={feed.item} />
          case FeedType.UserShareUser:
            return <UserShareUserCard feed={feed.item} />
        }
      }}
      keyExtractor={item => item.id}
    />
  )
}
