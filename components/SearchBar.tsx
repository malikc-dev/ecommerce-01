import { StyleSheet, Text, View, TextInput } from "react-native";

import { responsiveScreenHeight } from "react-native-responsive-dimensions";

import { Colors } from "../constants/Colors";
import { Search } from "@/assets/icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher dans la boutique"
        placeholderTextColor="gray"
        enterKeyHint="search"
        inputMode="search"
        autoFocus={false}
        defaultValue="          Rechercher dans la boutique"
      />
      <Search
        style={styles.icon}
        color={Colors.eerieBlack}
        size={responsiveScreenHeight(3)}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    textAlign: "center",
    borderWidth: 0,
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Colors.cornSilk,
    color: "#19181893",
    fontFamily: "Satoshi Regular",
  },
  icon: {
    position: "absolute",
    left: 80,
    top: 13,
  },
});
