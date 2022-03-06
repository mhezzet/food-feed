import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react'
import { delay } from '../utils/delay'

export default function useCachedResources() {
  const [isLoading, setIsLoading] = useState(true)

  const loadResourcesAndDataAsync = useCallback(async () => {
    try {
      SplashScreen.preventAutoHideAsync()

      const fontsPromise = Font.loadAsync({
        'Montserrat-400': require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        'Montserrat-500': require('../assets/fonts/Montserrat/Montserrat-Medium.ttf'),
        'Montserrat-600': require('../assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
        'Montserrat-700': require('../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
      })

      const delayPromise = delay(500)

      await Promise.all([fontsPromise, delayPromise])
    } catch (e) {
      console.warn(e)
    } finally {
      setIsLoading(false)
      SplashScreen.hideAsync()
    }
  }, [])

  useEffect(() => {
    loadResourcesAndDataAsync()
  }, [])

  return isLoading
}
