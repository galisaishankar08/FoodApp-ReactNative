import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import items from './fooditems'

export default function App() {
  return (
    <View style={styles.container}>
      { items.map((item, key)=>(
          <Text key={key} style={styles.text}>  { JSON. stringify(item)} </Text>
          ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#eae8e9',
    backgroundColor: '#eae8e9',
    margin: 25,
    padding:20
  },
  text:{
    margin:10,
  }
});
