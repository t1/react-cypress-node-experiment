import {BOOK_MINUS, BOOK_PLUS, BOOKS_RECEIVE, COUNTER_DOWN, COUNTER_UP} from "./actionTypes";

export const decAction = id => ({
    type: BOOK_MINUS,
    payload: {id}
});

export const incAction = id => ({
    type: BOOK_PLUS,
    payload: {id}
});

export const countUp = () => ({
    type: COUNTER_UP,
});

export const countDown = () => ({
    type: COUNTER_DOWN,
});

export const receiveBooksAction = books => ({
    type: BOOKS_RECEIVE,
    payload: books
});
