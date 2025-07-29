import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export type titleProps = {  title: string; action: string };

export default function Title({title, action}: titleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{title}</Text>
      <Pressable>
        <Text style={styles.action}>{action}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 16,
    fontWeight: '500',
  },
  action: {
    color: 'grey',
    fontWeight: '500',
  }
});

// const Title: React.FC<titleProps> = ({title, action}: titleProps) => {
//      <View style={styles.container}>
//       <Text style={styles.category}>{title}</Text>
//       <Pressable>
//         <Text style={styles.action}>{action}</Text>
//       </Pressable>
//     </View>
// }

// const Title: React.FC<{titlePs: titleProps}> = ({titlePs}) => {
//      <View style={styles.container}>
//       <Text style={styles.category}>{titlePs.title}</Text>
//       <Pressable>
//         <Text style={styles.action}>{titlePs.action}</Text>
//       </Pressable>
//     </View>
// }