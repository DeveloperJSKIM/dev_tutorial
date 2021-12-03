import React from 'react';
import {StyleSheet, Text,View,StatusBar} from 'react-native';


export default function App(){
  return(
      <View style={{flex:1}}>
      <View style={{flex: 1,backgroundColor:'yellow'}}>
        <Text style={styles.appTitle}>GGGGG</Text>
      </View>
        <View style={{flex: 10,backgroundColor:'green'}}>

        </View>
        <View style={{flex: 1,backgroundColor:'yellow'}}>

        </View>
      </View>
  );

};

const styles = StyleSheet.create({
  appTitle:{
    color:'black',
    fontSize: 40,
    marginTop: 0,
    textAlign: 'center',
  },


});
