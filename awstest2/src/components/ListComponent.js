import React from "react";
import styled from "styled-components/native";
import StyledButton from "./StyledButton";
const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: darkseagreen;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-right: 20px;
`;

const ListComponent=({title,contents,onPress})=>{
  return(
    <Container>
      <StyledText>{title}</StyledText>
      <StyledText>{contents}</StyledText>
      <StyledButton
        title={"Send"}
        onPress={onPress}
      />
    </Container>
  );
}

export default ListComponent;
