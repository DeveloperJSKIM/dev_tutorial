import React,{useState,useRef,useEffect,useContext} from "react";
import styled from "styled-components/native";
import {Button,Input,ErrorMessage} from '../components';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ProgressContext} from "../contexts";
import {createChannel} from "../firebase";
import {Alert} from "react-native";

const Container=styled.View`
  flex: 1;
  background-color: ${({theme})=>theme.background};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  
`;


const ChannelCreation = ({navigation}) =>{
    const {spinner} = useContext(ProgressContext);
    const [title,setTitle]=useState('');//제목관리
    const [desc,setDesc]=useState('');//설명관리
    const [errorMessage,setErrorMessage]=useState('');//에러메세지관리
    const [disabled,setDisabled]=useState(true);//버튼활성화여부결정

    const refDesc = useRef(null);

    useEffect(()=>{ //Disabled관리 useEffect
        setDisabled(!(title && !errorMessage));//타이틀 입력있고 에러메세지 없을때
    },[title,errorMessage]);

    const _handleTitleChange = title =>{ //title관리 함수 아무것도 없으면 글쓰라고 나옴.
        setTitle(title);
        setErrorMessage(title.trim()?"":"please enter the title"); //trim=>좌우공백제거
    }
    const _handleDescChange = desc =>{
        setDesc(desc);
        setErrorMessage(title.trim()?"":"please enter the desc");
    }
    const _handleCreateBtnPress=async ()=>{ //submit버튼 누르거나 키보드에서 onSubmitEditing 호출 되었을때
        try{
            spinner.start();
            const id= await createChannel({title:title.trim(),desc:desc.trim()});
            navigation.replace('Channel',{id,title});
        } catch (e){
            Alert.alert('CreateError',e.message);
        } finally {
            spinner.stop();
        }
    };

    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex:1}}
            extraScrollHeight={20}
        >
        <Container>
            <Input
                label={"Title"}
                value={title}
                onChangeText={_handleTitleChange}
                onSubmitEditing={()=>refDesc.current.focus()}
                onBlur={()=>setTitle(title.trim())}
                placeholder={'Title'}
                returnKeyType={"next"}
                maxLength={20}
            />
            <Input
                ref={refDesc}
                label={"Description"}
                value={desc.trim()}
                onChangeText={_handleDescChange}
                onSubmitEditing={_handleCreateBtnPress}
                onBlur={()=>setDesc(desc.trim())}
                placeholder={'Description'}
                returnKeyType={'done'}
                maxLength={40}
            />
            <ErrorMessage message={errorMessage}/>
            <Button
                title={"Create"}
                onPress={_handleCreateBtnPress}
                disabled={disabled}
            />
        </Container>
        </KeyboardAwareScrollView>
    );
};

export default ChannelCreation;