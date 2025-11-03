import { router, Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "@/ui/colors";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ headerShown: true,
            tabBarBackground: ()=>			<LinearGradient
            colors={["#454e50","#496062", ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        />,
        tabBarActiveTintColor: '#fff',
         					headerBackground: () => (
						<LinearGradient
							colors={["#496062", "#454e50"]}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							style={{ flex: 1 }}
						/>
					),}}
		 
        
        >
			<Tabs.Screen
				name="home"
				options={{
					title: "Acceuil",
                    // tabBarActiveBackgroundColor:'red',
   
                    tabBarIcon:()=>
                        
                        <Entypo name="home" size={24} color="white" />
                        ,
					headerTitle: () => (

						<View className="flex-row justify-around items-center flex-1 w-full ">
							<View className="p-2 bg-gray-300 rounded-full ">
							<MaterialCommunityIcons name="account" size={24} color="black" />

							</View>
							<Text className="text-white font-bold text-lg ">
								Rabbit World
							</Text>
							<TouchableOpacity className="" onPress={()=>router.push('/search/[query]')}>
								<Feather name="search" size={24} color="white" />
							</TouchableOpacity>
						</View>
					),
					headerTitleAlign: "center",
                
					headerTitleStyle: {
						color: "white",
						fontSize: 20,
						fontWeight: "700",
					},

				}}
			/>
			<Tabs.Screen name="shop" options={{ title: "Shop",                 tabBarIcon:()=>
                        
                        <Entypo name="home" size={24} color="white" /> }} 
			
			/>
			<Tabs.Screen name="encyclopedia" options={{ title: "encyclopedia",                tabBarIcon:()=>
                        
                        <Entypo name="home" size={24} color="white" /> }} />
			<Tabs.Screen name="cart" options={{ title: "cart" ,                tabBarIcon:()=>
                        
                        <Entypo name="home" size={24} color="white" />}} />
			<Tabs.Screen name="profile" options={{ title: "profile",                tabBarIcon:()=>
                        
                        <Entypo name="home" size={24} color="white" /> }} />
			{/* <Tabs.Screen name="home" options={{ title: "Profil" }} /> */}
		</Tabs>
	);
}
