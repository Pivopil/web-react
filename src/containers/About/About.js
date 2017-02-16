import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {asyncConnect} from "redux-async-connect";


@connect(
    state => ({}), dispatch => ({
        dispatchAction: dispatch
    }))
export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <span>
                   Child element About
                </span>
            </div>
        );
    }
}


