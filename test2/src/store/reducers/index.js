import {combineReducers} from "redux";
import Sample from './sample_reducer';
import authBtnHandler from "./authBtnHandler";
import Counter from "./counter";
const rootReducer = combineReducers({
  Sample,Counter
});

export default rootReducer;
