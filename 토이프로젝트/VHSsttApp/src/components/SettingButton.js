import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import {TouchableOpacity} from "react-native";

const Container = styled.View`
  margin-right: 10px;
  margin-top: 3px;
`;

const SettingButton=({ onPress })=>{
  return(
    <TouchableOpacity onPress={onPress}>
      <Container>
      <Icon name={'setting'} size={30} color={"#FFFFFF"}/>
      </Container>
    </TouchableOpacity>
  );
}

export default SettingButton;
