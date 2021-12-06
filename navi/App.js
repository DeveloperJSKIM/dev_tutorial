import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,Button,StyleSheet} from 'react-native';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import FAQScreen from './components/FAQScreen';
import GalleryScreen from './components/GalleryScreen';
import QAScreen from './components/QAScreen';
const Stack = createNativeStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title:'미래해양정보기술'}}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} />
        <Stack.Screen 
          name="FAQ" 
          component={FAQScreen} />
        <Stack.Screen 
          name="Gallery" 
          component={GalleryScreen} />
        <Stack.Screen 
          name="QA" 
          component={QAScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  setButton:{
    flex:1,
    backgroundColor:"red",
    
  },
});

export default App;