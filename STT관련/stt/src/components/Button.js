import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const Container = styled.View`
  background-color: burlywood;
  border-radius: 20px;
  border: 1px solid #111111;
`;

const TitleText = styled.Text`
  color: black;
  font-size: 20px;
  padding: 10px;
`;

const Button=({title,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <Container>
                <TitleText>{title}</TitleText>
            </Container>
        </TouchableOpacity>
    );
};

export default Button;