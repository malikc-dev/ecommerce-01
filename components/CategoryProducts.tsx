import { StyleSheet, Text, View } from "react-native";
import React from "react";

//import types
import { ProductDataType } from "@/types";

//import colors
import { Colors } from "@/constants/Colors";

//import components
import ProductCard from "@/components/ProductCard";

type Props = {
  productList: Array<ProductDataType>;
};

const CategoryProducts = ({ productList }: Props) => {
  return (
    <View style={styles.container}>
      {productList.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </View>
  );
};

export default CategoryProducts;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    gap: 20,
  },
});
