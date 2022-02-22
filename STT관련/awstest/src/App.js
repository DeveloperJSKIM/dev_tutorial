import React,{useState,useEffect} from "react";
import { Text,ScrollView} from "react-native";
import RNFS from 'react-native-fs';
import { StyledButton,Contents } from './components/';
import styled from "styled-components/native";
import Voice from 'react-native-voice';

//스타일 작성.
const Container = styled.View`
  flex:1;
  background-color: beige;
  align-items: center;
  justify-content: center;
`;
const Container2 = styled.View`
  flex:0.2;
  flex-direction: row;
  background-color: lightgrey;
  align-items: stretch;
  justify-content:center;
`;
const Container3 = styled.View`
  flex:0.1;
  background-color: cadetblue;
  align-items: center;
  justify-content: center;
`;

const StyledText =styled.Text`
    font-size: 20px;
`;

//스타일 끝


const App=() =>{
    const [voiceList,setVoiceList] = useState([{
        id:'',
        contents:''
    }]);
    const [files,setFiles] = useState('');
    const [fileName,setFileName] = useState('empty');
//voice 관련
    const [isRecord,setIsRecord] = useState(false);
    const [text,setText]=useState('');
    const buttonLabel = isRecord? 'Stop':'Start';
    const voiceLabel = text ? text : isRecord ? '말하세요' : '버튼을 누르세요';

    const path = RNFS.DocumentDirectoryPath + fileName; //fileName으로 txt파일 생성
    const makeFile=()=>{//파일 생성
        RNFS.writeFile(path,'Test입니다 하하하','utf8')
            .then((success)=>{
                console.log('file writtttten!!');
            })
            .catch((err)=>{
                console.log('ERRoRRR');
            });
    }
    const readFile =()=>{//파일 읽기
        RNFS.readFile(path,'ascii')
            .then((res)=>{
                console.log(path)
            })
            .catch(e=>{
                console.log(e.message);
            });
    }
    RNFS.readDir(RNFS.DocumentDirectoryPath) //디렉터리 읽기.
        .then(files => {
            const length = files.length-1;
            // console.log(files);
            setFiles(files[length].name);
    })
        .catch(err => {
            console.log("err.message, err.code");
        });
    const onSetFileName =()=>{ //오늘날짜시간분초사용해서 txt 이름만듦.
        const today = new Date();
        const year = today.getFullYear();
        const month = ('0'+(today.getMonth()+1)).slice(-2);
        const day = ('0'+(today.getDate())).slice(-2);
        const sec = ('0'+(today.getSeconds())).slice(-2);
        const dateString = year+month+day+sec+'.txt';
        setFileName(dateString);
        console.log(dateString);
    }
    const onCreateList =()=>{
        onSetFileName();
        const list = {
            id:fileName,
            contents: text
        };
        setVoiceList(voiceList.concat(list));
        console.log(voiceList);
    }
    //voice관련
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
            <Container>
                <ScrollView>
                    {Object.values(voiceList).map(item=>(
                        <Contents key={item.id} id={item.id} contents={item.contents}/>
                    ))}
                </ScrollView>
            </Container>
            <Container3>
                <StyledText>{voiceLabel}</StyledText>
            </Container3>
            <Container2>
                <StyledButton
                    title ={fileName}
                    onPress={onSetFileName}
                />
                <StyledButton
                    title ={buttonLabel}
                    onPress={_onRecordVoice}
                />
                <StyledButton
                    title={"Send"}
                    onPress={onCreateList}
                />
            </Container2>
        </>
    );
}

export default App;
