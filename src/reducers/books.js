import {BOOK_MINUS, BOOK_PLUS, BOOKS_RECEIVE, booksReceive} from "../actions/bookActions";
import {INIT} from "../actions";

export default function books(state = {
    isFetching: false,
    books: []
}, action) {
    if (action.type.startsWith("BOOK_"))
        return {
            ...state,
            books: handleBook(state, action)
        };
    switch (action.type) {
        case INIT:
            requestBooks(action.store.dispatch);
            return {
                ...state,
                isFetching: true
            };
        case BOOKS_RECEIVE:
            return {
                ...state,
                isFetching: false,
                books: action.books
            };
        default:
            return state;
    }
}

function handleBook(state, action) {
    return state.books.map((book) => {
        if (book.id === action.id) {
            const copy = {...book};
            updateBook(copy, action);
            return copy;
        } else return book;
    });
}

function updateBook(book, action) {
    switch (action.type) {
        case BOOK_PLUS:
            return book.author = book.author + "x";
        case BOOK_MINUS:
            return book.author = book.author.substring(0, book.author.length - 1);
        default:
            console.error("unknown book action", action);
    }
}

function requestBooks(dispatch) {
    fetch("http://localhost:8080/books")
        .then(res => res.json(), err => console.error("error while fetching books:", err))
        .then(books => {if (books) dispatch(booksReceive(books))});
}

// const BOOK_TEMPLATE = template.parse("http://localhost:8080/books/{bookId}");

export const selectBooks = state => state.books;

export const selectBook = (state, bookId) => selectBooks(state).books.find(b => b.id === bookId);
// export const selectBook = (bookId) => {
//     console.log(`thunk select book $bookId`);
//     return (dispatch, getState) => {
//         console.log(`select book $bookId`);
//         fetch(BOOK_TEMPLATE.expand({bookId}))
//             .then(res => res.json(), err => console.error(`error while fetching book ${bookId}:`, err))
//             .then(book => {if (book) dispatch(bookReceive(book))});
//     }
// };
