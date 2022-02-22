import React from "react";
import styled from "styled-components/native";
const Container = styled.View`
  flex-direction: column;
  width: 50%;
  margin: 10px 0;
`;
const StyledInput = styled.TextInput`
  border: 1px solid #000000;
`;
const Input2 = ({placeholder,value,onChangeText,keyboardType,onSubmitEditing}) =>{

  return(
    <Container>
      <StyledInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
}
export default Input2;
