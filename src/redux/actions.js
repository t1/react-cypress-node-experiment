import {BOOK_MINUS, BOOK_PLUS, BOOKS_RECEIVE, COUNTER_DOWN, COUNTER_UP} from "./actionTypes";

export const bookMinus = id => ({
    type: BOOK_MINUS,
    id: id
});

export const bookPlus = id => ({
    type: BOOK_PLUS,
    id: id
});

export const counterUp = () => ({
    type: COUNTER_UP,
});

export const counterDown = () => ({
    type: COUNTER_DOWN,
});

export const booksReceive = books => ({
    type: BOOKS_RECEIVE,
    books: books
});
