const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

let nextId = 1; //todolist에서 사용할 id

export const addTodo = text =>({
  type: ADD_TODO,
  todo:{
    id:nextId++,//아이디값1부터 하나씩 증가
    text
  }
});

export const toggleTodo = id =>({
  type:TOGGLE_TODO,
  id
});

const initialState = [{
  id:0,
  text:'SAMPLE',
  done: false
}
];

export default function todos(state=initialState,action){
  switch (action.type){
    case ADD_TODO:
      return state.concat(action.todo);//addTodo 액션의 todo값추가한다.
    case TOGGLE_TODO:
      return state.map( //왜 map쓰는지 이해안됨. 토글함.
        todo=>todo.id===action.id
        ?{...todo,done:!todo.done}:todo
      );
    default:
      return state;
  }
}
