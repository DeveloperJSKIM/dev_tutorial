import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import Button from './components/Button';
import Voice from 'react-native-voice';

const Container = styled.View`
  flex: 1;
  background-color: beige;
  align-items: center;
  justify-content: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  color: black;
`;
const App = ()=>{
    const [isRecord,setIsRecord]=useState(false);
    const [text,setText]=useState('');
    const [say,setSay]=useState('아무말도');
    const buttonLabel=isRecord? '멈춤':'시작';
    const voiceLabel = text
    ?text
        :isRecord
    ?'무언가 말하세요'
        :'버튼을 누르세요';

    const _onSpeechStart=()=>{
        console.log('onSpeechStart');
        setText('');
    };
    const _onSpeechEnd = ()=>{
        console.log('onSpeechEnd');
    };
    const _onSpeechResults = (event) =>{
        console.log('onSpeechResults');
    };
    const _onSpeechError = (event) => {
        console.log('_onSpeechError');
        console.log(event.error);
    };
    const _getSpeech = (event)=>{
        setSay('무언가말')
    }

    const _onRecordVoice = () => {
        if (isRecord) {
            Voice.stop();
        } else {
            Voice.start('ko-KR');
        }
        setIsRecord(!isRecord);
    };
    useEffect(() => {
        Voice.onSpeechStart = _onSpeechStart;
        Voice.onSpeechEnd = _onSpeechEnd;
        Voice.onSpeechResults = _onSpeechResults;
        Voice.onSpeechError = _onSpeechError;
        Voice.onSpeechRecognized = _getSpeech;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);
    return(
        <Container>
            <StyledText>{voiceLabel}</StyledText>
            <Button title={buttonLabel} onPress={_onRecordVoice}/>
            <StyledText>{say}</StyledText>
        </Container>
    );
};

export default App;
