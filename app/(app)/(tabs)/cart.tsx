import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function cart() {
  return (
    <SafeAreaView style={styles.container}>
          <Text>Cart Screen</Text>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    minHeight: height,//fullscreen height
  }
});