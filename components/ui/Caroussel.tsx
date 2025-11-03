import { View, Text } from "react-native";

import React from "react";
export const CarousselNavigation = () => {
	return (
		<View className="flex-row w-20 justify-between self-center">
			<View className="rounded-full h-3 w-10 bg-colorsi-brightTurquoise " />
			<View className="rounded-full h-3 w-3 bg-colorsi-deepBlueGray " />
			<View className="rounded-full h-3 w-3 bg-colorsi-deepBlueGray " />
		</View>
	);
};
import { Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
 
const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;
 
export function Carot() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
 
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={data}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />
 
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
}
