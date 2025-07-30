import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Cart() {
  return (
    <View style={{ flexDirection: 'row'}}>
      <Ionicons name='cart-outline' size={30} color='black' />
      <View style={styles.container}>
        <Text style={styles.badge}>0</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 20,
        height: 20,  
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: -10,
        marginTop: -5,
    },
    badge: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'white',

    },
});