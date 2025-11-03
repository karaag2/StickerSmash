import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { featuredPosts } from '@/constants/posts';
const query = () => {
  const {query}: {query:number} = useLocalSearchParams();
      const blurhash =
        "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
    
      const styles = StyleSheet.create({
        image: {
          width: '100%',
          height: '35%',

          borderBottomEndRadius: 30,
          borderBottomLeftRadius: 30,
          flex: 1
          // marginHorizontal: 10,
        },
      });
    const post = featuredPosts[query]
      return (
        <View className="flex-col  flex-1 bg-[#373e40]" >
          <View className='h-[40%] relative'>
            <TouchableOpacity className='absolute top-10 left-10 h-8 w-8 bg-slate-900 z-20 rounded-full px-12' onPress={()=>router.back()}>
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={{ uri: post.image }}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
              className="o"
            />
          </View>
          <ScrollView className='h-1/2 px-6 pt-8'>
            <Text className='text-white font-black text-6xl text-left'>
              {post.title}
            </Text>
            <Text className='text-gray-400  text-base text-justify mt-12'>
              {post.description}
              {post.description}
              {post.description}
              {post.description}
              {post.description}
            </Text>
          </ScrollView>


        </View>
      );

}

export default query