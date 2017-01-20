import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import reducer from "./reducers";

import initialState from './reducers/initialState';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
