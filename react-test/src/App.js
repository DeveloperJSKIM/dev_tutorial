import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List.jsx';

function App() {
    const [lists,setLists]=useState([
        '내용1','내용2','내용3'
    ]);
  return (
    <div>
        <div>
            <h1 className={'head'}>TestHead</h1>
        </div>
        <List/>
        <List/>
        <List/>
    </div>
  );
}

export default App;
