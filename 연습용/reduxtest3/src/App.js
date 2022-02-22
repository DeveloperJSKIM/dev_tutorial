import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ViewContainer from "./ViewContainer";
import rootReducer from "./reducers";

const store = createStore(rootReducer);//스토어만들어줌.
console.log(store.getState());
const App = () => {
  return(
    <Provider store={store}>
      <ViewContainer/>
    </Provider>
  );
}

export default App;

//Redux사용법.
//1.리듀서 폴더에 index.js하나만듦. ->combinereducer사용
//2.App.js에 store만들고 리듀서 연결해서 Provider로 감싼다.
//3.리듀서에는 액션,리듀서 순으로 만들어서 index.js에 연결.
//4.컴포넌트나 페이지에서 사용할 때 useSelector로 변화 감지시키고
//5.useDispach로 실행할 명령 연결시킴.
//6.dispach 불러오는 방법으로 실행.
