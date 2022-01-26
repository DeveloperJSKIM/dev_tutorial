import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex:1;
  background-color: cadetblue;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
`;

const Home =({navigation})=>{
  return(
    <Container>
      <StyledText>{Home}</StyledText>
    </Container>
  );
}

export default Home;
