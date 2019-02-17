import React from "react";
import {connect} from "react-redux";
import Table from "react-bootstrap/Table";

import BookTableItem from "./BookTableItem";
import PlusMinus from "./PlusMinus";

import {bookMinus, bookPlus} from "../actions/bookActions";
import {selectBooks} from "../reducers/books";

const BookTable = ({books, bookPlus, bookMinus}) => {
    if (books.isFetching)
        return <h4>Loading...</h4>;
    return <Table bordered size="sm">
        <thead>
        <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
        </tr>
        </thead>
        <tbody>
        {books.books.map((book) =>
            <BookTableItem book={book} key={book.id}>
                <PlusMinus plus={() => bookPlus(book.id)} minus={() => bookMinus(book.id)}/>&nbsp;
            </BookTableItem>
        )}
        </tbody>
    </Table>;
};

export default connect(state => ({books: selectBooks(state)}), {
    bookPlus,
    bookMinus
})(BookTable);
