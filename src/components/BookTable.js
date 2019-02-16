import React from "react";
import Table from "react-bootstrap/Table";
import {connect} from "react-redux";

import BookItem from "./BookItem";
import {bookMinus, bookPlus} from "../actions/bookActions";
import PlusMinus from "./PlusMinus";
import {selectBooks} from "../reducers/books";

const BookTable = ({books, bookPlus, bookMinus}) =>
    <Table bordered size="sm">
        <thead>
        <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
        </tr>
        </thead>
        <tbody>
        {books
            ? books.map((book) =>
                <BookItem book={book} key={book.id}>
                    <PlusMinus plus={() => bookPlus(book.id)} minus={() => bookMinus(book.id)}/>&nbsp;
                </BookItem>
            ) : (
                <tr>
                    <td colSpan={3}>
                        <h4>Loading...</h4>
                    </td>
                </tr>
            )
        }
        </tbody>
    </Table>;

export default connect(state => ({books: selectBooks(state)}), {
    bookPlus,
    bookMinus
})(BookTable);
