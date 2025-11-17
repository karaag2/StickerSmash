import AuthForm from "@/components/ui/AuthForm";
import { CarousselNavigation } from "@/components/ui/Caroussel";
import { type CarouselItem } from '@/constants/data';
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from 'react';
import { Dimensions, Text, View } from "react-native";

const data =  [1,2,3,4]
export const SliderItem = ({item, index}: {item: CarouselItem, index:number}) => {
	const source = ``
  return (
	<View className='justify-center items-center flex-1'>
		<Image
			source={require("@/assets/images/caroussel/image1.png")}
			style={{ width: '100%', height: '100%', borderRadius: 12 ,borderColor: '#000', borderWidth: 3}}
			placeholder={"#000"}
			contentFit="cover"
		/>
	  <Text>{  item.title }</Text>
	</View>
  )
}

 const signup =   () => {
	const router = useRouter();
	const width = Dimensions.get('window').width

	return (
		<View className="flex-1 bg-[#111f21] flex-col justify-between flex">
			<View className="items-center overflow-hidden h-1/3 rounded-b-xl">
				<CarousselNavigation/>
			</View>
			<View className="flex-1 justify-end">
				<AuthForm type="sign up"/>
			</View>
		</View>
	);
};

export default signup;
