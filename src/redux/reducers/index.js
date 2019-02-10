import {combineReducers} from "redux";
import counter from "./counter";
import books from "./books";

export default combineReducers({
    books,
    counter
});
