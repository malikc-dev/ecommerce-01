import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
  ImageBackground,
  Pressable,
} from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";

//import colors
import { Colors } from "@/constants/Colors";

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

  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={SIZE}
        decelerationRate="fast"
        onScroll={onScroll}
        style={{ paddingVertical: 15 }}
      >
        {newData.map((item: any, index: number) => {
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.8, 1, 0.8]
            );

            return {
              transform: [{ scale }],
            };
          });
          if (!item.image)
            return <View style={{ width: SPACER }} key={index} />;
          return (
            <View style={{ width: SIZE }} key={index}>
              <Animated.View style={[styles.imageContainer, style]}>
                <ImageBackground
                  resizeMode="cover"
                  source={item.image}
                  style={styles.image}
                />
                <View style={styles.imageOverlay} />
                <View style={styles.imageTextContainer}>
                  <Text style={styles.imageTextSubline}>
                    Jusqu'à <Text style={styles.imageTextSpan}>50%</Text> de
                    réduction.
                  </Text>
                  <Text style={styles.imageTextTitle}>
                    Profitez de votre offre spéciale !
                  </Text>
                  <Pressable>
                    <Text style={styles.imageTextButton}>
                      Acheter maintenant
                    </Text>
                  </Pressable>
                </View>
              </Animated.View>
            </View>
          );
        })}
      </Animated.ScrollView>

      <View style={styles.dotsContainer}>
        {data.map((_: any, index: number) => {
          const animatedDotStyle = useAnimatedStyle(() => {
            const opacity = interpolate(
              x.value,
              [(index - 1) * SIZE, index * SIZE, (index + 1) * SIZE],
              [0.3, 1, 0.3],
              "clamp"
            );
            const scale = interpolate(
              x.value,
              [(index - 1) * SIZE, index * SIZE, (index + 1) * SIZE],
              [0.8, 1, 0.8],
              "clamp"
            );
            const width = interpolate(
              x.value,
              [(index - 1) * SIZE, index * SIZE, (index + 1) * SIZE],
              [7, 20, 7],
              "clamp"
            );

            return {
              opacity,
              transform: [{ scale }],
              width,
            };
          });

          return (
            <Animated.View key={index} style={[styles.dot, animatedDotStyle]} />
          );
        })}
      </View>
    </View>
  );
};

export default CarouselSquare;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.eerieBlack,
    opacity: 0.4,
  },
  imageTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: 20,
  },
  imageTextSubline: {
    fontSize: 12,
    fontFamily: "Satoshi Regular",
    color: Colors.white,
  },
  imageTextSpan: {
    fontFamily: "Satoshi Black",
    color: Colors.darkOrange,
  },
  imageTextTitle: {
    fontSize: 22,
    fontFamily: "Satoshi Bold",
    color: Colors.white,
    width: "60%",
    lineHeight: 25,
    marginTop: 5,
  },
  imageTextButton: {
    fontSize: 14,
    fontFamily: "Satoshi Black",
    color: Colors.white,
    marginTop: 23,
    backgroundColor: Colors.darkOrange,
    width: 160,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    textAlign: "center",
    overflow: "hidden",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  dot: {
    height: 7,
    borderRadius: 4,
    backgroundColor: Colors.darkOrange,
    marginHorizontal: 4,
  },
});
