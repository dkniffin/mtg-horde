import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from "react-redux";

import Routes from './routes';
import store from "./store"

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes history={hashHistory} />
  </Provider>,
  document.getElementById('root')
);
