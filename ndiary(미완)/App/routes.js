import React from "react";

import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();

/*
    stack nav
    -screen A

    stack nav
     -tab nav
       -screen B
       -screen C
 */

const isLoggedIn = false;//로그인 증명하는 토글

const AppTabComponent = () =>{
    return(
        <MainScreenTab.Navigator>
            <MainScreenTab.Screen name={'Diary'} component={Diary}/>
            <MainScreenTab.Screen name={'News'} component={News}/>
        </MainScreenTab.Navigator>
    );
}


export const RootNavigator = () =>{
    return (
        <AuthStack.Navigator
            screenOptions={{headerShown:false,}}
        >
            {isLoggedIn ? (
                <AuthStack.Screen name={'Main'} component={AppTabComponent}/>
            ):(
                <>
                    <AuthStack.Screen name={"SignIn"} component={SignIn}/>
                    <AuthStack.Screen name={'AppTabComponent'} component={AppTabComponent}/>
                </>
            )}
        </AuthStack.Navigator>
    );
}


