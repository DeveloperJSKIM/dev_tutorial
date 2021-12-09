// import React ,{useState,useContext}from "react";
// import styled from "styled-components/native";
// import UserContext from "../contexts/User";

// const StyledText = styled.Text`
//     font-weight: 700;
//     font-size: 40px;
//     color: darkblue;
// `;
// const StyledInput = styled.TextInput`
//     border: 1px solid #111111;
//     font-size: 26px;
//     padding: 10px;
//     width: 100%;
// `;

// const User = () =>{
//     const [text,setText]= useState('');
//     const {name,setName} = useContext(UserContext);
//     return(
//     <>   
//     <StyledText>Name:{name}</StyledText>
//     <StyledInput
//         value = {text}
//         onChangeText={setText}
//         onSubmitEditing = {()=>{
//             setName(text);
//             setText('');
//         }}
//     />
//     </>
//     );};
// export default User;

import React,{useState,useContext} from "react";
import styled from "styled-components/native";
import UserContext from "../contexts/User";

const StyledText = styled.Text`
    color: white;
    font-size: 20px;
`;

const StyledInput = styled.TextInput`
    border: 1px solid #ffffff;
    font-size: 20px;
    padding: 10px;
    width: 80%; 
    color: white;
`;

const User =() =>{
    const {name,setName}=useContext(UserContext);
    const [text,setText]= useState('');
    return(
        <>
            <StyledText>Name: {name}</StyledText>
            <StyledInput 
                value={text}
                onChangeText={setText}
                onSubmitEditing={
                    ()=>{
                        setName(text);
                        setText('');
                    }
                }
                />
        </>
    );

};

export default User;






