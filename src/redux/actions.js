import {DEC, INC} from "./actionTypes";

export const decAction = id => ({
    type: DEC,
    payload: {id}
});

export const incAction = id => ({
    type: INC,
    payload: {id}
});
