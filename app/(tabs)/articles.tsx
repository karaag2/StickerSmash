import { View, Text } from 'react-native'
import React from 'react'
import {BlurView} from 'expo-blur'

const shop = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>shop</Text>
      <BlurView tint='default' intensity={80} style={{
        
      }}>
      <Text>shop</Text>
          
      </BlurView>
    </View>
  )
}

export default shop