import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import { BlurView } from "expo-blur";

//import types
import { ProductDataType } from "@/types";

//import Colors
import { Colors } from "@/constants/Colors";
import { NotLiked } from "@/assets/icons";

type Props = {
  data: ProductDataType;
};

const ProductCard = ({ data }: Props) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={{ uri: data.image }}
        />
        <TouchableOpacity style={styles.heart}>
          <BlurView intensity={60} style={styles.heartBlur}>
            <NotLiked
              color={Colors.darkOrange}
              size={responsiveScreenHeight(2.5)}
            />
          </BlurView>
        </TouchableOpacity>
      </View>

      <View style={styles.productInfos}>
        <Text numberOfLines={1} style={styles.productName}>
          {data.name}
        </Text>
        <View style={styles.prices}>
          <Text style={styles.price}>{data.price}F</Text>
          <Text style={{ textDecorationLine: "line-through" }}>
            {data.price}F
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: responsiveScreenHeight(27),
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: responsiveScreenHeight(1),
    position: "relative",
  },
  heart: {
    position: "absolute",
    top: 15,
    right: 15,
    borderRadius: 100,
    overflow: "hidden",
  },
  heartBlur: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
  },
  image: {
    flex: 1,
  },
  productInfos: {
    width: "100%",
  },
  productName: {
    fontSize: responsiveScreenFontSize(1.9),
    fontFamily: "Satoshi Bold",
    color: Colors.eerieBlack,
    marginBottom: 3,
  },
  prices: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  price: {
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: "Satoshi Medium",
    color: Colors.darkOrange,
  },
});
