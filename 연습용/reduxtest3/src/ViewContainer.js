import React, { useCallback, useState } from "react";
import styled from "styled-components/native";
import Button from './components/Button';
import Input from './components/Input';
import { increase, decrease, setDiff } from "./reducers/counter";
import {useDispatch,useSelector} from "react-redux";
import TodoItem from './components/TodoItem';
import { addTodo, toggleTodo } from "./reducers/todos";
import Input2 from "./components/Input2";
const Container = styled.View`
  flex:1;
  background-color: darkseagreen;
  align-items: center;
  justify-content: center;
`;
const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
const Container2 =styled.View`
  flex-direction: row;
`;

const ViewContainer = () =>{

  //useSelector연결
  const {num,diff} = useSelector(state=>({
    num: state.counter.num, //state.리듀서이름.사용할state이름.
    diff: state.counter.diff
}));
  const todos = useSelector(state=>state.todos);//이렇게 사용할 수도 있음.
  //디스패치
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  const onCreate = text =>dispatch(addTodo(text));
  const onToggle = useCallback(id=>dispatch(toggleTodo(id)),[dispatch]); //useCallback사용하면 함수 재사용함. useMemo는 결과값재사용

  const [text,setText] = useState('');//글자는 그냥 useState사용하고 버튼누를때만 store업데이트함.

  const _onSubmit =()=>{ //확인버튼이나 onSubmitediting눌렀을때 호출.
    onCreate(text);
    setText('');
  }

  return(
    <Container>
    <StyledText>{num}</StyledText>
      <Input
        value={diff}
        onChangeNumber={onSetDiff}
        placeholder={'number'}
        keyboardType={'number-pad'}
      />
      <Button title ={'더하다'} onPress={()=>onIncrease()}/>
      <Button title ={'빼다'} onPress={()=>onDecrease()}/>
      <Container2>
      <Input2
        value={text}
        onChangeText={setText}
        placeholder={'setText'}
        onSubmitEditing = {_onSubmit}
      />
      <Button title={'새로만들기'} onPress={_onSubmit}/>
      </Container2>
      {Object.values(todos).map(item=>(
        <TodoItem
          key ={item.id}
          item ={item}
          onPress={onToggle}
        />
      ))}

    </Container>
  );
}
export default ViewContainer;
