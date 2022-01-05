import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Voice from 'react-native-voice';
import { StyledButton } from "../components";


const SubContainer2 = styled.View`
  width: 100%;
  flex:0.1;
  background-color: cadetblue;
  align-items: center;
  justify-content: center;
`;
const SubContainer3 = styled.View`
  width: 100%;
  flex:0.2;
  background-color: cornflowerblue;
  align-items: center;
  justify-content: center;
`;
const StyledText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;


const Stt = ({ }) => {
  const [isRecord, setIsRecord] = useState(false);
  const [text, setText] = useState('');
  const buttonLabel = isRecord ? 'Stop' : 'Start';
  const voiceLabel = text
    ? text
    : isRecord
      ? 'Say something...'
      : 'press Start button';

  const _onSpeechStart = () => {
    console.log('onSpeechStart');
    setText('');
  };
  const _onSpeechEnd = () => {
    console.log('onSpeechEnd');
  };
  const _onSpeechResults = (event) => {
    console.log('onSpeechResults');
    setText(event.value[0]);
  };
  const _onSpeechError = (event) => {
    console.log('_onSpeechError');
    console.log(event.error);
  };

  const _onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
      getData(text);
    } else {
      Voice.start('en-US');
    }
    setIsRecord(!isRecord);
  };


  useEffect(() => {
    Voice.onSpeechStart = _onSpeechStart;
    Voice.onSpeechEnd = _onSpeechEnd;
    Voice.onSpeechResults = _onSpeechResults;
    Voice.onSpeechError = _onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  return(
    <>
    <SubContainer2><StyledText>{voiceLabel}</StyledText></SubContainer2>
  <SubContainer3>
    <StyledButton title={buttonLabel} onPress={_onRecordVoice}/>
  </SubContainer3>
    </>
  );
};

export default Stt;
