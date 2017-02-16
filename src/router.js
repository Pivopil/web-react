import React from "react";
import {Route} from "react-router";
import App from "./containers/App/App";
import About from "./containers/About/About";


export default function getRoutes() {
    return (<Route path="/" component={App}><Route path="/about" component={About}/></Route>);
}