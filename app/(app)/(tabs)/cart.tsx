import LottieView from "lottie-react-native";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function cart() {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 350,
          height: 400,
          backgroundColor: "transparent",
        }}
        source={
          require("@/assets/images/shop/cart_empty.json")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
