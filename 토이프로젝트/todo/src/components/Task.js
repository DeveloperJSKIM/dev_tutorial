import React,{useState}from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { icons } from "../icons";
import Input from "./Input";//수정버튼누르면 Input불러옴

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({theme})=>theme.itemBackground};
    border-radius: 10px;
    padding: 5px;
    margin: 5px 0;
`;

const Contents =  styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({theme,completed})=>(completed ? theme.done: theme.text)};
    text-decoration-line: ${({completed})=>completed ? 'line-through':'none'};
`;

//조건 ?(참이면) A(실행) : B(참아닐때 실행) toggle에서 사용
//조건 ||(or)(참일때) (실행문)
const Task = ({item,deleteTask,toggleTask,updateTask})=>{
    const [isEditing,setIsEditing]=useState(false);//수정상태관리 수정중이면true
    const [text,setText]=useState(item.text); //수정중 텍스트 관리
    const _onSubmit =()=>{
        //수정상태가 참이라면
        if(isEditing){
            const updateItem = Object.assign({},item);
            //useState에 있는 item.text가 text임
            updateItem['text']=text;//item.text를 text로 변경
            setIsEditing(false);//수정상태를 false로 변경
            updateTask(updateItem);
        }
    };
    //수정중이면 Input나오고 아니면 리스트보여줌
    return isEditing?(<Input value={text} //수정중인 값 보여줌
                            onChangeText={text=>setText(text)} //수정중실시간state관리
                            onSubmitEditing={_onSubmit} //확인눌렀을때 updateTask 함수 호출
                            onBlur={()=>{ //focurs벗어날 때
                                setText(item.text); //기존내용으로 변경
                                setIsEditing(false); //수정상태 변경
                            }}/>):
    (
        <Container>
        <IconButton 
        icon={item.completed ? icons.check : icons.uncheck} //completed토글에따라 아이콘 변경
        onPress={toggleTask} //누르면 toggleTask호출
        item = {item}
        /> 
            <Contents completed={item.completed}>
                    {item.text}
            </Contents>
        {item.completed || <IconButton icon={icons.edit} onPress={()=>setIsEditing(true)}/>}
        <IconButton icon={icons.delete} item={item} onPress={deleteTask}/>
        </Container>
    );
};

Task.propTypes={
    //text: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
};

export default Task;