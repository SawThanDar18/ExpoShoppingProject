import { Image } from "expo-image";
import { useNavigation, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cart from "@/components/shop/Cart";
import Category from "@/components/shop/Category";
import Product from "@/components/shop/Product";
import Title from "@/components/shop/Title";
import { categories } from "@/data";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  fetchProducts,
  selectAllProducts,
} from "@/providers/redux/productSliceForAPI";
import { useScrollToTop } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const  navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("uuid1");

  //const [data, setData] = useState(products);

  const scrollRef = useRef<ScrollView>(null);
  useScrollToTop(scrollRef);

  const onPressToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  const router = useRouter();

  // const goToDetail = (id: number) => {
  //  // router.navigate(`/${id}`);
  //   router.navigate(`/detail`);
  // }

  //redux
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const productsLoading = useAppSelector((state) => state.products.loading);
  // const categories: CategoryType[] = useAppSelector(
  //   (state) => state.requiredInfo.categories
  // );
  const productLists = products.filter(
    (product) => product.categories_id === selectedCategory
  );

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    dispatch(fetchProducts());
  }, [navigation]);

  if (productsLoading) {
    return <Text>Loading....</Text>
  }

  const onSelectCategory = (name: string) => {
    setSelectedCategory(name);
  };

  const saveProductToRedux = (id: string) => {
    //dispatch(setProduct(item));
    //router.navigate(`/detail`);
    router.push({
      pathname: "/detail",
      params: { id }
    });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ffffff",
        minHeight: height,
      }}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <Pressable onPress={() => onPressToTop()}>
          <Image
            source={require("@assets/images/shop/n.png")}
            style={styles.image}
            contentFit="cover"
            transition={1000}
            placeholder={blurhash}
          />
        </Pressable>
        <Pressable onPress={() => router.navigate("/cart")}>
          <Cart />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
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
            data={productLists}
            renderItem={({ item }) => (
              <Product {...item} onCall={() => saveProductToRedux(item.id)} />
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
            data={productLists}
            renderItem={({ item }) => (
              <Product {...item} onCall={() => saveProductToRedux(item.id)} />
            )}
          />
          <View style={{ marginBottom: 100 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    marginRight: 16,
  },
  image: {
    width: 50,
    height: 25,
    marginLeft: 16,
  },
  banner: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
});
