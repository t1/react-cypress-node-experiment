import {createStore} from "redux";
import {DEC, INC} from "./actionTypes";

const initialState = {
    books: [
        {
            id: 1,
            author: "J.R.R. Tolkien",
            title: "The Hobbit",
        },
        {
            id: 2,
            author: "J.R.R. Tolkien",
            title: "The Lord Of The Rings",
        },
        {
            id: 3,
            author: "Steven King",
            title: "It"
        }
    ]
};

function reducer(state = initialState, action) {
    const bookWith = update => {
        const clone = JSON.parse(JSON.stringify(state));
        update(clone.books.find((p) => p.id === action.payload.id));
        return clone;
    };

    switch (action.type) {
        case INC:
            return bookWith(book => book.author = book.author + "x");
        case DEC:
            return bookWith(book => book.author = book.author.substring(0, book.author.length - 1));
        default:
            return state
    }
}

export default createStore(reducer);
