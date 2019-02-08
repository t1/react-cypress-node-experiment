import {createStore} from "redux";
import {DEC, INC, RECEIVE_BOOKS} from "./actionTypes";

function reducer(state = {books: []}, action) {
    // console.log("reducer", action);

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
        case RECEIVE_BOOKS:
            return {
                ...state,
                books: action.payload
            };
        default:
            return state
    }
}

export default createStore(reducer);
