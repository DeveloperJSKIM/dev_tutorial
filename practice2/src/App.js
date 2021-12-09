// import React,{createContext} from 'react';
// import styled from 'styled-components/native';
// import { UserProvider } from './contexts/User';
// import User from './components/User'
// const Container = styled.View`
//     flex:1;
//     background-color: beige;
//     align-items: center;
//     justify-content: center;
// `;

// export default function App() {

//   return (
//     <UserProvider>
//         <Container>
//             <User/>
//         </Container>
//     </UserProvider>
//   );
// }


import React from "react";
import styled from "styled-components/native";
import User from "./components/User";
import { UserProvider } from "./contexts/User";
const Container = styled.View`
    align-items: center;
    flex: 1;
    justify-content: center;
    background-color: black;
`;
//<UserProvier>로 상태관리할곳 전체 감싸줘야함.
export default function App(){
    return(
        <UserProvider>
        <Container>
            <User/>
        </Container>
        </UserProvider>
    );
}
