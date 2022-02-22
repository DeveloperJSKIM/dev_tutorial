import React,{useState} from "react";
import styled from "styled-components/native";
import {ListComponent,StyledButton} from "./components";
import {Stt,awsS3} from "./modules";
import {ScrollView} from "react-native";
//Style sheet
const MainContainer = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: beige;
`;

//style 작성 끝

const Screen=()=>{
  const keyId= Date.now().toString();
  const [data,setData]=useState([{
    id: '날짜',
    data: '내용'
  }]);
  const getData = ({ txt }) =>{
    const key = keyId;
    setData(data.concat({id: key,data: txt}));
    console.log(data);
  }
  return(
    <MainContainer>
      <ScrollView style={{flex:1}}>
      {Object.values(data).map(item=>(
        <ListComponent key={item.id} title={item.id} contents={item.data} onPress={()=>awsS3(item.id,toString(item.data))}/>
      ))}
      </ScrollView>
      <Stt getData={getData}/>
    </MainContainer>
  );
};

export default Screen;
