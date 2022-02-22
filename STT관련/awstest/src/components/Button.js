import React from "react";
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";

const Container = styled.View`
  padding: 4px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  background-color: darkseagreen;
  border: 1px solid;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const StyledButton = ({title,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <Container>
                <StyledText>{title}</StyledText>
            </Container>
        </TouchableOpacity>
            );
};

export default StyledButton;
