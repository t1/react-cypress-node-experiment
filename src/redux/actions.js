import {COUNT_DOWN, COUNT_UP, DEC, INC, RECEIVE_BOOKS} from "./actionTypes";

export const decAction = id => ({
    type: DEC,
    payload: {id}
});

export const incAction = id => ({
    type: INC,
    payload: {id}
});

export const countUp = () => ({
    type: COUNT_UP,
});

export const countDown = () => ({
    type: COUNT_DOWN,
});

export const receiveBooksAction = books => ({
    type: RECEIVE_BOOKS,
    payload: books
});
