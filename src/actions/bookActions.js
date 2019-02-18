import template from "url-template";
import {selectBook} from "../reducers/book";

export const BOOK_MINUS = 'BOOK_MINUS';
export const bookMinus = id => ({
    type: BOOK_MINUS,
    id: id
});

export const BOOK_PLUS = 'BOOK_PLUS';
export const bookPlus = id => ({
    type: BOOK_PLUS,
    id: id
});

export const BOOKS_REQUEST = 'BOOKS_REQUEST';
export const booksRequest = () => ({
    type: BOOKS_REQUEST,
});

export const BOOKS_RECEIVE = 'BOOKS_RECEIVE';
export const booksReceive = books => ({
    type: BOOKS_RECEIVE,
    items: books,
    receivedAt: new Date()
});

export const BOOK_REQUEST = 'BOOK_REQUEST';
export const bookRequest = bookId => ({
    type: BOOK_REQUEST,
    bookId: bookId
});

const BOOK_TEMPLATE = template.parse("http://localhost:8080/books/{bookId}");
const bookFetchDo = (bookId) => {
    return dispatch => {
        dispatch(bookRequest(bookId));
        return fetch(BOOK_TEMPLATE.expand({bookId}))
            .then(
                res => res.json(),
                err => console.error(`error while fetching book ${bookId}:`, err))
            .then(book => {if (book) dispatch(bookReceive(book))});
    }
};

export const BOOK_RECEIVE = 'BOOK_RECEIVE';
export const bookReceive = book => ({
    type: BOOK_RECEIVE,
    book: book,
    receivedAt: new Date()
});

const shouldFetchBook = (state, bookId) => {
    const book = selectBook(state, bookId);
    return !book;
};

export const bookFetch = bookId =>
    (dispatch, getState) =>
        shouldFetchBook(getState(), bookId) ? dispatch(bookFetchDo(bookId)) : Promise.resolve();
