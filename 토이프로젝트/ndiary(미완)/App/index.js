import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { RootNavigator } from './routes';
import {View,Text} from "react-native";

const App =()=>{
    return(
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
}
export default App;
