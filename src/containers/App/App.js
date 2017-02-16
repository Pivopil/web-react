import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {asyncConnect} from "redux-async-connect";


@connect(
    state => ({}), dispatch => ({
        dispatchAction: dispatch
    }))
export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Simple Complex Chart Example</h1>
                <span>
                    Hello!!!
                    {this.props.children}
                </span>
            </div>
        );
    }
}


