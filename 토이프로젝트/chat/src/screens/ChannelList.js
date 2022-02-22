import React,{useState,useEffect} from "react";
import styled from "styled-components/native";
import {Button} from '../components';
import {Ionicons} from "@expo/vector-icons";
import {FlatList} from "react-native";
import {DB} from "../firebase";
import moment from "moment";//시간계산관련 라이브러리
//const channels=[];
//flet list 테스트
// for(let i =0; i<100; i++){
//     channels.push({
//         id:i, title: `title:${i}번째타이틀`,description:`desc:${i}`,createdAt:i,
//     });
// };

const getDateOrTime = ts => {
    const now = moment().startOf('day');//오늘날짜
    const target = moment().startOf('day');//받아온날짜
    return moment(ts).format(now.diff(target,'day') > 0 ? 'MM/DD':'HH:mm');
    //오늘날짜와 받아온날짜 다르면 월/일 나오고 같으면 시/분 나옴.
};

const ItemContainer=styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({theme})=>theme.itemBorder};
  padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme})=>theme.text};

`;
const ItemDesc = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: ${({theme})=>theme.itemDesc};
`;

const ItemTime = styled.Text`
  font-size: 12px;
  color: ${({theme})=>theme.itemTime};

`;

const ItemIcon= styled(Ionicons).attrs(({theme})=>({
    name:'arrow-forward',
    size:24,
    color:theme.itemIcon,
}))``;
//Item컴포넌트 만들기
//React.memo(component) 사용해서 리 렌더링 방지.
const Item = React.memo(({item:{id, title, description, createdAt},onPress})=>{
    console.log(id);
    return(
        <ItemContainer onPress={()=>onPress({id,title})}>
            <ItemTextContainer>
                <ItemTitle>{title}</ItemTitle>
                <ItemDesc>{description}</ItemDesc>
            </ItemTextContainer>
            <ItemTime>{getDateOrTime(createdAt)}</ItemTime>
            <ItemIcon/>
        </ItemContainer>
    );
});



const Container=styled.View`
  flex: 1;
  background-color: ${({theme})=>theme.background};
  
`;
// const StyledText = styled.Text`
//   font-size: 30px;
// `;

const ChannelList = ({navigation}) =>{
    const[channels,setChannels]=useState([]);//채널스상태변수
    useEffect(()=> { //마운트될때만 동작
        const unsubscribe = DB.collection('channels')//정렬방법은 생성된시간의역순
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => {
                const list = [];
                snapshot.forEach(doc => {
                list.push(doc.data());
            });
            setChannels(list);
            });
    return ()=>unsubscribe();
    },[]);
    return(
        <Container>
            <FlatList
                data={channels}
                renderItem={({item})=><Item
                    item={item}
                    onPress={params=>navigation.navigate('Channel',params)}
                />}
                keyExtractor={(item) => String(item.id)}//item=>item['id'].toString 오류나서 이걸로 바꿈.
                windowSize={5}
            />
        </Container>
    );
};

export default ChannelList;