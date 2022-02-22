import React, {useState} from "react";
import styled from "styled-components";

const Container =styled.div`
  background-color: beige;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
const Button = styled.button`
  background-color: cornflowerblue;
  border: 0;
  border-radius: 5px;
  padding: 2px 5px;
  cursor: pointer;
  margin-right: 20px;
`;

const App=()=>{
    let [number,setNumber]=useState("NONE");

    // const promise = new Promise((res,rej)=>{
    //     setTimeout(()=>{
    //         res("A");
    //         rej("error");
    //     },2000);
    // });
    const delay=(ms)=>{
        return new Promise(resolve => setTimeout(resolve,ms));
    }
    const asyncTest = async ()=>{
        await delay(3000);
        console.log("HEY");
    }
//Promise 만드는 법: const 함수명 = new Promise((성공시담김,실패시담김)=>{
// 성공시담김( 호출하면 바로 실행 && 담을 내용 지정할 수 있다.)
// 실패시담김( 실패하면 호출할 내용)
// }
// 사용시: 함수명.then((담겨온내용)=>{프로미스실행후 할 것들.}).catch((에러)=>{에러발생시}).finally(()=>{실행되던안되던ㄱㄱ})
  return (
    <Container>
      <InnerContainer>
          <Button onClick={()=>{
              asyncTest();
              }}
          >HO</Button>
          <div>{number}</div>
      </InnerContainer>
    </Container>
  );
}

export default App;
