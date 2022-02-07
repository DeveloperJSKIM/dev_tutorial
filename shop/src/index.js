import React from 'react';
import ReactDOM, {createPortal} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";

import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

let initialState = [
    {id: 0, name:'멋진신발0',quan:2},
    {id: 1, name:'멋진신발1',quan:3},
    {id: 2, name:'멋진신발2',quan:4}
];

let alertInit = true;
let detailPage = 0;

const reducer=(state=initialState, Action)=>{
    if(Action.type==='수량증가'){
        let copy = [...state];
        copy[Action.payload].quan++;
        return copy
    }else if(Action.type==='수량감소'){
        let copy = [...state];
        copy[Action.payload].quan--;
        return copy
    }else if(Action.type==='장바구니추가'){
        let copy = [...state];
        if(Action.payload.id===copy.length-1){
            copy[copy.length-1].quan++
        }else{
            copy.push(Action.payload);
        }
        return copy
    }
    else{
        return state
    }
};
const reducer2=(state=alertInit, Action)=>{
    if(Action.type==='닫기'){
        state = false;
        return state;
    }else{
        return state
    }
}
const reducer3=(state=detailPage,Action)=>{
    if(Action.type==='페이지변경'){
        let num = Action.payload;
        return num
    }else{
        return state
    }
}
let store = createStore(combineReducers({reducer,reducer2,reducer3}));

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
            <App/>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
