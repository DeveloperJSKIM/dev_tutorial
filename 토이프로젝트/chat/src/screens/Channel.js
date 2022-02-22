import React,{useState,useEffect,useLayoutEffect} from "react";
import styled from "styled-components/native";
import {Button} from '../components';
import {Input} from "../components";
import {createMessage,getCurrentUser,DB} from "../firebase";
import {GiftedChat,Send} from "react-native-gifted-chat";
import {Alert} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const Container=styled.View`
  flex: 1;
  background-color: ${({theme})=>theme.background};
  
`;
const StyledText = styled.Text`
  font-size: 30px;
`;
const SendIcon = styled(Ionicons).attrs(({theme,text})=>({
    name:'send',
    size: 24,
    color: text ? theme.sendBtnActive : theme.sendBtnInactive,
}))``;

const SendButton = props =>{
    return (
        <Send {...props}
        containerStyle={{width:44,height:44
        ,alignItems:'center'
        ,justifyContent:'center'
        ,marginHorizontal:4,}}
              disabled={!props.text}
        >
        <SendIcon text={props.text}/>
        </Send>
    );
};

const Channel = ({navigation,route}) =>{
    const [messages,setMessages]=useState([]);
    const {uid,name,photo} = getCurrentUser();

    useLayoutEffect(()=>{//헤더 타이틀을 채널 타이틀로 변경
        navigation.setOptions({
            headerTitle:route.params.title||'Channel'
        });
    },[]);

    useEffect(()=>{
        const unsubscribe = DB.collection('channels').doc(route.params.id)
            .collection('messages').orderBy('createdAt','desc')
            .onSnapshot(snapshot =>
            {
                const list = [];
                snapshot.forEach(doc=>{
                    list.push(doc.data());
                });
                setMessages(list);
            });
        return ()=>unsubscribe();
    },[])

    const _handleMessageSend = async messageList =>{
        const message = messageList[0];
        try {
            await createMessage({channelId:route.params.id,message});

        } catch (e) {
            Alert.alert('MessageError',e.message);
        }
    }
    return(
        <Container>
            <GiftedChat
                placeholder={'chat'}
                messages={messages}
                user={{_id:uid,name,avatar:photo}}
                onSend={_handleMessageSend}
                scrollToBottom={true}
                alwaysShowSend={true}
                multiline={false}
                renderSend={(props)=><SendButton {...props}/>}
            />

        </Container>
    );
};

export default Channel;