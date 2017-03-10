import {combineReducers} from 'redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {routerReducer} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import counterReducer from './modules/counter';
import sagaCounter from './modules/sagaCounter';

const combinedReducers = combineReducers({
    form,
    reduxAsyncConnect,
    routing: routerReducer,
    counterReducer,
    sagaCounter
});

export default combinedReducers;