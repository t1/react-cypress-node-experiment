import {BOOK_MINUS, BOOK_PLUS, BOOKS_RECEIVE, booksReceive} from "../actions/bookActions";
import {INIT} from "../actions";

export default (state = {
    isFetching: false,
    items: [],
    lastUpdated: undefined
}, action) => {
    if (action.type.startsWith("BOOK_"))
        return {
            ...state,
            items: handleBook(state, action)
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
                items: action.items,
                lastUpdated: action.receivedAt
            };
        default:
            return state;
    }
}

function handleBook(state, action) {
    return state.items.map((book) => {
        if (book.id === action.id) {
            const nextBook = {...book};
            updateBook(nextBook, action);
            return nextBook;
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

export const selectBooks = state => state.books;
