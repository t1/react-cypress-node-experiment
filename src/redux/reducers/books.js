import {DEC, INC, RECEIVE_BOOKS} from "../actionTypes";

export default function books(books = [], action) {
    console.log("booksReducer", books, action);

    const bookWith = update => {
        return books.map((book) => {
            if (book.id === action.payload.id) {
                const copy = {...book};
                update(copy);
                return copy;
            } else return book;
        });
    };

    switch (action.type) {
        case INC:
            return bookWith(book => book.author = book.author + "x");
        case DEC:
            return bookWith(book => book.author = book.author.substring(0, book.author.length - 1));
        case RECEIVE_BOOKS:
            return action.payload;
        default:
            return books;
    }
}
