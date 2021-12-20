import React from 'react';
import CounterListContainer from './src/containers/CounterListContainer';

import { createStore } from 'redux';

import reducers from './src/reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <CounterListContainer />
    </Provider>
  );
}

export default App;
