import {applyMiddleware, createStore as _createStore} from 'redux';
import reducer from './reducers/modules/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

export function createStore() {
    const middlewares = [];
    const store = _createStore(reducer,composeWithDevTools(applyMiddleware(...middlewares)));
    return store;
}