import { useCallback, useEffect, useState } from 'react'
import { getFeed } from '../../../services/getFeed'
import { Feeds } from '../feed.dto'

export const useFeed = () => {
  const [feeds, setFeeds] = useState<Feeds | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any | null>(null)

  const fetchFeed = useCallback(async () => {
    setLoading(true)
    setError(false)

    try {
      const feeds = await getFeed()

      setLoading(false)
      setFeeds(feeds)
    } catch (error) {
      setError(error)
      setLoading(false)
    }

    return feeds
  }, [])

  useEffect(() => {
    fetchFeed()
  }, [])

  return { feeds, loading, error, refetch: fetchFeed }
}
