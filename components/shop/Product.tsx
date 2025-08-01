import { API_URL } from "@/config";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ProductProps = {
  id: string;
  brand: string;
  title: string;
  star: number;
  quantity: number;
  price: number;
  discount: number;
  image: any;
  favourite: boolean;
  onCall: () => void;
};

export default function Product({
  id,
  brand,
  title,
  star,
  quantity,
  price,
  discount,
  image,
  favourite,
  onCall
}: ProductProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onCall}>
        <ImageBackground
          source={{uri: API_URL+image}}
          style={styles.imageView}
          imageStyle={styles.image}
          resizeMode="cover"
        >
          <Pressable>
            <View style={styles.heartContainer}>
              <Ionicons
                name={favourite ? "heart" : "heart-outline"}
                size={18}
                color={favourite ? "#ff0000" : "#9e9999ff"}
              />
            </View>
          </Pressable>
        </ImageBackground>
      </Pressable>
      <View style={styles.descriptionContainer}>
        <Text style={styles.brand}>{brand}</Text>
        <Ionicons name="star" size={12} color="#ffcc00" />
        <Text style={styles.star}>{star}</Text>
        <Text style={styles.quantity}>{"(" + quantity + ")"}</Text>
      </View>
      <Text style={styles.title}>
        {title.substring(0, 28) + (title.length > 28 ? "..." : "")}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "flex-start"}}>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Text style={styles.discount}>${discount.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  imageView: {
    width: 200,
    height: 250,
    resizeMode: "cover",
    alignItems: "flex-end",
  },
  image: {
    borderRadius: 5,
  },
  heartContainer: {
    backgroundColor: "#00000015",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginRight: 12,
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  brand: {
    fontWeight: "600",
    color: "gray",
    marginRight: 4,
  },
  star: {
    fontSize: 13,
    marginHorizontal: 2,
  },
  quantity: {
    fontSize: 13,
    color: "gray",
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 4,
    width: 200,
  },
  price: {
    fontSize: 15,
    color: "#007618",
    fontWeight: "500",
    marginRight: 4,
  },
  discount: {
    color: "gray",
    textDecorationLine: "line-through",
    fontSize: 12,
  },
});
