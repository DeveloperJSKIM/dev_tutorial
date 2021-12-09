import React from "react";
import styled from "styled-components/native";
import Button from "../components/Button";

const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;

`;

const StyledText = styled.Text`
    font-size: 20px;
    margin: 10px;
`;

const Home =({navigation})=>{
    return(
        <Container>
            <Button title={'List'} onPress={()=>navigation.navigate('List')}/>
        </Container>
    );
}

export default Home;