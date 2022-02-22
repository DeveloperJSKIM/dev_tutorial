//버튼 컴포넌트

import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const StyledButton = styled.View`
    background-color: beige;
    margin: 10px;
    padding: 10px;
`;

const StyledButtonText = styled.Text`
    color: black;
    font-size: 24px;
    font-weight: 700;
`;


const Button =({title,onPress})=>{
  return(
      <TouchableOpacity onPress={onPress}>
          <StyledButton>
              <StyledButtonText>{title}</StyledButtonText>
          </StyledButton>
      </TouchableOpacity>
  );  
};

export default Button;