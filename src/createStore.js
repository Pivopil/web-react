import {applyMiddleware, createStore as _createStore} from "redux";
import reducer from "./reducers/modules/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "react-router-redux";

export function createStore(history) {

    const middlewares = [routerMiddleware(history)];
    const store = _createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
    return store;
}