import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { Auth } from "../screens";

const Stack = createStackNavigator();

const StackNav=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Auth'} component={Auth}/>
    </Stack.Navigator>
  );
};

export default StackNav;
