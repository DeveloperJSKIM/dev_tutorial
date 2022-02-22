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
const Input = ({placeholder,value,onChangeNumber,keyboardType,onSubmitEditing}) =>{
const onChange = text => {
  onChangeNumber(parseInt(text, 10));//e.target.value는 react에서만...native에서는 안써도됨.
}
  return(
    <Container>
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      keyboardType={keyboardType}
      onSubmitEditing={onSubmitEditing}
    />
    </Container>
  );
}
export default Input;
