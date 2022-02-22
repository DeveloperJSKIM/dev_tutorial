import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Button from "./Button";

const Container=styled.View`
  flex-direction: row;
  width: 100%;
  background-color: beige;
`;

const StyledText = styled.Text`
  font-size: 15px;
  margin:2px;
  text-decoration-line: ${({done})=>done ? 'line-through':'none'};
`;

const TodoItem =({item,onPress})=>{
  return(
    <Container>
        <StyledText>{item.id}</StyledText>
        <StyledText done={item.done}>{item.text}</StyledText>
      <TouchableOpacity onPress={()=>onPress(item.id)} style={{backgroundColor:'green',}}>
        <StyledText>toggle</StyledText>
      </TouchableOpacity>
    </Container>
  );
}
export default TodoItem;
