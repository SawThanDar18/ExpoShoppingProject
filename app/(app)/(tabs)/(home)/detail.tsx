//import { useLocalSearchParams } from 'expo-router';
import { useAppSelector } from "@/hooks/useRedux";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet from '@gorhom/bottom-sheet';
import { Stack, useRouter } from "expo-router";
import React, { useCallback, useRef } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Cart from "@/components/shop/Cart";
import ViewPager from "@/components/shop/ViewPager";
import { selectItems } from "@/data";

const { width, height } = Dimensions.get("window");

export default function DetailScreen() {
  // const { id } = useLocalSearchParams();

  const router = useRouter();

  //redux
  const product = useAppSelector((state) => state.products.product);

  const ColorBox = ({ id, name, bgColor, stock }: {id: number, name: string, bgColor: string, stock: boolean}) => (
    <Pressable style={[styles.circle, {backgroundColor: bgColor, borderWidth: 1, borderColor: "gray"}]}>
      <Ionicons name="checkmark" size={20} color={stock ? (bgColor == "#ffffff" ? "black" : "white") : bgColor} />
    </Pressable>
  );
  const SizeBox = ({ id, name, stock }: {id: number, name: string, stock: boolean}) => (
    <Pressable style={[
      styles.circle,
      stock ? { backgroundColor: "gray" } : { borderWidth: 1, borderColor: "#00000060" }
    ]}>
      <Text style={[{fontSize: 10, fontWeight: "600"}, stock && {color: "white"} ]}>{name}</Text>
    </Pressable>
  );

  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    
  }, []);

  return (
    <View>
      <Stack.Screen
        options={{
          headerBackTitle: "Home",
          headerTitle: "Product Detail",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "white" },
          headerRight: () => (
            <Pressable onPress={() => router.navigate("/cart")}>
              <Cart />
            </Pressable>
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <ViewPager />
        <View style={{ marginHorizontal: 16, marginVertical: 16 }}>
          <View style={styles.firstLineDescriptionContainer}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.brand}>{product?.brand}</Text>
              <Ionicons name="star" size={12} color="#ffcc00" />
              <Text style={styles.star}>{product?.star}</Text>
              <Text style={styles.quantity}>
                {"(" + product?.quantity + ")"}
              </Text>
            </View>
            <Pressable>
              <Ionicons
                name={product?.favourite ? "heart" : "heart-outline"}
                size={18}
                color={product?.favourite ? "#ff0000" : "#9e9999ff"}
              />
            </Pressable>
          </View>
          <Text style={styles.title}>
            {/* {selector?.title
          ? selector.title.substring(0, 28) + (selector.title.length > 28 ? "..." : "")
          : ""} */}
            {product?.title}
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Text style={styles.price}>${product?.price.toFixed(2)}</Text>
            <Text style={styles.discount}>${product?.discount.toFixed(2)}</Text>
          </View>
          <Text style={styles.description}>
            a long- or short-sleeved garment for the upper part of the body,
            usually lightweight and having a collar and a front opening. an
            undergarment of cotton, or other material, for the upper part of the
            body. a shirtwaist.
          </Text>
        </View>
        <View
          style={
            width > 600
              ? {
                  flexDirection: "row",
                  gap: 40,
                }
              : {
                  flexDirection: "column",
                }
          }
        >
          <View>
            <Text style={styles.boxTitle}>Choose Colors</Text>
            <View style={styles.box}>
              {selectItems.colors.map((color) => (
                <ColorBox key={color.id} {...color} />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.boxTitle}>Size</Text>
            <View style={styles.box}>
              {selectItems.sizes.map((size) => (
                <SizeBox key={size.id} {...size} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn}>
          <Ionicons name="cart-outline" size={20} color="black" />
          <Text style={styles.btnText}>ADD TO CART</Text>
        </Pressable>
        <Pressable style={[styles.btn, {backgroundColor: "black"}]}>
          <Text style={[styles.btnText, {color: "white", paddingVertical: 4}]}>BUY NOW</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    minHeight: "100%",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  firstLineDescriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    fontSize: 16,
  },
  star: {
    fontSize: 15,
    marginHorizontal: 2,
  },
  quantity: {
    fontSize: 15,
    color: "gray",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    color: "#007618",
    fontWeight: "500",
    marginRight: 4,
  },
  discount: {
    color: "gray",
    textDecorationLine: "line-through",
    fontSize: 13,
  },
  description: {
    fontSize: 15,
    opacity: 0.7,
    marginTop: 16,
    lineHeight: 23,
  },
  boxTitle: {
    marginHorizontal: 16,
    fontSize: 16,
  },
  box: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    gap: 12,
    flexWrap: "wrap"
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 17,
    marginBottom: 100
  },
  btn: {
    width: width / 2.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderWidth: 0.7,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 7,
    backgroundColor: "white"
  },
  btnText: {
    fontWeight: "700",
  },
  bottomSheetContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "gray"
  },
  bottomSheetViewContainer: {
    flex: 1,
    alignItems: "center"
  },
});
