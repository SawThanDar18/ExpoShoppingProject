//import { useLocalSearchParams } from 'expo-router';
import { useAppSelector } from "@/hooks/useRedux";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DetailScreen() {
  // const { id } = useLocalSearchParams();

  //redux
  const selector = useAppSelector((state) => state.products.product);

  return(
    <View>
      <Ionicons name="arrow-back" size={20} color='black' />
      <Text style={{marginHorizontal: 8}}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between", 
    alignItems: "center",
  },
});
