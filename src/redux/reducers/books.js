import {DEC, INC, RECEIVE_BOOKS} from "../actionTypes";

function updateBook(book, action) {
    switch (action.type) {
        case INC:
            return book.author = book.author + "x";
        case DEC:
            return book.author = book.author.substring(0, book.author.length - 1);
        default:
            console.error("unknown book action", action);
    }
}

export default function books(books = [], action) {
    console.log("booksReducer", books, action);

    switch (action.type) {
        case INC:
        case DEC:
            return books.map((book) => {
                if (book.id === action.payload.id) {
                    const copy = {...book};
                    updateBook(copy, action);
                    return copy;
                } else return book;
            });
        case RECEIVE_BOOKS:
            return action.payload;
        default:
            return books;
    }
}
