import React from "react";
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";

const Container = styled.View`
  background-color: burlywood;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const StyledText = styled.Text`
  font-weight: normal;
  color: black;
  font-size: 15px;
`;

const Button =({title,onPress})=>{
  return(
    <TouchableOpacity onPress={onPress}>
      <Container>
        <StyledText>{title}</StyledText>
      </Container>
    </TouchableOpacity>
  );
}

export default Button;
