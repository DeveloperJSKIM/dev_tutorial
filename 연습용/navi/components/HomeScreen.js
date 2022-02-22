
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,Button,StyleSheet} from 'react-native';
function HomeScreen({ navigation }){
    return (
      <>
      <View style ={styles.setButton}>
        <View style ={styles.flex1}>
          <Button
            
            title="회사소식"
            onPress={() =>navigation.push('Profile')
            }/></View>
        <View style ={styles.flex1}>
          <Button
            title="FAQ"
            onPress={() =>navigation.push('FAQ')
          }/></View>
          <View style ={styles.flex1}>
          <Button
            title="갤러리"
            onPress={() =>navigation.push('Gallery')
          }/></View>
          <View style ={styles.flex1}>
          <Button
            title="Q&A"
            onPress={() =>navigation.push('QA')
          }/></View>
      </View>
      <View style={styles.mainPage}>
          <Text>공지사항 UI만들어서 넣을 예정</Text>
      </View>
      </>
    );
  };
const styles = StyleSheet.create({
    setButton:{
      backgroundColor:"green",
      flexDirection:'row',

    },
    buttonColor:{
      backgroundColor:"red",
      buttonColor:"red",
    },
    flex1:{
      flex:1
    },
    mainPage:{
      flex:1,
      backgroundColor:"grey"
    }
  });
  export default HomeScreen;