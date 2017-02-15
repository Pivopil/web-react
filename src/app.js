import ReactDOM from "react-dom";
import React, {Component} from "react";
import document from "global/document";
import {connect, Provider} from "react-redux";
import {asyncConnect} from "redux-async-connect";
import {createStore} from "./createStore";
import './styles/main.scss';

const store = createStore();

@connect(
    state => ({

    }), dispatch => ({
        dispatchAction: dispatch
    }))
export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Simple Complex Chart Example</h1>
                <span>
                    Hello!!!
                </span>
            </div>
        );
    }
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#index'));
