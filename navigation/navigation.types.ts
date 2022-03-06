import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

declare global {
  namespace ReactNavigation {
    interface RootParamList {}
  }
}

export type RootTabParamList = {
  Feed: undefined
  Restaurants: undefined
  Offers: undefined
  Group: undefined
  Profile: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  BottomTabScreenProps<RootTabParamList, Screen>
