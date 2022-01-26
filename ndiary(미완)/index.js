/**
 * @format
 */
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App/index';
import {name as appName} from './app.json';
import {createStore,applyMiddleware,compose} from "redux";
import {Provider} from "react-redux";
import promiseMiddleware from 'redux-promise';
import reducers from './App/store/reducers';
import {composeWithDevTools} from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(reducers,(
    applyMiddleware(promiseMiddleware)
));

const appRedux=()=>(
    <Provider store={createStoreWithMiddleware}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRedux);
