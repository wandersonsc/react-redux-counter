import rootReducer from "./Reducers";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

const store = state => createStore(rootReducer, state, applyMiddleware(thunk));

export default store;
