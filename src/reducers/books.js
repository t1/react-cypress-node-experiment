import {BOOK_MINUS, BOOK_PLUS, BOOKS_RECEIVE, booksReceive} from "../actions/bookActions";
import {INIT} from "../actions";

export default function books(books = [], action) {
    console.log("booksReducer", books, action);

    if (action.type.startsWith("BOOK_"))
        return books.map((book) => {
            if (book.id === action.id) {
                const copy = {...book};
                updateBook(copy, action);
                return copy;
            } else return book;
        });
    switch (action.type) {
        case INIT:
            requestBooks(action.store.dispatch);
            return books;
        case BOOKS_RECEIVE:
            return action.books;
        default:
            return books;
    }
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
