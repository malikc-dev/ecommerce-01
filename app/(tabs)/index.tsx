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

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER SECTION */}
      <View style={styles.headerSection}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.logoContainer}>
            <Logo size={responsiveScreenHeight(3)} />
          </View>

          <View style={styles.shippingContainer}>
            <Text>Adresse de livraison</Text>
            <Text>Boulevard Général de Gaulle</Text>
          </View>

          <View style={styles.notificationsContainer}></View>
        </View>
      </View>

      {/* BODY SECTION */}
      <View style={styles.bodySection}></View>
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
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  bodySection: {
    backgroundColor: Colors.white,
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  notificationsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveScreenWidth(13),
    height: responsiveScreenWidth(13),
    borderRadius: 100,
    backgroundColor: Colors.cornSilk,
  },
});
