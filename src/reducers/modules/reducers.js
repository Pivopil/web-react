import {combineReducers} from 'redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {routerReducer} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import counterReducer from './counter';

const combinedReducers = combineReducers({
    form,
    reduxAsyncConnect,
    routing: routerReducer,
    counterReducer
});

export default combinedReducers;