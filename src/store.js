import { applyMiddleware, createStore } from "redux";

import reducer from "./reducers";

import initialState from './reducers/initialState';

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, initialState, middleware);
