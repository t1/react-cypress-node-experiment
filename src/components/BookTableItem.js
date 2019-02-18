import React from "react";
import Link from "react-router-dom/es/Link";
import {connect} from "react-redux";
import {selectBooks} from "../reducers/books";
import {bookFetch} from "../actions/bookActions";

const BookTableItem = ({book, children, bookFetch}) =>
    <tr>
        <td>{book.id}</td>
        <td>
            {children}
            {book.author}
        </td>
        <td>
            <Link onClick={() => bookFetch(book.id)} to={'/books/' + book.id}>{book.title}</Link>
        </td>
    </tr>;

export default connect(state => ({books: selectBooks(state)}), {
    bookFetch
})(BookTableItem);
