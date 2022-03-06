import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { Feed } from '../screens/Feed'
import { Group } from '../screens/Group'
import { Offers } from '../screens/Offers'
import { Profile } from '../screens/Profile'
import { Restaurants } from '../screens/Restaurants'
import { FeedButton } from './FeedButton'
import { GroupButton } from './GroupButton'
import { RootTabParamList } from './navigation.types'
import { OffersButton } from './OffersButton'
import { ProfileButton } from './ProfileButton'
import { RestaurantButton } from './RestaurantButton'
import { TabBar } from './TabBar'

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='Feed'
      tabBar={props => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name='Feed'
        component={Feed}
        options={() => ({
          tabBarIcon: ({ focused }) => <FeedButton focused={focused} />,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name='Restaurants'
        component={Restaurants}
        options={() => ({
          tabBarIcon: ({ focused }) => <RestaurantButton focused={focused} />,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name='Offers'
        component={Offers}
        options={() => ({
          tabBarIcon: ({ focused }) => <OffersButton focused={focused} />,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name='Group'
        component={Group}
        options={() => ({
          tabBarIcon: ({ focused }) => <GroupButton focused={focused} />,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={() => ({
          tabBarIcon: ({ focused }) => <ProfileButton focused={focused} />,
          headerShown: false,
        })}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
