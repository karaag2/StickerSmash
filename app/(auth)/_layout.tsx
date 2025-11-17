import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const _layout = () => {
  return (
     <SafeAreaProvider>
    <Stack>
    <Stack.Screen name="login" options={{headerShown: false}}/>
    <Stack.Screen name="signup" options={{headerShown: false}}/>

    </Stack>
    </SafeAreaProvider>
  )
}

export default _layout