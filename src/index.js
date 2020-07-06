import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk' //Redux-thunk is a middleWare that waists and see if any action return a fucntion instead of object
import './index.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();

//combining the reducers into a single function
const rootReducer = combineReducers({searchRobots,requestRobots})

const store = 
createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();