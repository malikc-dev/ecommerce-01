import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

//import constants
import { Colors } from "@/constants/Colors";

//import icons
import {
  HomeActive,
  HomeNotActive,
  DiscoverNotActive,
  Liked,
  NotLiked,
  CartActive,
  CartNotActive,
  ProfileNotActive,
} from "@/assets/icons";

//tab bar infos
const tabInfos = [
  {
    name: "index",
    title: "Home",
    IconActive: HomeActive,
    IconInactive: HomeNotActive,
  },
  {
    name: "discover",
    title: "Discover",
    IconActive: DiscoverNotActive,
    IconInactive: DiscoverNotActive,
  },
  {
    name: "liked",
    title: "Liked",
    IconActive: Liked,
    IconInactive: NotLiked,
  },
  {
    name: "cart",
    title: "Cart",
    IconActive: CartActive,
    IconInactive: CartNotActive,
  },
  {
    name: "profile",
    title: "Profile",
    IconActive: ProfileNotActive,
    IconInactive: ProfileNotActive,
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.eerieBlack,
          borderTopColor: "transparent",
          position: "absolute",
          height: 90,
          bottom: 25,
          borderRadius: 70,
          marginHorizontal: 20,
          paddingVertical: 25,
          paddingHorizontal: 10,
        },
      }}
    >
      {tabInfos.map(({ name, title, IconActive, IconInactive }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: title,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View>
                  <IconActive color="#FF8902" size={24} />
                  <View style={styles.activeDot} />
                </View>
              ) : (
                <IconInactive color="#F5F3F4" size={24} />
              ),
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 100,
    backgroundColor: "#FF8902",
    position: "absolute",
    bottom: -10,
    left: "50%",
    transform: [{ translateX: -24 }],
  },
});
