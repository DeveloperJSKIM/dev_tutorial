import React,{useState,forwardRef} from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

const Label = styled.Text`
  font-size: 15px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({theme,isFocused})=>isFocused? theme.text:theme.inputLabel};
`;

const StyledInput = styled.TextInput.attrs(({theme})=>({
    placeholderTextColor: theme.inputPlaceholder
}))`
  background-color: ${({theme,editable})=>editable? theme.inputBackground:theme.inputDisabled};
  color: ${({theme})=>theme.text};
  padding: 20px 10px;
  font-size: 16px;
  border: 1px solid ${({theme,isFocused})=>isFocused? theme.text:theme.inputBorder};
  border-radius: 5px;
`;
//ref는 함수의 두번째 파라민터로 전달해야함.
//forwordRef 사용해서 Signin페이지의 ref 사용할 수 있게함.
//forwordRef 사용법 걍 함수 다 감싸벌임
const Input = forwardRef(
    ({label,value,onChangeText,onSubmitEditing,onBlur,placeholder,returnKeyType,maxLength,isPassword,disabled},ref)=>{
    const [isFocus,setIsFocus]=useState(false);
    return(
        <Container>
            <Label isFocused={isFocus}>{label}</Label>
            <StyledInput
                ref={ref}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                onBlur={()=>{setIsFocus(false);
                            onBlur();}}
                placeholder={placeholder}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
                autoCapitalize={'none'}
                autoCorrect={false}
                textContentType={"none"}
                isFocused={isFocus}
                onFocus={()=>setIsFocus(true)}
                secureTextEntry={isPassword}
                editable={!disabled}
            />
        </Container>
    );
    });
Input.defaultProps={
    onBlur: ()=>{},
};
Input.propType={
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.string,
    onSubmitEditing:PropTypes.func,
    onBlur:PropTypes.func,
    placeholder:PropTypes.string,
    returnKeyType:PropTypes.oneOf(['done','next']),
    maxLength:PropTypes.number,
    isPassword:PropTypes.bool,
    disabled:PropTypes.bool,
};

export default Input;