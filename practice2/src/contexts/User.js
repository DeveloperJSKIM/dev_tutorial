// import React,{createContext,useState} from "react";

// const UserContext = createContext({ //Contxst API 생성
//     name: '',
//     setName: () =>{},
// });

// const UserProvider = ({children})=>{ //생성자 함수
//     const[name,setName]=useState('JSKIM');
//     const value = {name,setName};
//     return(
//         <UserContext.Provider value={value}>{children}</UserContext.Provider>
//     );
// }

// const UserConsumer = UserContext.Consumer; //소비자 그냥 만들어둠
// export {UserProvider,UserConsumer}; 
// export default UserContext;

import React,{createContext,useState} from "react";

const UserContext = createContext({//어떤인자 있는지 형식만 만들어서 정의
    name:'',
    setName:()=>{},
});
const UserProvider = ({children})=>{//정의된 형식으로 value값 넣어줌.
    const [name,setName]=useState('JSKIM');
    const value = {name,setName};//Provider에 value값 꼭 넣어줘야함.
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
const UserConsumer = UserContext.Consumer;//소비자

export {UserProvider,UserConsumer};
export default UserContext;