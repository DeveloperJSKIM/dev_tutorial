/**
 * @format
 */
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//
import {createStore, applyMiddleware,compose} from "redux";
import {Provider} from "react-redux";
import promiseMiddleware from 'redux-promise';
import reducers from "./src/store/reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const createStoreWithMiddleWare = createStore(reducers,composeEnhancers(
  applyMiddleware(promiseMiddleware)
));
console.log(createStoreWithMiddleWare.getState());
const appRedux = ()=>{
  return(
    <Provider store={createStoreWithMiddleWare}>
      <App/>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => appRedux);
