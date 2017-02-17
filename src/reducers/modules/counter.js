import {fromJS} from "immutable";


const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const initialState = fromJS({counter: 0});

export default function counterReducer(state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT:
            return state.set('counter', state.get('counter') + 1);
        case DECREMENT:
            return state.set('counter', state.get('counter') - 1);
        default:
            return state;
    }
}

export function increment() {
    return {type: INCREMENT};
}
export function decrement() {
    return {type: DECREMENT};
}