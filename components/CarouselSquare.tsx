import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const CarouselSquare = ({ data }: any) => {
  const [newData] = useState([
    {
      key: "spacer-left",
    },
    ...data,
    {
      key: "spacer-right",
    },
  ]);

  const { width } = useWindowDimensions();
  const SIZE = width * 0.9;
  const SPACER = (width - SIZE) / 2;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
      snapToInterval={SIZE}
      decelerationRate="fast"
      style={{ paddingVertical: 10 }}
    >
      {newData.map((item: any, index: number) => {
        if (!item.image) return <View style={{ width: SPACER }} key={index} />;

        return (
          <View style={{ width: SIZE }} key={index}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CarouselSquare;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: responsiveScreenHeight(23),
  },
});
