import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CarousselNavigation } from "@/components/ui/Caroussel";
import { useRouter } from "expo-router";
import AuthForm from "@/components/ui/AuthForm";

const login = () => {
	const router = useRouter();

	return (
		<View className="flex-1 bg-[#111f21]">
			<View className="h-2/5 justify-end">
				<CarousselNavigation />
			</View>
			<AuthForm type="log in"/>
		</View>
	);
};

export default login;
