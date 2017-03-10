import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {asyncConnect} from "redux-async-connect";

import {incrementAction, decrementAction, incrementAsyncAction} from './../../reducers/modules/sagaCounter';

@connect(
    state => ({
        sagaCounter: state.sagaCounter
    }),
    dispatch => ({
        dispatchAction: dispatch
    }))
export default class About extends Component {

    constructor(props) {
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onIncrementAsync = this.onIncrementAsync.bind(this);
    }

    onIncrement() {
        const {dispatchAction} = this.props;
        dispatchAction(incrementAction());
    }

    onDecrement() {
        const {dispatchAction} = this.props;
        dispatchAction(decrementAction());
    }

    onIncrementAsync() {
        const {dispatchAction} = this.props;
        dispatchAction(incrementAsyncAction());
    }

    render() {

        const {sagaCounter} = this.props;

        return (
            <div>
                <h1>About</h1>
                <span>
                   Child element About
                </span>
                <div>
                    <button onClick={this.onIncrement}>
                        Increment
                    </button>
                    {' '}
                    <button onClick={this.onDecrement}>
                        Decrement
                    </button>
                    {' '}
                    <button onClick={this.onIncrementAsync}>
                        Increment after 1 second
                    </button>
                    <hr />
                    <div>
                        Clicked: {sagaCounter} times
                    </div>
                </div>
            </div>
        );
    }
}


