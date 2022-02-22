import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Sound from "react-native-sound";
import {TouchableOpacity} from "react-native";
import testMP3 from '../Files/testSound1.mp3';


const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const InnerContainer = styled.View`

  flex:1;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;
const InnerContainer2 = styled.View`

  flex:0.3;
  margin-right: 30px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;
const StyledText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #585753;
  margin-right: 10px;
`;


const SoundPlayer=({path,title})=>{
  let music = new Sound(path===undefined?testMP3:path, null, (error)=>{
    if(error) {console.log('play failed',error)}
  });



  return(
    <Container>
      <InnerContainer>
      <StyledText>{title}</StyledText>
      </InnerContainer>

      <InnerContainer2>
      <TouchableOpacity onPress={()=>{
        {
          music.play();
          console.log('play...');
        }}}>
      <Icon
            name={'play'}
            size={40}
            style={{marginRight:10,marginLeft:10}}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        {
          music.stop();
          music.reset();
          console.log('stop and reset...');
        }}}>
      <Icon
            name={'pause'}
            size={40}
            style={{marginRight:10,marginLeft:10}}
      />
      </TouchableOpacity>
      </InnerContainer2>
    </Container>
  )
}

export default SoundPlayer;
