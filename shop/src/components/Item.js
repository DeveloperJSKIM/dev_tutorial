import React, {useContext} from "react";
import axios from 'axios';
import {재고context} from "../App";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Item=({src,title,price,content,id})=>{
    let history=useHistory();
    let 재고 = useContext(재고context);
    let dispatch = useDispatch();
    let selected = useSelector(state => state.reducer3);
    return(
        <div className={'col-md-4'}>
            <img src={src} width={"100%"}/>
            <h4 onClick={()=>{
                history.push('/detail');
                dispatch({type:'페이지변경',payload:id});
            }}>{title}</h4>
            <p>{content} & {price}</p>
            <p>재고: {재고}</p>
        </div>
    );
}

export default Item;
