import React,{useState,useEffect} from "react";
import styled from "styled-components/native";
import { PlusButton,ListComponents,SettingButton,SoundPlayer } from "../components";
import {ScrollView,Linking,Alert} from "react-native";
import testSound2 from '../Files/testSound2.mp3'
import testSound1 from '../Files/testSound1.mp3'
import testSound3 from '../Files/testSound3.mp3'
import theme from "../theme";
import logo from '../Files/logo.png'

const Container = styled.View`
  flex: 1;
  background-color: ${theme.mainBackgroundColor}
`;
const ListContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const SetButton = styled.View`
  position: absolute;
  bottom:10%;
  right: 0;
`;
const BarContainer = styled.View`
  background-color: ${theme.mainColor};
  flex-direction: row;
  height: 7%;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
const BarContainerBottom = styled.View`
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  background-color: lightgrey;
`;
const TitleText = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  margin-right: 22%;
`;
const Logo = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const Main =({navigation})=>{
  const [item,setItem] =useState([
    {
      id:414,
      title: '파일명',
      context: '번역된 내용',
      path: testSound1 ,
    },
    {
      id:11424,
      title: '1241251251.mp3',
      context: '적당히 해양 언어들을 번역합니다.',
      path: testSound2,
    },
    {
      id:2422,
      title: '20220106_1212.wav',
      context: 'Very High Frequency. 영어 단어를 직역하면 초고주파이다.\n' +
        '\n' +
        '초단파[1]라고도 하며, 주파수 30~300 MHz(항공용은 108~118 MHz[2][3]), 파장 10~1m에 걸친 대역의 전자기파. 이보다 높은 대역의 전파는 UHF라 한다.\n' +
        '\n' +
        '대략 30 MHz 즈음에 전파가 전리층을 뚫고 우주로 나가기 시작하므로 전리층에 반사되지 않으며, 직진성이 강한 편이라 건물이나 산을 잘 회절하지 못한다. 다만 UHF에 비해서는 직진성은 약한 편이라 약간 회절하는 경우가 있으며, 송출 가능 지역이 송신소로부터의 가시범위보다 조금은 넓다.\n' +
        '\n' +
        'UHF에 비해 대역폭이 좁아 데이터 통신에는 불리하지만, 파장이 긴 만큼 더 멀리 보낼 수 있는 장점이 있다. 무선호출기(삐삐) 기지국이 휴대폰 기지국보다 적은 이유도 이 때문이다.\n' +
        '\n' +
        '스포라딕 E층이라는 특이한 전리층이 여름에 가끔 발생하는데, 이 때 이 대역이 전파에 반사되어 먼 외국까지 도달하는 경우가 있다. 이 경우 일본이나 중국 쪽 TV, FM 방송을 잠시동안 수신할 수 있게 된다.\n' +
        '\n' +
        '날씨의 영향을 타는 탓에 특히 대기가 기온역전되는 등 특이 날씨 하에서는 \'라디오덕트\' 현상이 발생한다. 이 경우 역전대기층을 타고 전파가 평소보다 먼 곳에 퍼질 수 있어 혼신을 일으키기도 한다. 이 때문에 안개가 잦은 영국에서는 이 문제로 골머리를 앓아서 TV는 PAL-I때부터 UHF만 배당한다.\n' +
        '\n' +
        'FM 라디오 방송, DMB 방송, 아마추어 무선, 군용/경찰/소방 무선, VTS, 무선호출기(삐삐), 지상파 아날로그 TV 방송[4], 지상파 디지털 TV 방송 등지에 쓰인다. 대한민국에서는 2012년 12월 31일에 지상파 아날로그 TV 방송이 종료되었으며, 다른 해외 국가들에서도 대부분 종료되었으나 아직도 많은 국가에서 사용 중이다. 당장 옆나라 중국만 해도 아직 사용 중. 또한 대부분의 지상파 디지털 TV 방송은 UHF 대역을 사용하나 일부 국가에서 VHF 대역도 함께 사용한다. 예를 들어 미국.\n' +
        '\n' +
        '크게 상관없을지도 모르지만 군사특기 중 통신병과의 중계/반송기 운용병(171113/구1732)을 자대가면 \'VHF병\'이라고 부르는 경우가 있었다. 올바른 호칭은 아니지만 관습적으로 그렇게 불린다. 장비도 물론 VHF라고 불리지만 실제 중계반송장비의 주파수 대역은 대부분이 UHF[5](...). 전방에 보급된 신형장비를 TMR(전술기동통신), 구형장비를 VHF라고 구분해 부르기도 한다. 구형장비를 다루는 부대로 예비군훈련을 가면 \'VHF 다뤄보신 분 있습니까?\'하고 묻기도 했다.',
        path: testSound3,
    },
  ]);
  const [playNow,setPlayNow]=useState('');
  const [playNowTitle,setPlayNowTitle]=useState('noChecked');

  //DEEPLINKING
  useEffect(() => {
    Linking.getInitialURL()			// 최초 실행 시에 Universal link 또는 URL scheme요청이 있었을 때 여기서 찾을 수 있음
      .then(value => {
        Alert.alert('getInitialURL', value);
      })

    Linking.addEventListener('url', (e) => {		// 앱이 실행되어있는 상태에서 요청이 왔을 때 처리하는 이벤트 등록
      const route = e.url.replace(/.*?:\/\//g, '');
      Alert.alert('add e.url', e.url);
    });

    return () => {
      Linking.removeEventListener('url', (e) => {		// 이벤트 해제
        Alert.alert('remove e.url', e.url);
      });
    };
  },[]);

  const onCreateItem =(title,path)=>{
    const date = new Date();
    const newID = parseInt(date.getTime());
    console.log('ID는'+newID);
    setItem(item.concat({id:newID,title:title,context:'번역한 내용이 여기 나옵니다.',path:path}))
  }
  const onChangeMusic =(path,title)=>{
    setPlayNow(path);
    setPlayNowTitle(title);
    console.log('onChangeMusic: '+playNow+'----'+playNowTitle);
  }
  const onDeleteList = id =>{
    setItem(item.filter(item => item.id !== id));
  }


  return(
    <Container>
      <BarContainer><Logo source={logo}/><TitleText>미래해양정보기술</TitleText><SettingButton onPress={()=>navigation.navigate('Setting')}/></BarContainer>
      <ScrollView>
      <ListContainer>
        {Object.values(item).map(key=>(
          <ListComponents
            key={key.id}
            title={key.title}
            bodytext={key.context}
            isPlayed={key.isPlayed}
            path={key.path}
            id={key.id}
            onPress2={onDeleteList}
            onChangeMusic={onChangeMusic}
          />
        ))}
      </ListContainer>
      </ScrollView>
        <SetButton>
          <PlusButton onCreateItem={onCreateItem}/>
        </SetButton>
      <BarContainerBottom>
        <SoundPlayer path={playNow} title={playNowTitle}/>
      </BarContainerBottom>
    </Container>
  );
}

export default Main;
