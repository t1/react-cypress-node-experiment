export const BOOK_MINUS = 'BOOK_MINUS';
export const bookMinus = id => ({
    type: BOOK_MINUS,
    id: id
});

export const BOOK_PLUS = 'BOOK_PLUS';
export const bookPlus = id => ({
    type: BOOK_PLUS,
    id: id
});

export const COUNTER_UP = 'COUNTER_UP';
export const counterUp = () => ({
    type: COUNTER_UP,
});

export const COUNTER_DOWN = 'COUNTER_DOWN';
export const counterDown = () => ({
    type: COUNTER_DOWN,
});

export const BOOKS_RECEIVE = 'BOOKS_RECEIVE';
export const booksReceive = books => ({
    type: BOOKS_RECEIVE,
    books: books
});
