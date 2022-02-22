import React from "react";
import styled from "styled-components/native";
import { Text,View,TouchableOpacity } from "react-native";

const Container=styled.View`
background-color: gray;
padding: 10px;
margin:  10px;
`;
const Title=styled.Text`
font-size: 24px;
color: greenyellow;
`;

const Button =({title,onPress}) =>{
    return(
        <TouchableOpacity onPress={onPress}>
            <Container>
                <Title>{title}</Title>
            </Container>
        </TouchableOpacity>
    );

}

export default Button;