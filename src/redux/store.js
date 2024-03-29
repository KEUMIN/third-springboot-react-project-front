import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;