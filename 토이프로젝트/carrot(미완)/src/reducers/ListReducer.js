const ADD_LIST_ITEM = 'ADD_LIST_ITEM';

const addListItem = item =>({
  type:ADD_LIST_ITEM,
  item
});
const initialState = [{
  id: 0,
  title:'',
  price:'',
  contents:'',
}]
export default function ListReducer(state=initialState,action){
  switch (action.type){
    case ADD_LIST_ITEM:
      return{
        ...state,


      }
  }
}
