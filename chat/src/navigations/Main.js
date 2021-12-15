import React,{useContext} from "react";
import {ThemeContext} from "styled-components/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Profile,Channel,ChannelCreation,ChannelList} from '../screens';
import Home  from "./Home";
const Stack =  createStackNavigator();

const Main = ()=>{
    const theme = useContext(ThemeContext);
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign:'center',
                headerTintColor:theme.text,
                cardStyle:{backgroundColor:theme.background},
                headerBackTitleVisible:false,
            }}>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"ChannelCreation"} component={ChannelCreation}/>
            <Stack.Screen name={"ChannelList"} component={ChannelList}/>
            <Stack.Screen name={'Channel'} component={Channel}/>
        </Stack.Navigator>
    );
};

export default Main;