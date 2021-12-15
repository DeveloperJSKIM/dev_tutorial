import React,{useContext,useEffect} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ChannelList,Profile} from '../screens';
import { Ionicons } from '@expo/vector-icons';
import {ThemeContext} from "styled-components/native";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";

const TabIcon =({name,focused})=>{
    const theme = useContext(ThemeContext);
    return(
        <Ionicons name={name} size={26}
                  color={focused? theme.tabBtnActive:theme.tabBtnInactive}/>
    );
}
const Tab = createBottomTabNavigator();

const Home = ({navigation, route}) =>{
    useEffect(()=>{
        const screenName=getFocusedRouteNameFromRoute(route)||'List';//현재선택된 스크린 이름 가져오는 함수.
        navigation.setOptions({//탭옮길때마다 헤더이름을 스크린 이름으로 변경. Main에있는 stack네비게이션 가르키고있다.
            headerTitle: screenName,
            headerRight: ()=>screenName === 'List' && (
                <Ionicons name={'add-circle-outline'} size={26} style={{marginRight: 20, marginTop:10}}
                          onPress={() => navigation.navigate('ChannelCreation')}/>
            ),
        });
        console.log(getFocusedRouteNameFromRoute(route));
    });
  return(
      <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen
              name={"List"}
              component={ChannelList}
              options={{
                  tabBarIcon:({focused})=>(TabIcon({name:focused? 'chatbox':'chatbox-outline',
                  focused,})),
              }}
          />
          <Tab.Screen
              name={"Profile"}
              component={Profile}
              options={{tabBarIcon:({focused})=>TabIcon({name:focused? 'people-circle':"people-circle-outline",
                      focused,}),}}
          />

      </Tab.Navigator>
  );
};

export default Home;