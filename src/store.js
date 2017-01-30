import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import reducer from "./reducers";

import initialState from './reducers/initialState';

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;
