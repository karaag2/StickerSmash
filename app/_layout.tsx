import { Stack } from "expo-router";
import "../global.css"
import { HeaderShownContext } from "@react-navigation/elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {

  return (
  <SafeAreaProvider>
    <GestureHandlerRootView>
  <Stack screenOptions={{headerShown:false}} >
    <Stack.Screen name="index" options={{headerShown: false}}/>
    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    <Stack.Screen name="(auth)" options={{headerShown: false}}/>
  </Stack>
</GestureHandlerRootView>
  </SafeAreaProvider>)
  
  ;
}
