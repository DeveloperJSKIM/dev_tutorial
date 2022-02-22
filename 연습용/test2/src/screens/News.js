import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: beige;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;

const News =({navigation})=>{
  return(
    <Container>
      <StyledText>News Screen</StyledText>
    </Container>
  );
};

export default News;
