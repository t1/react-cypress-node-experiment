import {createStore} from "redux";
import {DEC, INC} from "./actionTypes";

const initialState = {
    persons: [
        {
            id: 1,
            firstName: "Mark",
            lastName: "Otto",
            userName: "@mdo"
        },
        {
            id: 2,
            firstName: "Peter",
            lastName: "Thornton",
            userName: ""
        },
        {
            id: 3,
            firstName: "Larry the Bird",
            userName: "@twitter"
        }
    ]
};

function data(state = initialState, action) {
    // console.log(state, action);

    const personWith = update => {
        const clone = JSON.parse(JSON.stringify(state));
        update(clone.persons.find((p) => p.id === action.payload.id));
        return clone;
    };

    switch (action.type) {
        case INC:
            return personWith(person => person.firstName = person.firstName + "x");
        case DEC:
            return personWith(person => person.firstName = person.firstName.substring(0, person.firstName.length - 1));
        default:
            return state
    }
}

export default createStore(data);
