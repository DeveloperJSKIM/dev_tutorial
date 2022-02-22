import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,Button,Image,StyleSheet} from 'react-native';
import cat from '../image/cat.png';
function GalleryScreen ({ navigation }) {
    return (
      <>
      <View style={styles.flexView}>
        <Image style={styles.image} source={cat}/>
        <Image style={styles.image} source={cat}/>
        <Image style={styles.image} source={cat}/>
      </View>
      <View style={styles.flexView}>
        <Image style={styles.image} source={cat}/>
        <Image style={styles.image} source={cat}/>
        <Image style={styles.image} source={cat}/>
      </View>
      <View style={styles.flexView}>
        <Image style={styles.image} source={cat}/>
        <Image style={styles.image} source={cat}/>
        <Image style={styles.image} source={cat}/>
      </View>
      </>
    );
    
  };
  const styles = StyleSheet.create({
    container:{
      flexDirection:'column',
    },
    flexView:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'red',
    },
    image:{
      flex:1,
      resizeMode:'cover',
      margin:0,
      
    },
  });
  
export default GalleryScreen;