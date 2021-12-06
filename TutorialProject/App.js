import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './screen/Profile';
import Feed from './Screen/Feed';


export default function App() {
  return (
    <View style={styles.outer}>
      <Text>Cibal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,

  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});