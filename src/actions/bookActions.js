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

export const BOOKS_RECEIVE = 'BOOKS_RECEIVE';
export const booksReceive = books => ({
    type: BOOKS_RECEIVE,
    books: books
});
