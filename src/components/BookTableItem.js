import React from "react";
import Link from "react-router-dom/es/Link";
import {connect} from "react-redux";
import {selectBooks} from "../reducers/books";
import {bookFetch, bookMinus, bookPlus} from "../actions/bookActions";
import PlusMinus from "./PlusMinus";

const BookTableItem = ({book, bookPlus, bookMinus, bookFetch}) =>
    <tr>
        <td>{book.id}</td>
        <td>
            <PlusMinus id={`book-${book.id}`} plus={() => bookPlus(book.id)} minus={() => bookMinus(book.id)}/>
        </td>
        <td>
            <Link onClick={() => bookFetch(book.id)} to={'/books/' + book.id}>
                {book.author}: {book.title}
            </Link>
        </td>
    </tr>;

export default connect(state => ({books: selectBooks(state)}), {
    bookPlus,
    bookMinus,
    bookFetch
})(BookTableItem);
