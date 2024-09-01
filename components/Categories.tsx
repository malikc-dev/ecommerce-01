import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

//import colors
import { Colors } from "../constants/Colors";

//import datas
import { categoriesNames } from "@/data/categoriesNames";

type Props = {};

const Categories = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.categoriesText}>
        {categoriesNames.map((name, index) => (
          <TouchableOpacity key={index}>
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 25,
    flex: 1,
    paddingHorizontal: 22,
  },
  categoriesText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 14,
    fontFamily: "Satoshi Medium",
    color: Colors.eerieBlack,
  },
});
