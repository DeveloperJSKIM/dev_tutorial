import React, {useState,useEffect,useRef} from "react";
import styled from "styled-components/native";
import Button from "./Button";
//useRef, useEffect, useState 공부.
const StyledInput=styled.TextInput`
    border:1px solid #111111;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
    font-size: 24px;
`;
const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const Form=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const refName = useRef(null);//useRef forcus관리. 인터넷 창 넘어갈때 사용. current.focus();
    const refEmail = useRef(null);
    useEffect(()=>{
        console.log('-----------------mount----------------------');//마운트될때
        refName.current.focus();//바로 refName에 포커스
        return ()=> console.log('---------------------unMount------------------');//언마운트될때 콘솔로그
        },[]);
    const onSubmit = () =>{
        console.log('Submit!!!');//refEmail 포커스 된 상태에서 확인 누르면 뜨는 콘솔로그
    }; 
    return(<>
        <StyledText>name:{name}</StyledText>
        <StyledText>email:{email}</StyledText>
        <StyledInput
            vlaue={name} 
            onChangeText={name=>{setName(name)}} 
            placeholder="NAME"
            ref={refName} //ref연결
            returnKeyType="next" //아직 왜쓰는지 모르겟음. 그냥 키설정 인듯.
            onSubmitEditing={()=>refEmail.current.focus()}//확인누르면 다음 포커스 지정해줌.
        />
        <StyledInput
            vlaue={email} 
            onChangeText={setEmail} 
            placeholder="Email"
            ref={refEmail}//ref연결
            returnKeyType="done"
            onSubmitEditing={onSubmit}//확인누르면 onSubmit함수 호출 로그에 submit!!!뜸.
        />

        </>);

}

export default Form;