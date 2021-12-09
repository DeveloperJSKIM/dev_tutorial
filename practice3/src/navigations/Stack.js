import React from "react";
import { createStackNavigator } from "@react-navigation/stack";//스택네비게이터생성
import {Home,List, Chat} from '../screens';//스크린들 불러옴
import { AntDesign } from '@expo/vector-icons'; 

const Stack = createStackNavigator();//스택네비게이터 생성
const StackNav = () =>{//스택네비게이터 구성
    return(
        <Stack.Navigator 
        initialRouteName="Home" //홈화면이름
        screenOptions={{ 
            cardStyle:{backgroundColor:'khaki'},//전체 배경색상
            headerStyle:{backgroundColor:'brown',//헤더 배경색상
                        borderBottomWidth:5, //헤더 아래 굵기
                        borderBottomColor:'black', //헤더 아래 색상
                    },
            headerTitleStyle:{
                        fontSize:30, //타이틀 글자 사이즈
                        //color: 'yellow', //타이틀 글자 색상           
            },
            headerTitleAlign:'center', //헤더 중앙정렬(아이폰은 기본이중앙, 안드로이드는 왼쪽정렬)
            headerTitle: ({style,tintColor}) =>{
                return <AntDesign name="smileo" style={style} color={tintColor}/>;//expo vector icons 에서 가져온 아이콘 함수형태로 가져와서 타이틀에 띄워줌
            },
            headerBackTitle: '뒤로',//뒤로가기 버튼 타이틀 텍스트 변경하기
            headerBackTitleVisible:'true',//헤더 뒤로가기 버튼 글자 보이게 하기
            headerBackTitleStyle:{fontSize: 25},//뒤로가기 폰트사이즈
            headerTintColor:'#ff6600',//뒤로가기 버튼 색상
            }} >
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="Chat" component={Chat} options={{
                headerBackImage: ({tintColor})=>{
                    return <AntDesign name="chrome" 
                                    size={26} 
                                    color={tintColor}
                                    style={{marginRight:5,marginLeft:5}}/>
                },headerTitle: 'Chat Screen!'
            }}/>
        </Stack.Navigator>
    );
};

export default StackNav;