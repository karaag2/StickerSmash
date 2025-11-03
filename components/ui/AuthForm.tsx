import { View, Text , TextInput, TouchableOpacity} from 'react-native'
import {router} from 'expo-router'
import React from 'react'
import { Label } from '@react-navigation/elements'

const AuthForm = ({type}:{type:string}) => {
    const ma = type.charAt(0).toUpperCase()+type.slice(1)
  return (
  <View className="flex-col px-6">
				<Text className="text-white font-bold text-2xl my-6">
					{ma} your account
				</Text>
				<View className="items-cente  gap-4">
					<TextInput
						placeholder="Email"
						className="border-2 focus:outline-deepBlueGray px-3 text-lg border-zinc-600 py-3 w-full rounded-2xl"
					/>
					<TextInput
						placeholder="Password"
						className="border-2 border-white px-3 text-lg py-3 w-full rounded-2xl border-zinc-600 focus:outline-deepBlueGray"
					/>

                    <TextInput
						placeholder="Password"
						className="border-2 border-white px-3 text-lg py-3 w-full rounded-2xl border-zinc-600 focus:outline-deepBlueGray"
					/>
				</View>
				<View className="my-4 mt-10">
					<TouchableOpacity
						className=" py-3 w-full rounded-3xl bg-colorsi-brightTurquoise"
						onPress={() => {
							router.replace("/(tabs)/home");
						}}
					>
						<Text className="text-lg text-white font-bold text-center">
							{ma}
						</Text>
					</TouchableOpacity>
					<View className="flex-row items-center my-3">
						<View className="flex-1 border-b border-b-gray-400" />
						<View className="flex-1  px-3 ">
							<Text className="text-center text-gray-400">Or {type} with</Text>
						</View>
						<View className="flex-1 border-b border-b-gray-400" />
					</View>
					<View className="flex-row gap-4">
						<View className="flex-1 px-4 py-3 rounded-full bg-[#12363b]">
							<Text className="text-center text-white font-bold">Google</Text>
						</View>
						<View className="flex-1 px-4 py-3 rounded-full  bg-[#12363b]">
							<Text className="text-center text-white font-bold">Apple</Text>
						</View>
					</View>
					<Text className="text-center text-duckBlue my-8 text-gray-400 text-xs">
						By Signing up. you agree to our . you agree to our{" "}
						<Text className="underline text-colorsi-brightTurquoise">
							Terms of Service
						</Text>{" "}
						and{" "}
						<Text className="underline text-colorsi-brightTurquoise">
							Privacy Policy
						</Text>
					</Text>
				</View>
			</View>
  )
}

export default AuthForm;
