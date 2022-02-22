import React from "react";
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";

const StyledBtn = styled.View`
  background-color: burlywood;
  flex:1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;

const StyledText = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const Btn =({title,onPress})=>{
  return(
    <TouchableOpacity onPress={onPress} style={{flexDirection:'row'}}>
      <StyledBtn>
        <StyledText>{title}</StyledText>
      </StyledBtn>
    </TouchableOpacity>
  );
};

export default Btn;
