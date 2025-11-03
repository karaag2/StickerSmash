import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Image} from 'expo-image'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { featuredPosts } from '@/constants/posts';
interface post {
	id: number;
	title: string;
	price: string;
	image: string;
	description: string;
}

const FeaturedPost = ({ post }: { post: post }) => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 200,
      borderRadius: 30,
      // marginHorizontal: 10,
    },
  });

  return (
    <TouchableOpacity onPress={()=>router.push(`/posts/${post.id}`)} className='my-4'>
    <View className=" flex-col justify-center items-center" >
      <View className="relative">
        <Image
          style={styles.image}
          source={{ uri: post.image }}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
          className="opacity-10 "
        />
        <Text className="text-white bg-blur-sm bg-red-500 w-fit px-2 rounded-full py-1 absolute bottom-4 right-4">
          {post.price}
        </Text>
      </View>
      <View className="max-w-[300px]">
        <Text className="text-white font-bold text-lg text-center">{post.title}</Text>

      </View>
    </View>
    </TouchableOpacity>
  );
};

const query = () => {
  const {query,j} = useLocalSearchParams();
  const [searchQuery, setSearchquery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<post[]|null>([])
  const handleSearch = (text: string)=>{
    setSearchquery(text)
  }
  useEffect(() => {
        const filtered = featuredPosts.filter((post) =>post.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredPosts(filtered);
  }, [searchQuery])
  

  return (
  <SafeAreaView className='bg-[#373e40]/85 flex-1 '>
<Text className='font-bold text-4xl my-12 text-white mx-8'>Recherche</Text>
    <View className='rounded-3xl border px-4 mx-8 bg-[#373e40] text-white flex-row items-center justify-between'>
      <TextInput
        placeholder='Search...'
        className='text-white h-full  w-[60%]'
        onChangeText={handleSearch}
        placeholderClassName='text-white'
      />
  <TouchableOpacity className='px-8 bg-white h-full translate-x-4 py-2 rounded-3xl items-center flex-col '>
    <FontAwesome name='search' size={24}color={'#373e40'}/>
  </TouchableOpacity>
    </View>
<Text className='font-bold text-4xl my-12 text-white mx-8'>Résultats</Text>
<ScrollView>
    {filteredPosts && filteredPosts.length>=1 && filteredPosts.map((post)=>{
      return <FeaturedPost post={post} key={post.id}/>
    })}    
    {filteredPosts && filteredPosts.length<1 && <Text>Aucun résultat...</Text>}
</ScrollView>

  </SafeAreaView>

  )
}

export default query