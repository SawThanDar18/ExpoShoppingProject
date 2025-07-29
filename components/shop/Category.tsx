import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Category({id, name, image, onSelect, select}: { id: number; name: string; image: any; onSelect: (name: string) => void; select: string }) {
  return (
      <Pressable style={styles.container} onPress={() => {
        onSelect(name);
      }}>
      <Image
        source={image}
        style={[styles.image, select === name && styles.selected]}
        contentFit="cover"
        transition={1000}
        placeholder={blurhash}
      />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  selected: {
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 30
  },
  name: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
  },
});