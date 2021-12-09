//탭바 네비게이션, 스크린에 폴더에있는 스크린들과 연결시킴.
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Home,List,Chat} from '../screens';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const TabIcon = ({name,size,color})=>{
    return(
    <AntDesign 
    name= {name}
    size={size} 
    color={color} 
    />);

}
const TabNav = ()=>{
    return(
        <Tab.Navigator 
        initialRouteName="List"
        tabBarOptions={{showLabel:true, labelPosition:'below-icon'
        ,activeTintColor:'red'
        ,inactiveTintColor:'green'}} >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: props=>{
                    return TabIcon({...props,name:'home',})
                },
                tabBarLabel:'HOME',
            }}/>
            <Tab.Screen name="List" component={List} options={{
                tabBarIcon: props=>{
                    return TabIcon({...props,name:'bars',})
                },
                tabBarLabel:'LIST',

            }}/>
            <Tab.Screen name="Chat" component={Chat} options={{
                tabBarIcon: props=>{
                    return TabIcon({...props,name:'message1',})
                },
                tabBarLabel:'CHAT',

            }}/>
        </Tab.Navigator>
    );
};

export default TabNav;