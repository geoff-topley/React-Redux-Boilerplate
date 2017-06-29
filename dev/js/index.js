import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducers';
import App from './components/app'

const store = createStore(allReducers)

ReactDOM.render(

  // PROVIDER - pipes store content to container
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
