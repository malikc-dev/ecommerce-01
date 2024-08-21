import { Text, View, StyleSheet, ScrollView } from "react-native";
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

export default function HomeScreen() {
  const data = [
    {
      image: require("../../assets/images/shop/O1.jpg"),
    },
    {
      image: require("../../assets/images/shop/O1.jpg"),
    },
    {
      image: require("../../assets/images/shop/O1.jpg"),
    },
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER SECTION */}
      <View style={styles.headerSection}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View style={styles.logoContainer}>
            <Logo size={responsiveScreenHeight(3)} />
          </View>

          <View style={styles.shippingContainer}>
            <Text style={styles.shippingText}>Adresse de livraison</Text>
            <Text style={styles.shippingAddress}>
              Boulevard Général de Gaulle
            </Text>
          </View>

          <View style={styles.notificationsContainer}>
            <Notifications size={responsiveScreenHeight(3)} />
            <View style={styles.notificationsDot} />
          </View>
        </View>

        <SearchBar />
      </View>

      {/* BODY SECTION */}
      <View style={styles.bodySection}>
        <View>
          <Text style={styles.sectionHeader}>Produits Populaires.</Text>
          <View>
            <CarouselSquare data={data} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cornSilk,
  },
  headerSection: {
    backgroundColor: Colors.white,
    height: responsiveScreenHeight(25),
    width: responsiveScreenWidth(100),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
    paddingTop: 65,
    paddingHorizontal: 16,
  },
  bodySection: {
    backgroundColor: Colors.white,
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
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
    fontSize: responsiveScreenFontSize(1.7),
    fontFamily: "Satoshi Black",
    color: Colors.eerieBlack,
    marginLeft: 16,
  },
});
