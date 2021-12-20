import React, {useState} from 'react';
import {StatusBar, Dimensions} from 'react-native';
import styled,{ThemeProvider} from 'styled-components/native';
import { theme } from './theme';
import Input from './components/Input';
import IconButton from './components/IconButton';
import { icons } from './icons';
import Task from './components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';


const Container = styled.View`

    flex:1;
    background-color:${({theme})=>theme.background};
    align-items: center;
    justify-content: flex-start;

`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({theme})=>theme.main};
    width: 100%;
    align-items: flex-end;
    padding: 0 20px;
`;

const List = styled.ScrollView`
    flex:1;
    width: ${({width})=>width-40}px;
    
`;

export default function App() {
    const width = Dimensions.get('window').width;
    const [newTask,setNewTask]=useState('');//새로 글쓰면 계속해서 업데이트
    // const tempData={//무조건 const [tasks,setTasks]=useState(tempData); 이전에 나와야하는데
    //             //이거모르고 삽질 몇시간함.

    //     '1':{id: '1', text:'one',completed: false},
    //     '2':{id: '2', text:'two',completed: true},JL
    //     '3':{id: '3', text:'three',completed: false},
    // };
    const [tasks,setTasks]=useState({});//여기에 List 내용 들어감
    //저장
    const storeData = async tasks =>{ //내부 스토리지에 저장하기
        await AsyncStorage.setItem('tasks',JSON.stringify(tasks)); //tasks 키로, 전달된 객체 문자열로 저장
        setTasks(tasks);
    };
    //불러오기
    const getData = async() =>{
        const loadedData = await AsyncStorage.getItem('tasks'); //키 tasks 에서 데이터 가져옴.
        setTasks(JSON.parse(loadedData||'{}')); //setTasks함수 호출. 아무것도 없을시 빈 객체 반환
    };

    //추가
    const addTask = ()=>{
        if (newTask.length<1){//아무것도 안썻을때
            alert("입력없음");
            return;
        }
        const ID = Date.now().toString();//ID값을 현재시간으로 저장
        const newTaskObject={
            [ID]:{id: ID, text: newTask, completed:false}//ID:현재시간
        }
        setNewTask('');
        //setTasks({...tasks,...newTaskObject}); tasks복사해서 newTaskObject더함.
        storeData({...tasks,...newTaskObject});
    };

    //삭제
  const deleteTask=id=>{
      const currentTasks = Object.assign({},tasks); //Object.assign(A,B); B에있는내용A에 집어넣음
      delete currentTasks[id]; //받아온 id값 참조해서 지움.
      //setTasks(currentTasks); 지워진 리스트 적용
      storeData(currentTasks); //스토어 데이터에서 저장하고 setTask불러옴
  };
    //완료처리
  const toggleTask=id=>{
      const currentTasks = Object.assign({},tasks);
      currentTasks[id]['completed'] = !currentTasks[id]['completed']; //받은 id의 completed값 토글
      //setTasks(currentTasks); 토글한 리스트 적용
      storeData(currentTasks); //스토어 데이터에서 저장하고 setTask불러옴

  };
    //수정처리
  const updateTask=item=>{
      const currentTasks = Object.assign({},tasks);
      currentTasks[item.id]=item;//수정하는 아이템 전체를 변경
      //setTasks(currentTasks); 수정한 리스트 적용
      storeData(currentTasks);
  };

  const [isReady,setIsReady] = useState(false); //로딩중인지 아닌지 판별하는 state

  return isReady?(
    <ThemeProvider theme={theme}>
        <Container>
        <Title>TODO List</Title>
        <Input placeholder="+add a Task!!" //palceholder=input에 아무것도 안썻을때 나타나는 값
        value={newTask} //텍스트입력에 표시할 값
        onChangeText={text=>setNewTask(text)}// text값 변할때마다 newTask에 저장
        onSubmitEditing={addTask} //확인누르면 addTask 함수 호출
        obBulr={()=>setNewTask('')} //포커스 잃으면 수정된 입력값 날아감
        />
        <List width={width}>
            {Object.values(tasks).reverse().map( //목록 맵핑 최근글이 위로오도록 reverse()줌.
                item =>(
                    <Task key={item.id}  //tasks에서 각각의 id
                    item={item} //id,text,completed
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                    updateTask={updateTask}/>
                ))}
        </List>
        </Container>
    </ThemeProvider>
  ):(<AppLoading
    startAsync={getData}//앱시작하기 전에 데이터 가져옴.
    onFinish={()=>setIsReady(true)}//로딩끝나면 화면 가져오도록함
    onError={()=>{}}//아무작업도안함.
  />);
}
