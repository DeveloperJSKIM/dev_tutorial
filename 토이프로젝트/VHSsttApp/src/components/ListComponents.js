import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome"
import { TouchableOpacity } from "react-native";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import theme from "../theme";

const MainContainer = styled.View`
  width: 90%;
`;
const Container=styled.View`
  flex-direction: row;
  height: 70px;
  background-color: ${theme.mainColor};
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const ContainerIcon=styled.View`
  flex-direction: row;
  flex:0.2;
  align-items: center;
  justify-content: center;
`;
const ContainerText=styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;
const TitleText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
`;
const ContentsText = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: 400;
`;
const BodyContainer=styled.View`
  background-color: ${theme.mainGrey};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ListComponents=({title, onChangeMusic, bodytext, path, onPress2,id})=>{
  return(
    <MainContainer>
    <Collapse>
      <CollapseHeader>
          <Container>
            <ContainerText>
              <TitleText>{title}</TitleText>
            </ContainerText>
            <ContainerIcon>
              <TouchableOpacity onPress={()=>{onChangeMusic(path,title); console.log(path,title)}}>
              <Icon name={'check'} size={30} style={{marginRight:10}} color={"#FFFFFF"}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{onPress2(id)}}>
                <Icon name={'trash-o'} size={30} style={{marginRight:35}} color={"#FFFFFF"}/>
              </TouchableOpacity>
            </ContainerIcon>
          </Container>
      </CollapseHeader>
      <CollapseBody>
        <BodyContainer>
          <ContentsText>{bodytext}</ContentsText>
        </BodyContainer>
      </CollapseBody>
    </Collapse>
    </MainContainer>
  );
}

export default ListComponents;
