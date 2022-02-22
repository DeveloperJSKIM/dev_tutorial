import React,{useState,createContext} from "react";

const UserContext = createContext({//UserContext를 사용해서 user정보 보냄.
    user:{uid: null},
    setUser:()=>{}
});

const UserProvider = ({children})=>{
    const [user,setUserInfo]=useState({});
    const setUser=({uid})=>{
        setUserInfo({uid});//user의 uid값을 이동시킴.
    }
    const value = {user,setUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export {UserProvider,UserContext};