//액션타입만들기
const SET_SIGNIN = 'SET_SIGNIN';
//액션생성함수만들기
export const setSignin = ()=>({type:SET_SIGNIN});

//초기상태선언
const initialState = {
  signin:false
};
export default function(state=initialState,action){
  switch (action.type){
    case SET_SIGNIN:
      return{
        ...state,
        signin:true
      };
    default:
      return state;
  }
}
