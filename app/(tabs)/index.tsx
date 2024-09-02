import { Text, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

//import colors
import { Colors } from "@/constants/Colors";

//import icons
import { Logo, Notifications } from "@/assets/icons";

//import components
import SearchBar from "@/components/SearchBar";
import CarouselSquare from "@/components/CarouselSquare";
import Categories from "@/components/Categories";
import CategoryProducts from "@/components/CategoryProducts";

export default function HomeScreen() {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      y.value = event.contentOffset.y;
    },
  });

  const translateHeader = useAnimatedStyle(() => {
    const translateY = interpolate(y.value, [0, 85], [0, -85], "clamp");
    return {
      transform: [{ translateY: translateY }],
    };
  });

  const animatedHeaderElement = useAnimatedStyle(() => {
    const opacity = interpolate(y.value, [0, 75], [1, 0], "clamp");
    return {
      opacity: opacity,
    };
  });

  const scaleDown = useAnimatedStyle(() => {
    let scale;

    if (y.value >= 0) {
      // Handle scale down
      scale = interpolate(y.value, [0, 75], [1, 0.5], "clamp");
    } else {
      // Handle scale up
      scale = interpolate(y.value, [0, -75], [1, 1.1], "clamp");
    }

    return {
      transform: [{ scale }],
    };
  });

  const data = [
    {
      image: require("../../assets/images/shop/03.jpeg"),
    },
    {
      image: require("../../assets/images/shop/02.jpg"),
    },
    {
      image: require("../../assets/images/shop/O1.jpg"),
    },
  ];

  const onCategoryChange = (category: string) => {
    console.log("Category :", category);
  };

  return (
    <>
      {/* HEADER SECTION */}
      <Animated.View style={[styles.headerSection, translateHeader]}>
        <Animated.View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            },
            animatedHeaderElement,
          ]}
        >
          <Animated.View style={[styles.logoContainer, scaleDown]}>
            <Logo size={responsiveScreenHeight(3)} />
          </Animated.View>

          <Animated.View style={[styles.shippingContainer]}>
            <Text style={styles.shippingText}>Adresse de livraison</Text>
            <Text style={styles.shippingAddress}>
              Boulevard Général de Gaulle
            </Text>
          </Animated.View>

          <Animated.View style={[styles.notificationsContainer, scaleDown]}>
            <Notifications size={responsiveScreenHeight(3)} />
            <View style={styles.notificationsDot} />
          </Animated.View>
        </Animated.View>

        <SearchBar />
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        onScroll={onScroll}
      >
        {/* BODY SECTION */}
        <View style={styles.bodySection}>
          <View>
            <Text style={styles.sectionHeader}>Produits Populaires.</Text>
            <CarouselSquare data={data} />
          </View>

          {/* CATEGORIES */}
          <Categories onCategoryChange={onCategoryChange} />
          <CategoryProducts
            productList={[
              {
                id: "1",
                name: "Collection Hiver",
                image: require("../../assets/images/shop/03.jpeg"),
                price: 12800,
                quantity: 1,
                rating: 4.5,
                description: "Description du produit 1",
                category: "Tout",
              },
              {
                id: "2",
                name: "Accessoires en Jean de la ville",
                image: require("../../assets/images/shop/03.jpeg"),
                price: 25000,
                quantity: 1,
                rating: 4.5,
                description: "Description du produit 1",
                category: "Tout",
              },
            ]}
          />

          {/* <View style={{ height: 1000 }}></View> */}
        </View>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cornSilk,
    paddingTop: responsiveScreenHeight(25.8),
  },
  headerSection: {
    position: "absolute",
    backgroundColor: Colors.white,
    height: responsiveScreenHeight(25),
    width: responsiveScreenWidth(100),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
    paddingTop: 65,
    paddingHorizontal: 16,
    zIndex: 1,
  },
  bodySection: {
    backgroundColor: Colors.white,
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 25,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveScreenWidth(13),
    height: responsiveScreenWidth(13),
    borderRadius: 100,
    backgroundColor: Colors.darkOrange,
  },
  shippingContainer: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  shippingText: {
    fontSize: responsiveScreenFontSize(1.35),
    fontFamily: "Satoshi Bold",
    textAlign: "center",
    color: Colors.eerieBlack,
    opacity: 0.4,
  },
  shippingAddress: {
    fontSize: responsiveScreenFontSize(1.7),
    fontFamily: "Satoshi Black",
    textAlign: "center",
    color: Colors.eerieBlack,
  },
  notificationsContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveScreenWidth(13),
    height: responsiveScreenWidth(13),
    borderRadius: 100,
    backgroundColor: Colors.cornSilk,
  },
  notificationsDot: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: Colors.darkOrange,
    top: 5,
    right: 0,
  },
  sectionHeader: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: "Satoshi Black",
    color: Colors.eerieBlack,
    marginLeft: 22,
  },
});
