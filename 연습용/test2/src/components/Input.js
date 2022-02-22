import React from "react";
import styled from "styled-components/native";


const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

const StyledInput = styled.TextInput`
  background-color: lightgrey;
  color: black;
  padding: 20px 10px;
  margin: 10px;
  font-size: 16px;
  border: 1px solid;
  border-radius: 5px;
`;

const Input = ({label,value,onChangeText,onSubmitEditing,placeholder})=>{
  return(
    <Container>
      <StyledInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
