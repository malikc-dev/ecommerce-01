import { StyleSheet, Text, View } from "react-native";
import React from "react";

//import types
import { ProductDataType } from "@/types";

type Props = {
  productList: Array<ProductDataType>;
};

const CategoryProducts = ({ productList }: Props) => {
  return (
    <View style={styles.container}>
      {productList.map((product) => (
        <View key={product.id}>
          <Text>{product.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default CategoryProducts;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
    backgroundColor: "red",
  },
});
