import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";

//import colors
import { Colors } from "../constants/Colors";

//import datas
import { categoriesNames } from "@/data/categoriesNames";

type Props = {
  onCategoryChange: (category: string) => void;
};

const Categories = ({ onCategoryChange }: Props) => {
  const [selected, setSelected] = useState(0);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);

  const handleSelected = (index: number) => {
    const selectedItem = itemRef.current[index];
    setSelected(index);

    onCategoryChange(categoriesNames[index].slug);
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoriesText}>
        {categoriesNames.map((category, index) => (
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => handleSelected(index)}
            ref={(ref) => (itemRef.current[index] = ref)}
            key={index}
            style={{ position: "relative" }}
          >
            <Text
              style={[styles.text, index === selected && styles.activeText]}
            >
              {category.name}
            </Text>
            {index === selected && <View style={styles.activeBar} />}
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
    paddingHorizontal: 22,
  },
  categoriesText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    fontFamily: "Satoshi Medium",
    color: Colors.eerieBlack,
    paddingVertical: 5,
  },
  activeText: {
    color: Colors.darkOrange,
    fontFamily: "Satoshi Bold",
  },
  activeBar: {
    width: "100%",
    height: 2,
    backgroundColor: Colors.darkOrange,
    position: "absolute",
    bottom: 0,
  },
});
