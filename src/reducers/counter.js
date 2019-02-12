import {COUNTER_DOWN, COUNTER_UP} from "../actions/counterActions";

export default function counter(counter = 0, action) {
    switch (action.type) {
        case COUNTER_UP:
            return counter + 1;
        case COUNTER_DOWN:
            return counter - 1;
        default:
            return counter;
    }
}
