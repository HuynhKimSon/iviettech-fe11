import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';

import TodoList from './TodoList/index';
import DefaultLayout from './layout/DefaultLayout';
import TodoListDetail from './TodoList/ShowDetail/index';

import history from './util/history'

import './index.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <React.StrictMode>
    <Router history={history} >
      <Switch>
        <DefaultLayout exact path="/todolist" component={TodoList} />
        <DefaultLayout exact path="/todolist/:id" component={TodoListDetail} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
