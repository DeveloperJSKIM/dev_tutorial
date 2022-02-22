import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Main,Setting} from './screens';

const Navigation=()=>{
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name={'Main'} component={Main} options={{headerShown: false}}/>
      <Stack.Screen name={'Setting'} component={Setting} options={{title:'옵션',headerTitleAlign:"center"}}/>
    </Stack.Navigator>
  )
}

export default Navigation;
