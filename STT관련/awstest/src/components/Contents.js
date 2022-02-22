import React from "react";
import styled from "styled-components/native";


const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

const StyledText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const Contents =({id,contents})=>{
    return(
        <Container>
            <StyledText>제목: {id}</StyledText>
            <StyledText>내용: {contents}</StyledText>
        </Container>
    );
}

export default Contents;
