//import { useLocalSearchParams } from 'expo-router';
import { useAppSelector } from "@/hooks/useRedux";
import { Stack, useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleSheet,
  View
} from "react-native";

import Cart from "@/components/shop/Cart";
import ViewPager from "@/components/shop/ViewPager";

export default function DetailScreen() {
  // const { id } = useLocalSearchParams();

  const router = useRouter();

  //redux
  const selector = useAppSelector((state) => state.products.product);

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
      <ViewPager />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
