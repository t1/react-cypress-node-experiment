import {DEC, INC, RECEIVE_BOOKS} from "../actionTypes";

export default function rootReducer(state = {books: []}, action) {
    console.log("reducer", action);

    const bookWith = update => {
        const booksCopy = [...state.books];
        update(booksCopy.find((p) => p.id === action.payload.id));
        return {books: booksCopy};
    };

    switch (action.type) {
        case INC:
            return bookWith(book => book.author = book.author + "x");
        case DEC:
            return bookWith(book => book.author = book.author.substring(0, book.author.length - 1));
        case RECEIVE_BOOKS:
            return {books: action.payload};
        default:
            return state
    }
}
