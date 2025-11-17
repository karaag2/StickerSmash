import { type CarouselItem } from '@/constants/data'
import { Image } from 'expo-image'
import React from 'react'
import { View } from 'react-native'


 const SliderItem = ({item, index}: {item: CarouselItem, index:number}) => {
  const source = ``
  return (
  <View className='justify-center items-center flex-1 rounded-b-3xl'>
    <Image
      source={item.image}
      style={{ width: '100%', height: '100%', borderBottomLeftRadius: 15,borderBottomRightRadius:15 }}
      // placeholder={"#000"}
      // contentFit="cover"
    />
  </View>
  )
}
export default SliderItem;