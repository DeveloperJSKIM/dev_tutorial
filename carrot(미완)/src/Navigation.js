import React from "react";
import {View,Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Chat,Home,Profile} from './screens';

const Navigation=()=>{
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={Home}/>
      <Tab.Screen name={'Chat'} component={Chat}/>
      <Tab.Screen name={'Profile'} component={Profile}/>
    </Tab.Navigator>
  );
}
export default Navigation;
