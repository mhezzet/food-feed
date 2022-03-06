import { feed } from '../screens/Feed/feed-data'
import { Feeds } from '../screens/Feed/feed.dto'

export const getFeed = (): Promise<Feeds> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(feed)
    }, 500)
  })
