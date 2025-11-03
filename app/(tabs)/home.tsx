import {
	View,
	Text,
	FlatList,
	RefreshControl,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Image } from "expo-image";
import { ScrollView } from "react-native";
// import colorsi from "@/ui/colors";
import Entypo from '@expo/vector-icons/Entypo';
import { router } from "expo-router";
import { type post, featuredPosts, Posts } from "@/constants/posts";

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
		<TouchableOpacity onPress={()=>router.push(`/posts/${post.id}`)}>
		<View className="ml-4 flex-col justify-center items-center" >
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
				<Text className="text-white font-bold text-lg">{post.title}</Text>
				<Text className="text-gray-400 max-h-6 truncate max-full">
					{post.description}
				</Text>
			</View>
		</View>
		</TouchableOpacity>
	);
};

const Post = ({ post }: { post: post }) => {
	const blurhash =
		"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

	const styles = StyleSheet.create({
		image: {
			width: "100%",
			height: "100%",
			// borderRadius: 10,
			// marginHorizontal: 10,
			borderRadius: 10,

		},
	});

	return (
		<View className="px-4 my-4">
			<View className=" flex-row justify-between items-center bg-[#444d4f]  rounded-3xl w-full px-4">
				<View className="relative w-24 h-24 rounded-3xl ">
					<Image
						style={styles.image}
						source={{ uri: post.image }}
						placeholder={{ blurhash }}
						contentFit="cover"
						transition={1000}
						className="rounded-3xl"
					/>
				</View>
				<View className="px-4 py-6 w-full">
					<Text className="text-white font-bold text-lg overflow-hidden w-12m">{post.title}</Text>
					<Text
						className="text-gray-400 max-w-56"
						numberOfLines={3}
						ellipsizeMode="tail"
					>
						{post.description}
					</Text>
					<Text className="text-white w-fit rounded-full ">${post.price}</Text>
				</View>
			</View>
		</View>
	);
};

const index = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [refreshing2, setRefreshing2] = useState(false);
	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	};	const onRefresh2 = () => {
		setRefreshing2(true);
		setTimeout(() => {
			setRefreshing2(false);
		}, 2000);
	};
	return (
		
		<View className=" bg-[#373e40] flex-1">
			<View className="flex">
				<View className="flex-row justify-between px-4 my-4 items-baseline">
					<Text className="text-2xl text-white font-bold">
						Featured Articles
					</Text>
					<TouchableOpacity>
						<Text className="text-[#45777b]">See All</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={featuredPosts}
					renderItem={({ item }) => <FeaturedPost post={item} />}
					keyExtractor={(item) => item.id.toString()}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: 20 }}
					horizontal={true}
					showsHorizontalScrollIndicator={false}

					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
							// tintColor={colorsi.petrolGreen}
						/>
					}
				/>
			</View>
			<View className="flex-1">
				<View className="flex-row justify-between px-4 my-4 items-baseline">
					<Text className="text-2xl text-white font-bold">
						Featured Articles
					</Text>
					<TouchableOpacity>
						<Text className="text-[#45777b]">filter</Text>
					</TouchableOpacity>
				</View>
		{/* <ScrollView> */}

				<FlatList
					data={Posts}
					renderItem={({ item }) => <Post post={item} />}
					keyExtractor={(item) => item.id.toString()}
					showsVerticalScrollIndicator={true}
					// contentContainerStyle={{ paddingBottom: 60 }}
					// showsHorizontalScrollIndicator={false}
					refreshControl={
						<RefreshControl
							refreshing={refreshing2}
							onRefresh={onRefresh}
							// tintColor={colorsi.petrolGreen}
						/>
					}
					scrollEnabled={true}
					scrollsToTop
					style={{flexGrow:0}}
				/>

		{/* </ScrollView> */}
			</View>
		</View>
	);
};

export default index;
