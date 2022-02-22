import React,{useLayoutEffect} from "react";
import styled from "styled-components/native";
import Button from "../components/Button";
import { AntDesign } from '@expo/vector-icons'; 


const Container = styled.View`
    align-items: center;
    flex: 1;
`;

const StyledText = styled.Text`
    font-size: 20px;
    margin: 10px;
`;

const Chat =({navigation,route})=>{
    useLayoutEffect(()=>{//랜더링 되기전에 화면 변경가능
        navigation.setOptions({//네비게이션옵션 변경
            headerLeft:({onPress,tintColor})=>{//왼쪽 버튼
                return(
                    <AntDesign
                    name="enter"
                    size={30}
                    style={{marginLeft:11}}
                    color={tintColor}
                    onPress={onPress}
                    />
                );
            },
            headerRight:({tintColor})=>{//오른쪽버튼
                return(
                    <AntDesign
                    name="home"
                    size={30}
                    style={{marginRight:11}}
                    color={tintColor}
                    onPress={()=>navigation.popToTop()}/>//누르면 다지우고 메인페이지로 감
                );
            }
        })
    },[]);
    return(
        <Container>
            <StyledText>Chat</StyledText>
            <StyledText>ID:{route.params.id} Name:{route.params.name}</StyledText>
            <Button title={"Home"} onPress={()=>{navigation.reset({routes:[{name:'Home'}] })}}//리스트로 이동하고 뒤로가기 버튼 없어짐.
            />
        </Container>
    );
};

export default Chat;