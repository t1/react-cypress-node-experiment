import {BOOK_RECEIVE, BOOK_REQUEST} from "../actions/bookActions";

const book = (state = {
    isFetching: false,
    lastUpdated: undefined,
    data: {}
}, action) => {
    switch (action.type) {
        case BOOK_REQUEST:
            return {
                ...state,
                isFetching: true,
                data: {id: action.bookId}
            };
        case BOOK_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: action.book,
                lastUpdated: action.receivedAt
            };
        default:
            return state;
    }
};
export default book

export const selectBook = (state, bookId) => state.book && state.book.data && state.book.data.id === bookId ? state.book : undefined;
