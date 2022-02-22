//Action  선언
const INCREASE = 'INCREASE';//더하기액션
const DECREASE = 'DECREASE';//빼기액션
const SET_DIFF = 'SET_DIFF';//얼마나더하고뺄지 값정함


export const increase = () =>({
  type:INCREASE
});

export const decrease = () =>({
  type:DECREASE
});
export const setDiff = diff =>({
  type:SET_DIFF,
  diff
})//diff하는 이유 =나중에 diff값을 받아야함. 더하기빼기는 입력받을값없음.

//기본값 세팅
const initialState = {
  diff:0,
  num:0,
  text:'',
  list:[]
}
//리듀서 작성
export default function counter(state=initialState,action){
  switch (action.type){
    case INCREASE:
      return{
        ...state,
        num:state.num+state.diff
      };
    case DECREASE:
      return {
        ...state,
        num:state.num-state.diff
      };
    case SET_DIFF:
      return{
        ...state,
        diff:action.diff
      }
    default:
      return state;
  }
}
