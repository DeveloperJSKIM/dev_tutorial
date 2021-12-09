import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const StyledButton = styled.View`
    background-color: white;
    padding: 10px;
    margin: 10px;

`;

const StyledButtonText = styled.Text`
    color: black;
    font-size: 24px;
`;

const Button=({title,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <StyledButton>
                <StyledButtonText>{title}</StyledButtonText>
            </StyledButton>
        </TouchableOpacity>
    );
};

export default Button;