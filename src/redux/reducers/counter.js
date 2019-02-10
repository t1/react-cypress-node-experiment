import {COUNT_DOWN, COUNT_UP} from "../actionTypes";

export default function counter(counter = 0, action) {
    switch (action.type) {
        case COUNT_UP:
            return counter + 1;
        case COUNT_DOWN:
            return counter - 1;
        default:
            return counter;
    }
}
