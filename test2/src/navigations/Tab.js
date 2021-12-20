import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Diary,News } from "../screens";

const Tab=createBottomTabNavigator();

const TabNav = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen name={'Diary'} component={Diary}/>
      <Tab.Screen name={'News'} component={News}/>
    </Tab.Navigator>
  );
};

export default TabNav;
