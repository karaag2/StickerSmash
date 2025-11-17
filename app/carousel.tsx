import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import SliderItem from '@/components/ui/SliderItem'

const carousel = () => {
  return (
    <SafeAreaView className='flex justify-center items-center flex-1'>
      {/* <View>
        <FlatList
        data={carouselData}
        renderItem={({item, index})=><SliderItem item={item} index={index}/>}
        />
      </View> */}
    </SafeAreaView>
  )
}

export default carousel