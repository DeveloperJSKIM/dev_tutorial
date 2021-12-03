import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView,Dimensions } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get("window");
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation]=useState();
  const [ok,setOk]=useState(ture);
  const ask = async()=>{
    const {permission} = await Location.requestForegroundPermissionsAsync();
  };
  useEffect (()=>{
    ask();
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontSize: 58,
    fontWeight: "500",
  },
  weather: {
    flex: 3,
  },
  weather: {},
  day: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});