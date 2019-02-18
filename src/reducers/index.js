import {combineReducers} from "redux";

import counter from "./counter";
import book from "./book";
import books from "./books";

export default combineReducers({
    counter,
    book,
    books
});
