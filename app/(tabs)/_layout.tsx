import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";

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

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

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
                <IconActive color="#FF8902" size={24} />
              ) : (
                <IconInactive color="#F5F3F4" size={24} />
              ),
          }}
        />
      ))}
    </Tabs>
  );
}
