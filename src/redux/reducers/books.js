import {BOOK_MINUS, BOOK_PLUS, BOOKS_RECEIVE} from "../actionTypes";

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
        case BOOKS_RECEIVE:
            return action.books;
        default:
            return books;
    }
}
