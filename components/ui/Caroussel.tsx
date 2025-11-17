import { carouselData } from '@/constants/data';
import { View } from "react-native";

import React, { useRef } from "react";
import { Dimensions } from "react-native";
import {
	Extrapolation,
	interpolate, useSharedValue
} from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import SliderItem from "../SliderItem";
const defaultDataWith6Colors = [
	"1",
	"2",
	"3",
	"4",
];
export const CarousselNavigation = () => {
	const ref = useRef<ICarouselInstance>(null);
	const progress = useSharedValue<number>(0);
	const onPressPagination = (index: number)=>{
		ref.current?.scrollTo({
			count: index- progress.value,
			animated: true,
		});
	};
	return (
		<View className='flex-1 h-full justify-end gap-2' id='parent'>
			<Carousel
			loop
			autoPlay
			autoPlayInterval={2000}
			width={width}
			height={height*0.4}
			data={carouselData}
			onProgressChange={progress}
			renderItem={({item, index})=>(
				<View className="flex-1 justify-center rounded-xl">
			<SliderItem item={item} index={index}/>
				</View>
			)}
			/>
			<Pagination.Custom<{ color: string }>
				progress={progress}
				data={defaultDataWith6Colors.map((color) => ({ color }))}
				size={12}
				dotStyle={{
					borderRadius: 16,
					backgroundColor: "#262626",
				}}
				activeDotStyle={{
					borderRadius: 8,
					width: 50,
					height: 12,
					overflow: "hidden",
					backgroundColor: "#20C9DF",
				}}
				containerStyle={{
					gap: 5,
					alignItems: "center",
					height: 10,
				}}
				horizontal
				onPress={onPressPagination}
				customReanimatedStyle={(progress, index, length) => {
					let val = Math.abs(progress - index);
					if (index === 0 && progress > length - 1) {
						val = Math.abs(progress - length);
					}
 
					return {
						transform: [
							{
								translateY: interpolate(
									val,
									[0, 1],
									[0, 0],
									Extrapolation.CLAMP,
								),
							},
						],
					};
				}}
				renderItem={(item) => (
					<View
						style={{
							backgroundColor: '',
							flex: 1,
						}}
					/>
				)}
			/>

			</View>
	);
};
 
const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
 
// export function Carot() {
//   const ref = React.useRef<ICarouselInstance>(null);
//   const progress = useSharedValue<number>(0);
  
//   const onPressPagination = (index: number) => {
//     ref.current?.scrollTo({
//       /**
//        * Calculate the difference between the current index and the target index
//        * to ensure that the carousel scrolls to the nearest index
//        */
//       count: index - progress.value,
//       animated: true,
//     });
//   };
 
//   return (
//     <View style={{ flex: 1 }}>
//       <Carousel
//         ref={ref}
//         width={width}
//         height={width / 2}
//         data={data}
//         onProgressChange={progress}
//         renderItem={({ index }) => (
//           <View
//             style={{
//               flex: 1,
//               borderWidth: 1,
//               justifyContent: "center",
//             }}
//           >
//             <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
//           </View>
//         )}
//       />
 
//       <Pagination.Basic
//         progress={progress}
//         data={data}
//         dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
//         containerStyle={{ gap: 5, marginTop: 10 }}
//         onPress={onPressPagination}
//       />
//     </View>
//   );
// }
