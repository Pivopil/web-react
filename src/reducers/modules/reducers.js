import {combineReducers} from 'redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {routerReducer} from 'react-router-redux';
import {reducer as form} from 'redux-form';

const combinedReducers = combineReducers({
    form,
    reduxAsyncConnect,
    routing: routerReducer
});

export default combinedReducers;