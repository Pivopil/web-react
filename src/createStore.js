import {applyMiddleware, createStore as _createStore} from "redux";
import reducer from "./reducers/modules/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "react-router-redux";
import createSagaMiddleware from 'redux-saga';


export function createStore(history, client) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [routerMiddleware(history), sagaMiddleware];
    const store = _createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
    client.getStore = () => store;
    return store;
}