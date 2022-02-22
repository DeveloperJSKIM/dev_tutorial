import { useState,useEffect } from "react";

export const useFetch = (url)=>{
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [inProgress,setInProgress]=useState(false);

    useEffect(() =>{
        const getData = async () =>{//async 함수 => await(async안에서만 사용가능 데이터등 받을때까지 기다림.)
        try{
            setInProgress(true);
            const res = await fetch(url);
            const result = await res.json();
            setData(result);
        } catch(e){
            setError(e);
        } finally {
            setInProgress(false);
        }
    };
    getData();//useEffect에서 async 바로사용할 수 없어서 getData함수 만들어서 한번 감싸줌.
    },[]);//마운트 될 때 한번만 실행됨
    return {data,error,inProgress};
}