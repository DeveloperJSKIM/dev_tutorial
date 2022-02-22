import React,{useState} from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import Button from './components/Button';
import Counter from './components/Counter';
import Form from './components/Form';
import CoinInfo from './components/CoinInfo';
import { useFetch } from './hooks/useFetch';
const Container = styled.View`
    flex:1;
    background-color: beige;
    align-items: center;
    justify-content: center;
`;
const LoadingText = styled.Text`
    font-size: 30px;
    color: hotpink;
`;
export default function App() {
    const [onoff,setOnoff] = useState(true);
    const URL='https://api.coinlore.net/api/tickers/?limit=3';//코인가격 URL
    const {data,error,inProgress}=useFetch(URL);//useFetch는 URL받아서 useEffect사용해서 URL의 데이터,에러,inProgress로 데이터 로딩중인지 상태가져옴.
    console.log(data);

   
  return (
    <Container>
        <Button title={'on/off'} onPress={()=>{setOnoff(!onoff)}}/>
        {onoff&&<Form/>}
        {inProgress&&<LoadingText>Loading....</LoadingText>}
        {data?.data.map(({symbol,name,price_usd})=>(<CoinInfo 
        key={symbol}
        symbol={symbol}
        name={name}
        price={price_usd}/>))}

    </Container>
  );
}
