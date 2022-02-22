import React from "react";
import styled from "styled-components/native";
import Button from "../components/Button";


const Container = styled.View`
    align-items: center;
    flex: 1;
    

`;

const StyledText = styled.Text`
    font-size: 20px;
    margin: 10px;
`;
const items=[
    {id:1, name: 'name1'},
    {id:2, name: 'name2'},
    {id:3, name: 'name3'}
];

const List = ({navigation}) =>{
    return(
        <Container>
            <StyledText>List</StyledText>
            {items.map(({id,name})=>
            <Button 
            key={id} 
            title={name}
            onPress={()=>navigation.navigate('Chat',{id,name})}
            />)}
        </Container>
    );
}

export default List;