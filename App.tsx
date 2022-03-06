import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Header } from './components/Header'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'

export default function App() {
  const isLoadingCache = useCachedResources()

  if (isLoadingCache) return null

  return (
    <SafeAreaProvider>
      <Header />
      <Navigation />
      <StatusBar style='dark' />
    </SafeAreaProvider>
  )
}
