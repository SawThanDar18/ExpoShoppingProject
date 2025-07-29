import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cart from "@/components/shop/Cart";
import Category from "@/components/shop/Category";
import Product from "@/components/shop/Product";
import Title from "@/components/shop/Title";
import { categories, products } from "@/data";

const { width, height } = Dimensions.get("window");

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("Men");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const onSelectCategory = (name: string) => {
    setSelectedCategory(name);
  };

  const [data, setData] = useState(products);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ffffff",
        minHeight: height,
      }}
    >
      <View style={styles.container}>
        <Pressable>
          <Image
            source={require("@assets/images/shop/n.png")}
            style={styles.image}
            contentFit="cover"
            transition={1000}
            placeholder={blurhash}
          />
        </Pressable>
        <Pressable>
          <Cart />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
        source={require("@assets/images/shop/banner6.png")}
        style={styles.banner}
        contentFit="cover"
        transition={1000}
        placeholder={blurhash}
      />
      <Text>{""}</Text>
      <View style={{ marginTop: 30 }}>
        <Title title="Shop By Category" action="See All" />
      </View>
      <View style={{ marginTop: 16, marginLeft: 16 }}>
        <FlatList
          extraData={selectedCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <Category
              {...item}
              onSelect={onSelectCategory}
              select={selectedCategory}
            />
          )}
        />
      </View>
      <Text>{""}</Text>
      <View style={{ marginTop: 30 }}>
        <Title title="Recommended for You" action="See All" />
      </View>
      <View style={{ marginTop: 16, marginLeft: 16 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data[selectedCategory as keyof typeof products]}
          renderItem={({ item }) => <Product {...item} />}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 25,
    marginLeft: 16,
  },
  banner: {
    marginTop: 16,
    width: "100%",
    aspectRatio: 20 / 9,
  },
});
