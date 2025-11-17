import AuthForm from "@/components/ui/AuthForm";
// import { CarousselNavigation } from "@/components/ui/Caroussel";
import { useRouter } from "expo-router";
import { CarousselNavigation } from "@/components/ui/Caroussel";
import { View } from "react-native";

const login = () => {
	const router = useRouter();

	return (
		<View className="flex-1 bg-[#111f21] flex-col justify-between">
			<View className="" style={{height:'40%'}}>
				<CarousselNavigation />
			</View>	
			<View className="justify-end flex-1">
				<AuthForm type="log in"/>
			</View>
		</View>
	);
};

export default login;
