import { MaterialIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { router, Tabs } from "expo-router";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
export default function TabsLayout() {
	const width = Dimensions.get("screen").width;
	return (
		<Tabs
			screenOptions={{
				headerShown: true,
				tabBarBackground: () => (
					// <BlurView intensity={80} style={StyleSheet.absolbluteFill} tint='default' >
					<LinearGradient
						colors={["rgba(69,78,80,1)", "rgba(73,96,98,1)"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={StyleSheet.absoluteFill}
					/>
				),
				tabBarActiveTintColor: "#fff",
				headerBackground: () => (
					<LinearGradient
						colors={["#496062", "#454e50"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={{ flex: 1 }}
					/>
				),
				tabBarStyle: {
					bottom: 25,
					position: "absolute",
					elevation: 8,
					backgroundColor: "#1B1B1B",
					marginHorizontal: (width - 350) / 2,
					flex: 1,
					width: 350,
					borderRadius: 40,
					height: 60,
					borderTopWidth: 0,
					overflow: "hidden",
					opacity: 10,
				},
				tabBarItemStyle: {
					marginTop: 0,
				},
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Acceuil",
					// tabBarActiveBackgroundColor:'red',
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								backgroundColor: focused ? "red" : "",
								height: focused ? "100%" : "auto",
								width: focused ? "240%" : "auto",
								borderRadius: focused ? 40 : "auto",
								borderTopLeftRadius: focused ? 40 : "auto",
								borderBottomLeftRadius: focused ? 40 : "auto",
								justifyContent: "center",
								alignItems: "center",
								marginLeft: focused ? 15 : 0,
								// transitionDelay: '1000',
							}}
						>
							<Feather name="home" size={24} color="white" />
							{focused && <Text>shop</Text>}
						</View>
					),
					headerTitle: () => (
						<View className="flex-row justify-around items-center flex-1 w-full ">
							<View className="p-2 bg-gray-300 rounded-full ">
								<MaterialCommunityIcons
									name="account"
									size={24}
									color="black"
								/>
							</View>
							<Text className="text-white font-bold text-lg ">
								Rabbit World
							</Text>
							<TouchableOpacity
								className=""
								onPress={() => router.push("/search/[query]")}
							>
								<Feather name="search" size={24} color="white" />
							</TouchableOpacity>
						</View>
					),
					headerTitleAlign: "center",
					headerTitleStyle: {
						color: "white",
						fontSize: 2,
						fontWeight: "700",
					},
					tabBarIconStyle: {
						flex: 1,
					},
				}}
			/>
			<Tabs.Screen
				name="articles"
				options={{
					title: "articles",
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								backgroundColor: focused ? "red" : "",
								height: focused ? "100%" : "auto",
								width: focused ? "250%" : "auto",
								borderRadius: focused ? 40 : "auto",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<MaterialIcons name="article" size={28} color="white" />
							{focused && <Text>shop</Text>}
						</View>
					),
					tabBarIconStyle: {
						flex: 1,
					},
				}}
			/>
			<Tabs.Screen
				name="encyclopedia"
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								backgroundColor: focused ? "red" : "",
								height: focused ? "100%" : "auto",
								width: focused ? "250%" : "auto",
								borderRadius: focused ? 40 : "auto",
								justifyContent: "center",
								alignItems: "center",
								marginVertical: focused ? 20 : 0,
							}}
						>
							<Feather name="book-open" size={28} color="white" />
							{focused && <Text>shop</Text>}
						</View>
					),
					title: "",
					tabBarIconStyle: {
						flex: 1,
					},
				}}
			/>
			<Tabs.Screen
				name="shop"
				options={{
					title: "shop",
					tabBarIcon: ({ focused }) => (
						<BlurView
							intensity={90}
							tint="default"
							style={[
								styled.blurContainer,
								{
									height: focused ? "100%" : "auto",
									width: focused ? "250%" : "auto",
									borderRadius: focused ? 40 : "auto",
									justifyContent: "center",
									alignItems: "center",
								},
							]}
						>
							<Feather name="shopping-cart" size={28} color="white" />
							{focused && <Text className="text-white">shop</Text>}
						</BlurView>
					),
					tabBarIconStyle: {
						flex: 1,
					},
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "profile",
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								backgroundColor: focused ? "red" : "",
								height: focused ? "100%" : "auto",
								width: focused ? "240%" : "200%",
								borderRadius: focused ? 40 : "auto",
								borderTopRightRadius: focused ? 40 : "auto",
								borderBottomRightRadius: focused ? 40 : "auto",
								justifyContent: "center",
								marginRight: 15,
								alignItems: "center",
							}}
							className="w-[200%]"
						>
							<Feather name="user" size={26} color="white" />
							{focused && <Text>shop</Text>}
						</View>
					),
					tabBarIconStyle: {
						flex: 1,
					},
				}}
			/>
			{/* <Tabs.Screen name="home" options={{ title: "Profil" }} /> */}
		</Tabs>
	);
}

const styled = StyleSheet.create({
	container: {
		flex: 1,
	},
	blurContainer: {
		padding: 20,
		margin: 16,
		textAlign: "center",
		justifyContent: "center",
		overflow: "hidden",
		borderRadius: 20,
	},
	background: {
		flex: 1,
		flexWrap: "wrap",
		...StyleSheet.absoluteFill,
	},
	box: {
		width: "25%",
		height: "20%",
	},
	boxEven: {
		backgroundColor: "orangered",
	},
	boxOdd: {
		backgroundColor: "gold",
	},
	text: {
		fontSize: 24,
		fontWeight: "600",
	},
});
