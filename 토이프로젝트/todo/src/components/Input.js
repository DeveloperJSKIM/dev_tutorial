import React from "react";
import styled from "styled-components/native";
import { Dimensions,useWindowDimensions } from "react-native";
import PropTypes from 'prop-types';


const StyledInput=styled.TextInput.attrs(({theme})=>({
    placeholderTextColor:theme.main,
    }))`
    width: ${({width})=>width-40}px; 
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 25px;

    background-color: ${({theme})=>theme.itemBackground};
    color: ${({theme})=>theme.text};


`;
const Input = ({placeholder,value,onChangeText,onSubmitEditing,onBlur}) =>{ //App.js에서 보내줌
    const width = useWindowDimensions().width; //가로길이 구하기(화면크기에 따른 유동성)

    return(
        <StyledInput 
        width={width} //위에 변수width 넣어주면 -40px한 값 반환
        placeholder = {placeholder} maxLength = {50} //최대 글자수 제한
        value={value} //텍스트 입력중 보여줄 값 newTask
        onChangeText={onChangeText} //text=>setNewTask(text)
        onSubmitEditing={onSubmitEditing}//addtask함수호출
        onBlur={onBlur}//잃으면 setNewTasd('') 호출
    />);
}

Input.propTypes={
    placeholder: PropTypes.string,
    value:PropTypes.string.isRequired,
    onChangeText:PropTypes.func.isRequired,
    onSubmitEditing:PropTypes.func.isRequired,
    onBlur:PropTypes.func,
}

export default Input;