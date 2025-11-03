import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CarousselNavigation } from "@/components/ui/Caroussel";
import { useRouter } from "expo-router";
import AuthForm from "@/components/ui/AuthForm";
import { Carot } from "@/components/ui/Caroussel";
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';




 export default function signup  ()  {
	const router = useRouter();

	return (
		<View className="flex-1 bg-[#111f21] flex-col justify-between">
			<View className="justify-end h-2/5">
      <CarousselNavigation/>
			</View>
      <View className="">
			<AuthForm type="sign up"/>
      </View>
		</View>
	);
};

// export default signup;
