import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'


import DefaultLayout from './layout/DefaultLayout';
import TodoList from './pages/Todolist/index';
import DetailTask from './pages/Detail/index';


import myReducer from './redux/reducers/index';

import history from './util/history'
import './index.css';
import reportWebVitals from './reportWebVitals';

const myStore = createStore( myReducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={myStore} >
    <Router history={history} >
      <Switch>

        <DefaultLayout exact path="/" component={TodoList} />
        <DefaultLayout exact path="/detail/:id" component={DetailTask} />

      </Switch>
    </Router>
  </Provider >
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
