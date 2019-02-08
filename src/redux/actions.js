import {DEC, INC, RECEIVE_BOOKS} from "./actionTypes";

export const decAction = id => ({
    type: DEC,
    payload: {id}
});

export const incAction = id => ({
    type: INC,
    payload: {id}
});

export const receiveBooksAction = books => ({
    type: RECEIVE_BOOKS,
    payload: books
});
