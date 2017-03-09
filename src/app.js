import ReactDOM from "react-dom";
import React, {Component} from "react";
import document from "global/document";
import {connect, Provider} from "react-redux";
import {asyncConnect, ReduxAsyncConnect} from "redux-async-connect";
import {createStore} from "./createStore";
import "./styles/main.scss";
import HttpClient from './httpClient';
import {Router, hashHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import getRoutes from "./router";

const client = new HttpClient();
const store = createStore(hashHistory, client);
const history = syncHistoryWithStore(hashHistory, store);

const routers = (
    <Router history={history} render={(props) =>
        <ReduxAsyncConnect helpers={{client}} {...props} filter={item => !item.deferred}/>}>
        {getRoutes()}
    </Router>
);




ReactDOM.render(<Provider store={store} >{routers}</Provider>, document.querySelector('#index'));
