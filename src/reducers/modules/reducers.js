import {combineReducers} from "redux";
import {reducer as reduxAsyncConnect} from "redux-async-connect";
import {reducer as form} from "redux-form";

const combinedReducers = combineReducers({
    form,
    reduxAsyncConnect
});

export default combinedReducers;