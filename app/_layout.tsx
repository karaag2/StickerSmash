import { Stack } from "expo-router";
import "../global.css"
import { HeaderShownContext } from "@react-navigation/elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {

  return (
  <SafeAreaProvider>

  <Stack screenOptions={{headerShown:false}} >
    <Stack.Screen name="index" options={{headerShown: false}}/>
    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    <Stack.Screen name="(auth)" options={{headerShown: false}}/>
  </Stack>

  </SafeAreaProvider>)
  
  ;
}
