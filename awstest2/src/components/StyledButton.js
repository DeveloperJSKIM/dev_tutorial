import React from "react";
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";

const Container = styled.View`
  background-color: khaki;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const StyledText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const StyledButton=({title,onPress})=>{
  return(
    <TouchableOpacity onPress={onPress}>
      <Container>
        <StyledText>{title}</StyledText>
      </Container>
    </TouchableOpacity>
  );
}

export default StyledButton;
