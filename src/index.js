import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from "react-redux";

import Routes from './routes';
import store from "./store"

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
