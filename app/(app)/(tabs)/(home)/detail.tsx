//import { useLocalSearchParams } from 'expo-router';
import { useAppSelector } from '@/hooks/useRedux';
import React from 'react';
import { Text, View } from 'react-native';

export default function DetailScreen() {
 // const { id } = useLocalSearchParams();

 //redux
 const selector = useAppSelector(state => state.products.product);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DetailScreen</Text>
      <Text>{selector?.brand}</Text>
      <Text>{selector?.discount}</Text>
      <Text>{selector?.id}</Text>
      <Text>{selector?.price}</Text>
      <Text>{selector?.title}</Text>
      <Text>{selector?.quantity}</Text>
      <Text>{selector?.id}</Text>
    </View>
  )
}