
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

export default function sagaCounter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case 'INCREMENT_IF_ODD':
            return (state % 2 !== 0) ? state + 1 : state;
        case DECREMENT:
            return state - 1;
        default:
            return state
    }
}

export function incrementAction() {
    return {type: INCREMENT};
}

export function decrementAction() {
    return {type: DECREMENT};
}

export function incrementAsyncAction() {
    return {type: INCREMENT_ASYNC};
}