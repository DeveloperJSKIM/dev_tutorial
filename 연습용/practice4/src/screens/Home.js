import React from "react";
import styled from "styled-components/native";
import Button from '../components/Button';

const Container =styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
`;

const StyledText = styled.Text`
    font-size: 24px;
    font-weight: 800;
    margin: 10px;
`;

const Home =({navigation})=>{
    return(
        <Container>
            <Button title={'Home'}/>
        </Container>
    );

};

export default Home;