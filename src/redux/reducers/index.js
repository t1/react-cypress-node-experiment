import {DEC, INC, RECEIVE_BOOKS} from "../actionTypes";

export default function rootReducer(state = {
    books: [],
    counter: 0
}, action) {
    console.log("reducer", action);

    const bookWith = update => {
        return {
            ...state,
            books: state.books.map((book) => {
                if (book.id === action.payload.id) {
                    const copy = {...book};
                    update(copy);
                    return copy;
                } else return book;
            })
        };
    };

    switch (action.type) {
        case INC:
            if (action.payload.id === 1) return {
                ...state,
                counter: state.counter + 1
            };
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
