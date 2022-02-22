import React, { useState } from "react";
import styled from "styled-components/native";
import {Btn,Input} from "../components";
import navigations from "../navigations";
const Container = styled.View`
  background-color: beige;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;

const Auth =({navigation})=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const PressSignInBtn = ()=>{
    navigation.navigate("Diary");
  };
  return(
    <Container>
      <Input
        label = {"email"}
        value={email}
        placeholder={'email plz'}
        onChangeText={setEmail}
      />
      <Input
        label = {"password"}
        value={password}
        placeholder={'Pw plz'}
        onChangeText={setPassword}
      />
      <Btn
        title={'Sign in'}
        onPress={()=>navigation.navigate('TabNav')}
      />
    </Container>
  );
};

export default Auth;
