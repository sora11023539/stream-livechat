import "react-native-gesture-handler"

import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const InitialLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

const RootLayoutNav = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <InitialLayout />
    </GestureHandlerRootView>
  )
}

export default RootLayoutNav
