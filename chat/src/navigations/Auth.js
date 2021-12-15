import React,{useContext} from "react";
import { ThemeContext } from "styled-components/native";
import {createStackNavigator} from '@react-navigation/stack';
import {Signin,Signup,Profile} from '../screens';
import { AntDesign } from '@expo/vector-icons';


const Stack = createStackNavigator();

const Auth = ()=> {
    const theme = useContext(ThemeContext);
    return(
        <Stack.Navigator screenOptions={{
            cardStyle:{backgroundColor: theme.background},
        }}>
            <Stack.Screen 
            name='Signin' 
            component={Signin}
            options={{headerShown:false}}/>
            <Stack.Screen 
            name='Signup' 
            component={Signup}
            options={{headerTitleAlign:'center', //타이틀 중앙에
                      headerBackTitleVisible:false,
                      headerTintColor:theme.text, //글자색
                      headerLeft:({onPress,tintColor})=>(<AntDesign name="left" //왼쪽버튼모양관련옵션
                                                                    size={24} 
                                                                    color={tintColor} 
                                                                    onPress={onPress}
                                                                    />),}}/>
        </Stack.Navigator>
    );
};

export default Auth;