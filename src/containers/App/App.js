import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {asyncConnect} from "redux-async-connect";

// action builders
import {increment, decrement} from '../../reducers/modules/counter';

@connect(
    state => ({
        counter: state.counterReducer.get('counter')
    }),
    dispatch => ({
        dispatchAction: dispatch
    }))
export default class App extends Component {

    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        const {dispatchAction} = this.props;
        dispatchAction(increment());
    }

    decrement() {
        const {dispatchAction} = this.props;
        dispatchAction(decrement());
    }

    render() {


        const {children, counter} = this.props;

        return (
            <div>
                <h1>Simple Complex Chart Example</h1>
                <div>Increment = {counter}</div>
                <span>
                    Number of children: {this.props.route.childRoutes.length}
                    {children}
                    <button onClick={this.increment}>Up</button>
                    <button onClick={this.decrement}>Down</button>
                </span>
            </div>
        );
    }
}


