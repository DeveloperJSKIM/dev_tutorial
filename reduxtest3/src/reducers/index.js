import {combineReducers} from "redux";
import counter from './counter';
import todos from "./todos";
//리듀서 여러개 사용할때 합쳐줌.
const rootReducer = combineReducers({
  counter,todos,
});

export default rootReducer;
