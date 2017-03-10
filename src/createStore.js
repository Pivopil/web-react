import "babel-polyfill"

import {applyMiddleware, createStore as _createStore} from "redux";
import combinedReducers from "./reducers/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "react-router-redux";
import createSagaMiddleware from 'redux-saga';
import sagas from './reducers/sagas';


export function createStore(history, client) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, routerMiddleware(history)];
    const store = _createStore(combinedReducers, composeWithDevTools(applyMiddleware(...middlewares)));
    //
    client.getStore = () => store;
    sagaMiddleware.run(sagas);
    return store;
}