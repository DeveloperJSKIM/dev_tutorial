import React,{useState,createContext} from "react";
//spiner 사용할 컨텍스트 만듦
const ProgressContext = createContext({
    inProgress: false,//기본 상태
    spinner:{start:()=>{},stop:()=>{}}//함수는 양식만 써줌.
});

const ProgressProvider = ({children})=>{
    const [inProgress,setInProgress] = useState(false);//inProgress,spinner
    const spinner={
        start: ()=>setInProgress(true),
        stop: ()=>setInProgress(false),
    };
    const value = {inProgress,spinner};
    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
}

export {ProgressProvider,ProgressContext};